'use client';

import React, { useEffect, useRef, useState } from 'react';
import { X } from 'react-feather';

type Status = 'idle' | 'submitting' | 'success' | 'error';
type QuickStatus = 'idle' | 'submitting' | 'submitted' | 'error';

const QUICK_IDEA_MAX_LENGTH = 280;

const IdeaSubmission: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const titleInputRef = useRef<HTMLInputElement>(null);

  const [quickIdea, setQuickIdea] = useState('');
  const [quickStatus, setQuickStatus] = useState<QuickStatus>('idle');
  const [quickError, setQuickError] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    titleInputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const resetForm = () => {
    setName('');
    setTitle('');
    setDescription('');
    setCompany('');
    setStatus('idle');
    setErrorMessage('');
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(resetForm, 200);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      setErrorMessage('Please fill in both the title and description.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, title, description, company }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  const handleQuickSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const value = quickIdea.trim();
    if (!value) return;

    setQuickStatus('submitting');
    setQuickError('');

    try {
      const response = await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: '',
          title: value.length > 60 ? `${value.slice(0, 57)}...` : value,
          description: value,
          company: '',
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong.');
      }

      setQuickStatus('submitted');
    } catch (error) {
      setQuickStatus('error');
      setQuickError(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  const resetQuick = () => {
    setQuickIdea('');
    setQuickStatus('idle');
    setQuickError('');
  };

  return (
    <>
      <div className="w-full text-left mt-10">
        <div className="rounded-xl overflow-hidden border border-slate-700 shadow-lg bg-[#0d1117]">
          <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-800/80 border-b border-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-slate-400">idea.py</span>
          </div>

          <div className="p-4 font-mono text-xs sm:text-sm leading-relaxed">
            <p className="text-slate-500">
              # I&apos;m not much of an idea person myself, but I love
            </p>
            <p className="text-slate-500 mb-2">
              # turning other people&apos;s ideas into reality — got one?
            </p>

            <p>
              <span className="text-slate-500">&gt;&gt;&gt; </span>
              <span className="text-sky-300">idea</span>
              <span className="text-slate-400"> = </span>
              <span className="text-yellow-300">input</span>
              <span className="text-slate-400">(</span>
              <span className="text-emerald-300">&quot;what&apos;s on your mind? &quot;</span>
              <span className="text-slate-400">)</span>
            </p>

            {quickStatus === 'submitted' ? (
              <p className="text-slate-200 break-words">what&apos;s on your mind? {quickIdea}</p>
            ) : (
              <form onSubmit={handleQuickSubmit} className="flex items-start">
                <span className="text-slate-200 whitespace-pre">what&apos;s on your mind? </span>
                <input
                  type="text"
                  value={quickIdea}
                  onChange={(event) => setQuickIdea(event.target.value)}
                  disabled={quickStatus === 'submitting'}
                  maxLength={QUICK_IDEA_MAX_LENGTH}
                  autoComplete="off"
                  aria-label="Type your idea and press Enter to send it"
                  placeholder="type here, press Enter…"
                  className="flex-1 min-w-0 bg-transparent border-none outline-none text-slate-100 caret-teal-400 placeholder-slate-600 disabled:opacity-60"
                />
              </form>
            )}

            {quickStatus === 'submitted' && (
              <>
                <p className="mt-1">
                  <span className="text-slate-500">&gt;&gt;&gt; </span>
                  <span className="text-yellow-300">print</span>
                  <span className="text-slate-400">(</span>
                  <span className="text-emerald-300">&quot;Thanks — got it!&quot;</span>
                  <span className="text-slate-400">)</span>
                </p>
                <p className="text-teal-400 mb-2">Thanks — got it. I&apos;ll take a look!</p>
                <button
                  type="button"
                  onClick={resetQuick}
                  className="text-slate-500 hover:text-slate-300 text-xs underline underline-offset-2"
                >
                  submit another
                </button>
              </>
            )}

            {quickStatus === 'error' && (
              <p className="text-red-400 mt-1">SubmissionError: {quickError}</p>
            )}

            <p className="mt-2">
              <span className="text-slate-500">&gt;&gt;&gt; </span>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Open the full idea submission form with a title, description, and your name"
                className="text-yellow-300 hover:text-yellow-200 underline decoration-dotted underline-offset-4"
              >
                submit_idea()
              </button>
              <span className="text-slate-500 hidden sm:inline">
                {' '}
                # or click for the full form (title, description, name)
              </span>
            </p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Submit an idea"
            className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-xl max-h-[90vh] overflow-y-auto text-left"
            onClick={(event) => event.stopPropagation()}
          >
            {status === 'success' ? (
              <div className="text-center py-6">
                <p className="text-lg font-medium text-teal-600 dark:text-teal-400 mb-2">Thanks for the idea!</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  I&apos;ll take a look and see what I can build.
                </p>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Submit an Idea</h3>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Honeypot field: hidden from real users, bots tend to fill every field. */}
                <input
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Anonymous"
                    maxLength={60}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={titleInputRef}
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                    maxLength={120}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                    maxLength={2000}
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {errorMessage && (
                  <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Submitting…' : 'Submit'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default IdeaSubmission;

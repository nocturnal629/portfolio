export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow
                   dark:bg-slate-800 dark:border-slate-700 dark:hover:shadow-slate-600">
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 mb-4 dark:text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} 
                className="px-2 py-1 rounded-full text-sm
                           bg-teal-100 text-teal-800
                           dark:bg-teal-900 dark:text-teal-200">
            {t}
          </span>
        ))}
      </div>
      {link && (
        <a href={link} 
           className="text-teal-600 hover:underline flex items-center gap-1
                      dark:text-teal-400">
          View Project <span aria-hidden="true">→</span>
        </a>
      )}
    </div>
  );
}
import React from 'react';

function TeamMember({ title, imgUrl, tech, workUrl }) {
  return (
    <a
      href={workUrl}
      target="_blank"
      rel="noreferrer"
      className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden p-2 my-2 transition transform hover:scale-105 hover:bg-slate-200 dark:hover:bg-slate-700" // Add hover classes here
    >
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-48 object-cover rounded-lg" // Apply rounded corners here
      />
      <div className="w-full text-gray-600 dark:text-gray-300">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {tech.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default TeamMember;

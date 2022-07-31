import React from "react";

const Images = ({ results }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-6 gap-1">
      {results?.map(({ image, link: { href, title } }, index) => (
        <a
          href={href}
          key={index}
          className="sm:p-5 p-3  "
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={image?.src}
            alt={title}
            loading="lazy"
            className="rounded-lg"
          />
          <p className="w-26 break-words text-sm mt-2 font-normal">{title}</p>
        </a>
      ))}
    </div>
  );
};

export default Images;

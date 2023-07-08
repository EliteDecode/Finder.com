import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
const Images = ({ results }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [loaded, setLoaded] = useState(10);

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      setIsLoading(true); // show spinner
      setTimeout(() => {
        setLoaded(loaded + 10); // load 20 more images
        setIsLoading(false); // hide spinner
      }, 2000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-1">
        {results?.value
          ?.slice(0, loaded)
          .map(
            (
              {
                contentUrl,
                hostPageDomainFriendlyName,
                hostPageUrl,
                image,
                name,
              },
              index
            ) => (
              <a
                href={hostPageUrl}
                key={index}
                className="sm:p-5 p-3  "
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={contentUrl}
                  alt={name}
                  loading="lazy"
                  className="rounded-lg"
                />
                <p className="font-semibold text-sm opacity-90 mt-2">
                  {hostPageDomainFriendlyName}
                </p>
                <p className="w-26 break-words text-sm  font-normal">{name}</p>
              </a>
            )
          )}
      </div>
      {isLoading && (
        <div className="flex justify-center items-center ">
          <Puff
            ariaLabel="three-dots-loading"
            color="#00BFFF"
            height={200}
            width={40}
          />
        </div>
      )}
    </>
  );
};

export default Images;

// export function Avatar(props: HTMLImageElement) {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   return <img {...(props as any)} />;
// }

import { useState } from "react";

export function LazyImage(props: Partial<HTMLImageElement>) {
  const { title, src, className = "", alt = "", width = "auto", height = "auto" } = props;

  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded ? null : (
        <div
          className="bg-gray-500"
          style={{
            width: loaded ? 0 : width,
            height: loaded ? 0 : height,
            display: loaded ? "hidden" : "block",
            // animationDelay: ((index * 50) % 800) + "ms",
          }}
        ></div>
      )}
      <img
        title={title}
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          width: loaded ? width : 0,
          height: loaded ? height : 0,
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s",
        }}
        onLoad={() => {
          setLoaded(true);
        }}
      />
    </>
  );
}

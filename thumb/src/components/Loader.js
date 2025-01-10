import React from "react";

export function Loader() {
  return (
    <div
      className="grid grid-cols-3 gap-1 w-[70px] h-[70px]"
      style={{ "--size": "70px", "--color": "#a5a5b0" }}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <span
          key={index}
          className="w-full h-full bg-[var(--color)] animate-blink"
          style={{ animationDelay: `${index * 100}ms` }}
        ></span>
      ))}
    </div>
  );
}

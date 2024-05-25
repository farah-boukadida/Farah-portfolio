import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.2;

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

export const Cursor = () => {
  const cursorRef = useRef();
  const [hoverElement, setHoverElement] = useState(false);

  const animate = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

    cursorRef.current.style.left = `${outlineX}px`;
    cursorRef.current.style.top = `${outlineY}px`;
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animate);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "button" ||
        e.target.parentElement?.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "input" ||
        e.target.tagName.toLowerCase() === "textarea"
      ) {
        setHoverElement(true);
      } else {
        setHoverElement(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed z-50 pointer-events-none transition-transform transform -translate-x-1/2 -translate-y-1/2 ${
          hoverElement
            ? "w-10 h-10 bg-indigo-500 shadow-lg shadow-indigo-500/50"
            : "w-4 h-4 bg-indigo-700"
        } rounded-full`}
        style={{
          left: 0,
          top: 0,
          willChange: "transform",
        }}
      ></div>
    </>
  );
};

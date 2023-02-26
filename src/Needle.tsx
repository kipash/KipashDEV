import React from "react";
import "@needle-tools/engine";

type NeedleProps = {
  path: string
}


export const Needle = ({ path }: NeedleProps) => 
{
  const parentRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const element = document.createElement('needle-engine');
    element.setAttribute("src", path);
    /* element.addEventListener("loadfinished", () => console.log("Loaded")); */

    if(parentRef.current)
        parentRef.current.appendChild(element);

    return () => {
      if(element.parentNode)
        element.parentNode.removeChild(element);
    }
  }, []);

  return (
    <div ref={parentRef}/>
  );
}
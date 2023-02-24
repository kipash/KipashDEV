import React from "react";
import "@needle-tools/engine";

type NeedleProps = {
  path: string
}

export const Needle = ({ path }: NeedleProps) => 
{
  const parentRef = React.useRef(null);

  let element = document.createElement('needle-engine');
  element.setAttribute("src", path);
  element.setAttribute("loadfinished", "");

  React.useEffect(() => {
    console.log("Needle: useEffect"); 
    if(parentRef.current)
    {
      const parentElem = (parentRef.current as HTMLElement);
      if(parentElem && element.parentNode == null)
        parentElem.appendChild(element);
    }
  });

  return (
    <div ref={parentRef}/>
  );
}
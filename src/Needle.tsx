import React from "react";

type NeedleProps = {
  path: string
}

export const Needle = ({ path }: NeedleProps) => 
{
  const parentRef = React.useRef(null);

  let element = document.createElement('needle-engine');
  element.setAttribute("src", path);

  React.useEffect(() => {
    console.log("Needle: useEffect"); 
    if(parentRef.current)
        (parentRef.current as HTMLElement).appendChild(element);
  });

  return (
    <div ref={parentRef}/>
  );
}
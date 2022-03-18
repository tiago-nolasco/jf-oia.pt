import React from "react";

interface IHtmlProps {
  value: string;
}

function RenderHtml(props: IHtmlProps) {
  return <span dangerouslySetInnerHTML={{ __html: props.value }}></span>;
}

export default RenderHtml;

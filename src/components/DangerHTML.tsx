import React from "react";
function createMarkup(html: string) {
  return { __html: html };
}

const DangerHTML = ({ html }: { html: string }) => {
  return <div dangerouslySetInnerHTML={createMarkup(html)} />;
};

export default DangerHTML;

import React, { useState } from "react";

export default function PPTVisualizer({ pptFile }) {
  const [page] = useState(15);

  return (
    <div>
      <div id={"second"} style={{ padding: "1px 0" }}>
        <iframe
          title={"PPT-Viewer"}
          src={pptFile}
          frameBorder={0}
          style={{ height: "80vh", width: "70vw" }}
        ></iframe>
      </div>
    </div>
  );
}

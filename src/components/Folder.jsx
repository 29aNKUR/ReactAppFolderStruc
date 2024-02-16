import React, { useState } from "react";

export const Folder = ({ explorer }) => {
  const [expanded, setExpanded] = useState(false);

  if (explorer.folderItems) {
    return (
      <div>
        <div
          onClick={() => setExpanded(!expanded)}
          style={{ cursor: "pointer" }}
        >
          {expanded ? '📂' : '📁'}
          {explorer?.name}
        </div>
        <div
          style={{ paddingLeft: "15px", display: expanded ? "block" : "none" }}
        >
          {explorer?.folderItems.map((item) => (
            <Folder explorer={item}>{item?.name}</Folder>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>📃 {explorer.name}</div>;
  }
};

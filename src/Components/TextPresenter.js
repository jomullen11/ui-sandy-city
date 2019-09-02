import React, { useState, useEffect } from "react";
import { API_URL } from "../Nav/config";

const TextPresenter = props => {
  const [isUpdating, setIsUpdating] = useState(false);
  const isAdmin = props.isAdmin;
  const sectionId = props.pageTextInfo.sectionId;
  const sectionHeader = props.pageTextInfo.sectionHeader;
  const sectionBody = props.pageTextInfo.sectionBody;
  //   console.log(pageTextInfo)

  useEffect(() => {});
  return (
    <>
      <h3 id={sectionId} className="section-header">
       {sectionHeader}
      </h3>
      <p className="section-body">
        {sectionBody}
      </p>
    </>
  );
};

export default TextPresenter;

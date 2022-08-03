import { Box } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import moment from "moment";
const CommentComponent = ({ comment }: { comment: any }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;

  const [show, setShow] = useState(true);

  useEffect(() => {
    if (textDisplay.length > 200) {
      setShow(false);
    }
  }, [textDisplay]);

  return (
    <Box sx={{ my: 3, display: "flex",maxWidth:"100vw" }}>
      <Box>
        <Image
          src={authorProfileImageUrl}
          alt={authorDisplayName}
          style={{ borderRadius: "50%" }}
          width={40}
          height={40}
        />
      </Box>
      <Box sx={{ ml: 2 }}>
        <Box sx={{ display: "flex" }}>
          <h4 style={{ marginRight: "10px" }}>{authorDisplayName}</h4>
          <p style={{ fontSize: "12px" }}>{moment(publishedAt).fromNow()}</p>
        </Box>
        <Box sx={{ mt: 1 }}>
          {show ? textDisplay : `${textDisplay.slice(0, 200)}  `}
          {!show && <span style={{cursor:"pointer"}} onClick={() => setShow(true)}>See more...</span>}
          {/* {!show && <span onClick={() => setShow(true)}>See more...</span>} */}
        </Box>
      </Box>
    </Box>
  );
};

export default CommentComponent;

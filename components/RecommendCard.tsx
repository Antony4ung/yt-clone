/* eslint-disable @next/next/no-img-element */
import { Box, Card } from "@mui/material";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  video: any;
};

const RecommendCard = ({ video }: Props) => {

  const router = useRouter()

  return (
    <Box onClick={()=>router.push(`/watch/${video.id.videoId}`)} sx={{ display: "flex",py:1,cursor:"pointer" }}>
      {video.snippet && (
        <Box sx={{mr:1}}>
          <img
            src={video.snippet.thumbnails.default.url}
            alt={video.snippet.channelTitle}
            // width={120}
            // height={90}
            style={{width:"120px",height:"90px"}}
          />
        </Box>
      )}

      {video.snippet && (
        <Box sx={{}}>
          <h4>{video.snippet.title}</h4>
          <Box sx={{ display: "flex" }}>
            <p style={{ marginRight: "10px" }}>{video.snippet.channelTitle}</p>
            <p>{moment(video?.snippet.publishedAt).fromNow()}</p>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default RecommendCard;

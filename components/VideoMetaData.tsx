/* eslint-disable @next/next/no-img-element */
import { Box, Container, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import numeral from "numeral";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { getChannelDetails } from "../redux/actions/channelAction";

export type MetaDataProps = {
  video: any;
};

const VideoMetaData = ({ video }: MetaDataProps) => {
  const { channelId, channelTitle, description, title, publishedAt } = video.snippet;
  const { viewCount, likeCount, dislikeCount } = video?.statistics;


  const [isLiked,setIsLiked] = useState(false)
  const [isSaved,setIsSaved] = useState(false)

  const toggleLike = () =>{
    // setIsLiked(!isLiked)

    if(isLiked){
      setIsLiked(false)
    }else{
      setIsLiked(true)
    }
  }

  const toggleSave = () =>{
    // setIsLiked(!isLiked)

    if(isSaved){
      setIsSaved(false)
    }else{
      setIsSaved(true)
    }
  }


  const dispatch = useAppDispatch();

  const channel = useAppSelector((state:any) => state?.channelDetails.channel);

  // const { snippet, statistics } = channel;

  const [show, setShow] = useState(true);

  useEffect(() => {
    if (description.length > 300) {
      setShow(false);
    }
  }, [description]);

  useEffect(() => {
    dispatch<any>(getChannelDetails(channelId));
    // dispatch<any>(checkSubscriptionStatus(channelId))
  }, [dispatch, channelId]);

  return (
    <Box sx={{my:3}}>
      <Grid container>
        <Grid item xs={12} md={9}>
          {channel && (
            <Box >
              <Box sx={{ p: 2,display:"flex" }}>
                <img
                  src={channel?.snippet?.thumbnails.high.url}
                  alt={channel?.snippet?.title}
                  style={{ borderRadius: "50%",width:"60px",height:"60px" }}
                  
                />
                <Box sx={{ml:2}}>
                <h4>{channel?.snippet?.title}</h4>
                <p>
                  {numeral(channel?.statistics?.subscriberCount).format("0.a")}{" "}
                  subscribers
                </p>
                </Box>
              </Box>
              <Box sx={{ ml: 2, mt: 1 }}>
              <p>{show ? description : `${description.slice(0, 300)}  `}</p>
              {!show && <span style={{cursor:"pointer"}} onClick={() => setShow(true)}>See more...</span>}
                {/* <p>{description}</p> */}
              </Box>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={3}>
          <Container
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "end",
              my: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
              <IconButton onClick={toggleLike}>
                 { isLiked ? <ThumbUpIcon/>  :<ThumbUpOutlinedIcon sx={{}} />}
              </IconButton>
              <h4>{numeral(video?.statistics?.likeCount).format("0.a")}</h4>
            </Box>
            <IconButton onClick={toggleSave} sx={{}}>
             {isSaved ? <BookmarkAddedIcon/> :  <BookmarkAddIcon />}
            </IconButton>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoMetaData;

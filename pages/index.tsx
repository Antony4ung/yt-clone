import { Box, CircularProgress, Container, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import CategoryBar from "../components/CategoryBar";
import VideoCard from "../components/VideoCard";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../redux/actions/videoActions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import InfiniteScroll from 'react-infinite-scroll-component'


const Home: NextPage = () => {
  const [activeChip, setActiveChip] = useState("All");

  const dispatch = useAppDispatch();

  const { videos, activeCategory, loading } = useAppSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeChip === 'All') dispatch<any>(getPopularVideos())
    else {
       dispatch<any>(getVideosByCategory(activeChip))
    }
 }

  useEffect(() => {
    if (activeChip === 'All') dispatch<any>(getPopularVideos())
      else {
         dispatch<any>(getVideosByCategory(activeChip))
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch,activeChip]);

  return (
    <Box sx={{ maxWidth: "100vw" }}>
      <Head>
        <title>YouTube Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Box sx={{}}>
        <CategoryBar activeChip={activeChip} setActiveChip={setActiveChip} />
      </Box>
      <Box sx={{ mt: 2,width:"100%" }}>
        <InfiniteScroll dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
               <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:videos.length > 0 ? "20vh" : "80vh",width:"100%"}}>
                <CircularProgress/>
               </Box>
            }>
          <Grid container spacing={2}>
            {videos.map((video:any,index:number) => (
              <Grid key={index} item xs={12} md={6} lg={3}>
                <VideoCard video={video} videoId={activeCategory === "All" ?video.id : video.id.videoId } />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
        
      </Box>
    </Box>
  );
};

export default Home;

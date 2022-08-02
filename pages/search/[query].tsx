import { Box, CircularProgress, Container } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getVideosBySearch } from "../../redux/actions/videoActions";
import VideoSearchCard from "../../components/videoSearchCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import InfiniteScroll from "react-infinite-scroll-component";

const Search = () => {
  const router = useRouter();

  const { query } = router.query;

  const dispatch = useAppDispatch();

  const { videos, loading } : { videos:[] , loading:boolean } = useAppSelector((state) => state.searchedVideos);

  const fetchData = () => {
    dispatch<any>(getVideosBySearch(query));
  };

  useEffect(() => {
    dispatch<any>(getVideosBySearch(query));
  }, [query, dispatch]);

  return (
    <InfiniteScroll
      dataLength={videos?.length}
      next={fetchData}
      hasMore={true}
      loader={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: videos?.length > 0 ? "20vh" : "80vh",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <Container>
        { videos && videos?.map((video: any, index: number) => (
          <Box sx={{ my: 1 }} key={index}>
            <VideoSearchCard video={video} videoId={video.id.videoId} />
          </Box>
        ))}
      </Container>
    </InfiniteScroll>
  );
};

export default Search;

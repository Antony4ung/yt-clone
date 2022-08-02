import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getVideoById } from "../../redux/actions/videoActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import VideoMetaData from "../../components/VideoMetaData";
import Comments from "../../components/Comments";
import RelatedVideos from "../../components/RelatedVideos";
import { Triangle } from "react-loader-spinner";

const Watch = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useAppDispatch();

  const { video, loading } = useAppSelector((state) => state.selectedVideo);

  useEffect(() => {
    dispatch<any>(getVideoById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            height: "88vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Triangle
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          // wrapperStyle={{}}
          // wrapperClassName=""
          visible={true}
/>
        </Box>
      ) : (
        <Grid container>
          <Grid item xs={12} md={9} lg={9}>
            <Box sx={{ width: "100%", height: { xs: "50vh", md: "70vh" } }}>
              {/* <Helmet>
            <title>{video?.snippet?.title}</title>
          </Helmet> */}
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                title={video?.snippet?.title}
                allowFullScreen
                width="100%"
                height="100%"
              ></iframe>
            </Box>
            {!loading  && video && (
              <Box sx={{ width: "100%" }}>
                <VideoMetaData video={video} />
              </Box>
            )}
            { id && <Box
              sx={{ width: "100%" }}
            >
              <Comments channelId={id}/>
            </Box>}
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            {id && 
              <RelatedVideos id={id}/>
            }
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Watch;

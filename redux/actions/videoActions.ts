import { Action, Dispatch } from "redux";
import request from "../../config/request";
import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  RELATED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  SEARCHED_VIDEO_FAIL,
  SEARCHED_VIDEO_REQUEST,
  SEARCHED_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
} from "../actionTypes";

export const getPopularVideos =
  () =>
  async (
    dispatch: Dispatch<Action>,
    getState: () => {
      (): any;
      new (): any;
      homeVideos: { (): any; new (): any; nextPageToken: any };
    }
  ) => {
    try {
      dispatch({
        type: HOME_VIDEOS_REQUEST,
      });

      const { data } = await request("/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "US",
          maxResults: 20,
          pageToken: getState().homeVideos.nextPageToken,
        },
      });

      dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
          videos: data.items,
          nextPageToken: data.nextPageToken,
          category: "All",
        },
      });
    } catch (error:any) {
      dispatch({
        type: HOME_VIDEOS_FAIL,
        payload: error?.message,
      });
    }
  };

export const getVideosByCategory =
  (keyword: string) =>
  async (
    dispatch: Dispatch<Action>,
    getState: () => {
      (): any;
      new (): any;
      homeVideos: { (): any; new (): any; nextPageToken: any };
    }
  ) => {
    try {
      dispatch({
        type: HOME_VIDEOS_REQUEST,
      });
      const { data } = await request("/search", {
        params: {
          part: "snippet",

          maxResults: 20,
          pageToken: getState().homeVideos.nextPageToken,
          q: keyword,
          type: "video",
        },
      });

      dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
          videos: data.items,
          nextPageToken: data.nextPageToken,
          category: keyword,
        },
      });
    } catch (error:any) {
      dispatch({
        type: HOME_VIDEOS_FAIL,
        payload: error.message,
      });
    }
  };

export const getVideoById =
  (id: string | string[] | undefined) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: SELECTED_VIDEO_REQUEST,
      });

      const { data } = await request("/videos", {
        params: {
          part: "snippet,statistics",
          id: id,
        },
      });

      dispatch({
        type: SELECTED_VIDEO_SUCCESS,
        payload: data.items[0],
      });
    } catch (error:any) {
      dispatch({
        type: SELECTED_VIDEO_FAIL,
        payload: error.message,
      });
    }
  };

  export const getRelatedVideos = (id:string | string[] | undefined) => async (dispatch: Dispatch<Action>) => {
    try {
       dispatch({
          type: RELATED_VIDEO_REQUEST,
       })
 
       const { data } = await request('/search', {
          params: {
             part: 'snippet',
             relatedToVideoId: id,
             maxResults: 30,
             type: 'video',
          },
       })
       dispatch({
          type: RELATED_VIDEO_SUCCESS,
          payload: data.items,
       })
    } catch (error:any) {
       
       dispatch({
          type: RELATED_VIDEO_FAIL,
          payload: error.response.data.message,
       })
    }
 }
 
 export const getVideosBySearch = (keyword:string | string[] | undefined) => async (dispatch: Dispatch<Action>,getState : () => {
  (): any;
  new (): any;
  searchedVideos: { (): any; new (): any; nextPageToken: any };
}) => {
    try {
       dispatch({
          type: SEARCHED_VIDEO_REQUEST,
       })
       const { data } = await request('/search', {
          params: {
             part: 'snippet',
             pageToken: getState().searchedVideos.nextPageToken,
             maxResults: 20,
             q: keyword,
             type: 'video,channel',
          },
       })
 
       dispatch({
          type: SEARCHED_VIDEO_SUCCESS,
          payload: {videos : data.items , nextPageToken: data.nextPageToken,loading:false},
       })
    } catch (error:any) {
       dispatch({
          type: SEARCHED_VIDEO_FAIL,
          payload: error.message,
       })
    }
 }
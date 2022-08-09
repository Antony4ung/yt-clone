import {
    CHANNEL_DETAILS_SUCCESS,
    CHANNEL_VIDEOS_FAIL,
    CHANNEL_VIDEOS_REQUEST,
    CHANNEL_VIDEOS_SUCCESS,
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
} from '../actionTypes'

type ActionType = {
    type:string,
    payload:any
}

export const homeVideosReducer = (
    state = {
        videos: [],
        loading: false,
        nextPageToken: null,
        activeCategory: 'All',
    },
    action: ActionType
) => {
    const { type, payload } = action

    switch (type) {
        case HOME_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,
                videos:
                   state.activeCategory === payload.category
                      ? [...state.videos, ...payload.videos]
                      : payload.videos,
    
                loading: false,
                nextPageToken: payload.nextPageToken,
                activeCategory: payload.category,
            }
        case HOME_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const selectedVideoReducer = (
    state = {
       loading: true,
       video: null,
    },
    action:ActionType
 ) => {
    const { payload, type } = action


 
    switch (type) {
       case SELECTED_VIDEO_REQUEST:
          return {
             ...state,
             loading: true,
          }
       case SELECTED_VIDEO_SUCCESS:
          return {
             ...state,
             video: payload,
             loading: false,
          }
       case SELECTED_VIDEO_FAIL:
          return {
             ...state,
             video: null,
             loading: false,
             error: payload,
          }
 
       default:
          return state
    }
 }

 export const relatedVideoReducer = (
    state = {
       loading: true,
       videos: [],
    },
    action:ActionType
 ) => {
    const { payload, type } = action
 
    switch (type) {
       case RELATED_VIDEO_REQUEST:
          return {
             ...state,
             loading: true,
          }
       case RELATED_VIDEO_SUCCESS:
          return {
             ...state,
             videos: payload,
             loading: false,
          }
       case RELATED_VIDEO_FAIL:
          return {
             ...state,
             loading: false,
             error: payload,
          }
 
       default:
          return state
    }
 }
 
 export const searchedVideosReducer = (
    state = {
       loading: true,
       videos: [],
       nextPageToken: null,
    },
    action:ActionType
 ) => {
    const { payload, type } = action
 
    switch (type) {
       case SEARCHED_VIDEO_REQUEST:
          return {
             ...state,
             loading: true,
          }
       case SEARCHED_VIDEO_SUCCESS:
          return {
             ...state,
             nextPageToken: payload.nextPageToken,
             videos: [...payload.videos],
             loading: false,
          }
       case SEARCHED_VIDEO_FAIL:
          return {
             ...state,
             loading: false,
             error: payload,
          }
 
       default:
          return state
    }
 }
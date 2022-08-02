import { Action, Dispatch } from "redux";
import request from "../../config/request";
import { COMMENT_LIST_REQUEST,COMMENT_LIST_SUCCESS,COMMENT_LIST_FAIL, CREATE_COMMENT_SUCCESS,CREATE_COMMENT_FAIL } from "../actionTypes";

export const getCommentsOfVideoById = (id:string | string[] | undefined) => async (dispatch:Dispatch<Action>) => {
    try {
       dispatch({
          type: COMMENT_LIST_REQUEST,
       })
 
       const { data } = await request('/commentThreads', {
          params: {
             part: 'snippet',
             videoId: id,
             maxResults: 30
          },
       })
       dispatch({
          type: COMMENT_LIST_SUCCESS,
          payload: data.items,
       })
    } catch (error:any) {
       
       dispatch({
          type: COMMENT_LIST_FAIL,
          payload: error.response.data.message,
       })
    }
 }


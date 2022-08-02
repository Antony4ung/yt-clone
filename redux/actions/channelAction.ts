import { Action, Dispatch } from "redux";
import request from "../../config/request";
import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS } from "../actionTypes"

export const getChannelDetails = (id:string) => async (dispatch: Dispatch<Action>) => {
    try {
       dispatch({
          type: CHANNEL_DETAILS_REQUEST,
       })
 
       const { data } = await request('/channels', {
          params: {
             part: 'snippet,statistics,contentDetails',
             id,
          },
       })
       dispatch({
          type: CHANNEL_DETAILS_SUCCESS,
          payload: data.items[0],
       })
    } catch (error) {
       dispatch({
          type: CHANNEL_DETAILS_FAIL,
          payload: "Error occured"
       })
    }
 }
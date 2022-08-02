import { COMMENT_LIST_REQUEST,COMMENT_LIST_SUCCESS,COMMENT_LIST_FAIL } from "../actionTypes"

type ActionType = {
    type:string,
    payload:any
}


export const commentListReducer = (
    state = {
       loading: true,
       comments: null,
    },
    action:ActionType
 ) => {
    const { payload, type } = action
 
    switch (type) {
       case COMMENT_LIST_REQUEST:
          return {
             ...state,
             loading: true,
          }
       case COMMENT_LIST_SUCCESS:
          return {
             ...state,
             comments: payload,
             loading: false,
          }
       case COMMENT_LIST_FAIL:
          return {
             ...state,
             loading: false,
             error: payload,
          }
 
       default:
          return state
    }
 }
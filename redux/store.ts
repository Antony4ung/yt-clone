import { createStore, applyMiddleware, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { channelDetailsReducer } from './reducer/channelReducer'
import { commentListReducer } from './reducer/commentsReducer'

import {
    homeVideosReducer, relatedVideoReducer, searchedVideosReducer, selectedVideoReducer,
} from './reducer/videosReducer'


const rootReducer = combineReducers({
   homeVideos: homeVideosReducer,
   selectedVideo: selectedVideoReducer,
   channelDetails: channelDetailsReducer,
   commentList: commentListReducer,
   relatedVideos: relatedVideoReducer,
   searchedVideos: searchedVideosReducer,
//    subscriptionsChannel: subscriptionsChannelReducer,

//    channelVideos: channelVideosReducer,
})

const store = createStore(
   rootReducer,
   {},
   composeWithDevTools(applyMiddleware(thunk))
)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
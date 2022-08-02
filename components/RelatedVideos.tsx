import { Container } from '@mui/material'
import React,{useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import {getRelatedVideos} from '../redux/actions/videoActions'
import RecommendCard from './RecommendCard'

const RelatedVideos = ({id}:{id:string}) => {


    const dispatch = useAppDispatch()

    const relatedVideos = useAppSelector((state) => state.relatedVideos.videos);

    useEffect(()=>{
        dispatch<any>(getRelatedVideos(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

  return (
    <Container>
        <h3 style={{padding:"10px 0"}}>Related Videos</h3>
        {relatedVideos && relatedVideos.map((video:any,index:number)=>(
            <RecommendCard key={index} video={video} />
        ))}
    </Container>
  )
}

export default RelatedVideos
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box,Avatar } from '@mui/material';
import moment from 'moment'
import numeral from 'numeral'
import request from '../config/request';
import { useRouter } from 'next/router';

export default function VideoCard({video,videoId}:{video:any,videoId:string}) {

  const channelID = video.snippet.channelId
  const [channelIcon,setChannelIcon] = React.useState("")

  

  const router = useRouter()

  React.useEffect(()=>{
    const get_channel_icon = async () => {
      const {
         data: { items },
      } = await request('/channels', {
         params: {
            part: 'snippet',
            id: channelID,
         },
      })
      setChannelIcon(items[0].snippet.thumbnails.default.url)
   }
   get_channel_icon()

  },[channelID])

  return (
    <Card onClick={()=>router.push(`/watch/${videoId}`)} className="card" sx={{ maxWidth: "100%",borderRadius:"3px" }}>
      <CardMedia
        component="img"
        height="200"
        image={video?.snippet?.thumbnails.high.url}
        alt="green iguana"
      />
      <CardContent>
        <Box sx={{display:"flex",alignItems:"center",p:1}}>
            <Avatar sx={{mr:1}} alt="Remy Sharp" src={channelIcon} />
            <Typography variant="body1" component="div">
            
                {video?.snippet.channelTitle}
            
            </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {video?.snippet.title}
        </Typography>
        <Box sx={{display:"flex",alignItems:"center",mt:1}}>
        {video?.statistics?.viewCount && <Typography sx={{mr:1}} variant="body2" color="text.secondary">
        
        {numeral(video?.statistics?.viewCount).format('0.a')} Views •
        </Typography>}
        
        <Typography sx={{}} variant="body2" color="text.secondary">
         
          {moment(video?.snippet.publishedAt).fromNow()}
        </Typography>
        </Box>
      </CardContent>
      
    </Card>
  );
}
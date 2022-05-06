import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ChurchIcon from '@mui/icons-material/Church';
import CalculateIcon from '@mui/icons-material/Calculate';



export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0',fontFamily: 'Koulen' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2011-2015
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{bgcolor:'#000000', color:'#ffeb3b'}}>
            <MenuBookIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, fontFamily: 'Koulen' }}>
          <Typography variant="h6" component="span"sx={{fontFamily: 'Koulen'}}>
            DePauw University
          </Typography>
          <Typography sx={{fontFamily: 'Koulen'}}>Double Major: Computer Science and Philosophy</Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0',fontFamily: 'Koulen' }}
          variant="body2"
          color="text.secondary"
        >
          2015-2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{bgcolor:'#a1bdf1', color:'#e87e15'}}>
            <LaptopMacIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span"sx={{px:2 ,fontFamily: 'Koulen'}}>
            Full Stack Web Developer/Analyst
          </Typography>
          <Typography sx={{fontFamily: 'Koulen', px:2}}>Technology Services Group</Typography>
        </TimelineContent>
      </TimelineItem>

      
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0',fontFamily: 'Koulen' }}
          variant="body2"
          color="text.secondary"
        >
          2017-2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{bgcolor:'#0F4D92', color:'#a5a4a4'}}>
            <MenuBookIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span"sx={{fontFamily: 'Koulen'}}>
            Yale Divinity School
          </Typography>
          <Typography>Master of Divinity</Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0',fontFamily: 'Koulen' }}
          variant="body2"
          color="text.secondary"
        >
          2020-2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{bgcolor:'#84d8fa'}}>  
            <ChurchIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{fontFamily: 'Koulen'}}>
            Associate Minister
          </Typography>
          <Typography sx={{fontFamily: 'Koulen'}}>First Church in Windsor: Windsor, CT</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0',fontFamily: 'Koulen' }}
          variant="body2"
          color="text.secondary"
        >
          2021-2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{bgcolor:'#012169', color:'#ffc726'}}>
            <CalculateIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{fontFamily: 'Koulen'}}>
            Algebra 1 Teacher
          </Typography>
          <Typography sx={{fontFamily: 'Koulen'}}>Holy Trinity High School, Chicago IL</Typography>
        </TimelineContent>
      </TimelineItem>





    </Timeline>
  );
}

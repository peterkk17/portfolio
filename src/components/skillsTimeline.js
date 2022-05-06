import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import ReactLogo from '../data/logos/react-logo.jpg';
import JavaLogo from '../data/logos/java-logo.jpg'
import JSHMTLCSSLogo from '../data/logos/js-html-css-logo.jpg'
import MySQLLogo from '../data/logos/mysql-logo.jpg'
import MaterialUILogo from '../data/logos/materialui-logo.jpg'
import RestLogo from '../data/logos/rest-logo.jpg'
import JSPLogo from '../data/logos/jsp-logo.jpg'
import GitLogo from '../data/logos/git-logo.jpg'

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent sx={{px:10}}>
          <Typography variant="h4" component="span" sx={{m: 'auto 0',textDecoration:"underline", fontFamily: 'Koulen'}}>
          Front End / Web Dev
          </Typography>
        
          
        </TimelineOppositeContent>
        <TimelineSeparator>
        </TimelineSeparator>
        <TimelineContent sx={{ px: 10 }}>
          <Typography variant="h4" component="span" sx={{m: 'auto 0',textDecoration:"underline", fontFamily: 'Koulen'}}>
            Back End / Other
          </Typography>
        </TimelineContent>
      </TimelineItem>



      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 12 }}>
          <Typography
          variant="h6" component="span"sx={{fontFamily: 'Koulen',height:'100%', alignItems:'center', justifyContent:'center'}}>Java</Typography>
          <Typography component="img" src={JavaLogo} sx={{px:1,height:'2em', alignContent:'center', justifyContent:'center'}}></Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 12 }}>
        <Typography component="img" src={JSHMTLCSSLogo} sx={{px:1,height:'2em', alignContent:'center', justifyContent:'center'}}></Typography>
          <Typography variant="h5" component="span"sx={{fontFamily: 'Koulen',height:'100%', alignItems:'center', justifyContent:'center'}}>
             HTML, CSS, Javascript
          </Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px',px: 12 }}>
        <Typography component="img" src={ReactLogo} sx={{px:1,height:'2em', alignContent:'center', justifyContent:'center'}}></Typography>
          <Typography variant="h5" component="span"sx={{fontFamily: 'Koulen',height:'100%', alignItems:'center', justifyContent:'center'}}>
            React JS
          </Typography>
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{py: '12px',  px: 12 }}>
        
          <Typography component="img" src={MySQLLogo} sx={{px:1,height:'4em', alignContent:'center', justifyContent:'center'}}></Typography>
        </TimelineContent>
      </TimelineItem>





      <TimelineItem>
        <TimelineOppositeContent sx={{py: '12px', px: 12 }}>
        <Typography variant="h5" component="span"sx={{fontFamily: 'Koulen',height:'100%', alignItems:'center', justifyContent:'center'}}>
            Java Server Pages
          </Typography>
        <Typography component="img" src={JSPLogo} sx={{px:1,height:'2em', alignContent:'center', justifyContent:'center'}}></Typography>
         
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px',px: 12 }}>
        <Typography component="img" src={MaterialUILogo} sx={{px:1,height:'2em', alignContent:'center', justifyContent:'center'}}></Typography>
        <Typography variant="h5" component="span"sx={{fontFamily: 'Koulen',height:'100%', alignItems:'center', justifyContent:'center'}}>
            Material UI
          </Typography>
        </TimelineContent>
      </TimelineItem>




      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 12}}>
        <Typography component="img" src={RestLogo} sx={{px:1,height:'2em', alignContent:'center', justifyContent:'center'}}></Typography>
          <Typography variant="h5" component="span"sx={{fontFamily: 'Koulen',height:'100%', alignItems:'center', justifyContent:'center'}}>
            REST APIs
          </Typography>
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 12 }}>
        <Typography variant="h5" component="span"sx={{fontFamily: 'Koulen',height:'100%', alignItems:'center', justifyContent:'center'}}>
            Git
          </Typography>
          <Typography component="img" src={GitLogo} sx={{px:1,height:'4em', alignContent:'center', justifyContent:'center'}}></Typography>
        </TimelineContent>
      </TimelineItem>

      
      


      


     

      





    </Timeline>
  );
}

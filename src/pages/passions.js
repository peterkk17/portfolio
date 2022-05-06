import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import Image from '../data/background/cream-background.jpg';


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};


class Passions extends React.Component {

constructor(props) {
    super(props);
}


render() {


    return(

        <Paper className="section" style={styles.paperContainer}>
               <Grid className="section-portion-2" container direction="column" justifyContent="center" alignItems="center" sx={{fontFamily: 'Playfair Display',flexGrow: 1, height:'100%', width:'100%', maxWidth:'100%', maxHeight:'100%'}} >
                    <Item sx={{justifyContent:"center"}}><Typography variant='h4'>My Passions</Typography></Item>
                        
                    
                        
                </Grid>
                
            </Paper>



    );

}



};

export default Passions;
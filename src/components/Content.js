
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Pig from './img/luky.jpg';



const theme = createMuiTheme({
    palette: {
      primary: { main: '#ffcf33' }, // Purple and green play nicely together.
      secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
  });

const messages = [
    {
      id: 1,
      primary: 'Brunch this week?',
      secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      person: Pig,
    },
    {
      id: 2,
      primary: 'Birthday Gift',
      secondary: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
        person: Pig,
    },
    {
      id: 3,
      primary: 'Recipe to try',
      secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
      person: Pig,
    },
    {
      id: 4,
      primary: 'Yes!',
      secondary: 'I have the tickets to the ReactConf for this year.',
      person: Pig,
    },
    {
      id: 5,
      primary: "Doctor's Appointment",
      secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
      person: Pig,
    },
    {
      id: 6,
      primary: 'Discussion',
      secondary: `Menus that are generated by the bottom app bar (such as a bottom
        navigation drawer or overflow menu) open as bottom sheets at a higher elevation
        than the bar.`,
        person: Pig,
    },
    {
      id: 7,
      primary: 'Summer BBQ',
      secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: Pig,
    },
  ];

  const styles = theme => ({
    text: {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
    },
    root: {
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      zIndex:11,
      marginTop:50,
      marginBottom:50,
    },
    ind:{
      top:90,
      bottom:'auto',
    },
  
    paper: {
      paddingBottom: 50,
    },
  
    icon:{
      fontSize: 36,
      margin: 'auto',
    },
  
    toolbar: {
      alignItems: 'center',
      width:'100%',
      justifyContent: 'space-between',
    },
  
    list: {
      marginBottom: theme.spacing.unit * 2,
    },
    subHeader: {
      backgroundColor: theme.palette.background.paper,
    },
  
  
  });


class Content extends React.Component{

    render(){
        const { classes } = this.props
        return(
            <div className={classes.root} position="sticky">
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
            <Paper square className={classes.paper}>
            <Typography className={classes.text} variant="h5" gutterBottom>
              What's Hot
            </Typography>
            <List className={classes.list}>
              {messages.map(({ id, primary, secondary, person }) => (
                <Fragment key={id}>
                  {id === 1 && <ListSubheader className={classes.subHeader}>Today</ListSubheader>}
                  {id === 3 && <ListSubheader className={classes.subHeader}>Yesterday</ListSubheader>}
                  <ListItem button>
                    <Avatar alt="Profile Picture" src={person} />
                    <ListItemText primary={primary} secondary={secondary} />
                  </ListItem>
                </Fragment>
              ))}
            </List>
          </Paper>
          </MuiThemeProvider>
          </React.Fragment>
          </div>
        );
    }
}


Content.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Content);
     
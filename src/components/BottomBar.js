import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Home from '@material-ui/icons/Home'
import Person from '@material-ui/icons/Person'
import Whatshot from '@material-ui/icons/Whatshot'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Content from './Content';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 4 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffcf33' }, // Purple and green play nicely together.
    secondary: { main: '#212121' }, // This is just green.A700 as hex.
  },
});


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
  },
  ind:{
    top:0,
    bottom:'auto',
  },

  paper: {
    paddingBottom: 50,
  },
  appBar: {
    top: 'auto',
    alignItems: 'center',
    bottom: 0,
    
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
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



class BottomAppBar extends React.Component {
    
    state = {
        value: 0,
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };
      handleChangeIndex = index => {
        this.setState({ value: index });
      };
    
    render(){

  const { classes } = this.props
  const { value } = this.state;


  return (

    

    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        
      
      <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <div dir={theme.direction}>Item One</div>
          <div dir={theme.direction} fullWidth><Content/></div>
          <div dir={theme.direction}>Item Three</div>
          <div dir={theme.direction}>Item Four</div>
        </SwipeableViews>
        
          <AppBar className={classes.appBar} backgroundColor="primary" >
          
          <Tabs
            fullWidth={true}
            className={classes.toolbar}
            value={value}
            onChange={this.handleChange}
            classes={{ indicator: classes.ind }}
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab icon={<Home className={classes.icon} />} />

            <Tab icon={<Whatshot className={classes.icon}/>} />

            <Tab icon={<SearchIcon className={classes.icon} />} />
            
            <Tab icon={<Person className={classes.icon} />} />
          </Tabs>
          
          </AppBar>
          </MuiThemeProvider>
    </React.Fragment>
            );
          }
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);


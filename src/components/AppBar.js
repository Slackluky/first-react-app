import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Person from '@material-ui/icons/Person'
import Whatshot from '@material-ui/icons/Whatshot'
import BottomAppBar from './BottomBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Help from '@material-ui/icons/Help';



const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffcf33' }, 
    secondary: { main: '#212121' },
  },
});


const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },

  title: {
    float       : 'none', 
    marginLeft  : 'auto',
    marginRight : 'auto',
    width       : 200,
  },

  sectionDesktop:{
    display:'none',
    [theme.breakpoints.up('sm')]: {
      display:'block',
    }
  },

  search: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
    display: 'block',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing.unit,
    width: 'auto',
  },
  },

  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});


class App extends React.Component{

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="sticky" backgroundColor="primary">
        <Toolbar  >
          <Typography variant="h5" color="secondary" align="left" className={classes.title}>
              OFERVLOW
            </Typography>
            
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            
            <div className={classes.grow} />
            <div className={classes.sectionMobile}>
                <IconButton >
                  <Help />
                </IconButton>
              </div>
              <div className={classes.sectionDesktop}>
  
                <IconButton>
                  
                    <Whatshot/>
                  
                </IconButton>
                <IconButton
                  
                >
                  <Person />
                </IconButton>
              </div>
             
          </Toolbar>
        </AppBar>
        <BottomAppBar/>
        </MuiThemeProvider>
      </div>
     );
  }

}



  
 


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
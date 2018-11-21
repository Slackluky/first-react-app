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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Help from '@material-ui/icons/Help';
import { Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from '@material-ui/icons/Home'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';




const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffcf33' }, 
    secondary: { main: '#212121' },
  },
});


const styles = theme => ({
  root: {
    width: '100%',
    zIndex:1100,
    flexGrow:1,
  },

  show: {
    transform: 'translateY(0)',
    transition: 'transform .5s',
  },
  hide: {
    transform: 'translateY(-110%)',
    transition: 'transform .5s',
  },

  grow: {
    flexGrow: 1,
  },

  title: {
    display:'none',
    [theme.breakpoints.up('sm')]: {
      float       : 'none', 
      marginLeft  : 'auto',
      marginRight : 'auto',
      width       : 200,
      display: 'block',
    }
  },

  sectionDesktop:{
    display:'none',
    [theme.breakpoints.up('sm')]: {
      display:'block',
    }
  },
  sectionMobile:{
    fontSize:25,
  },
  search: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
    display: 'block',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.45),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.75),
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
        width: 400,
      },
    },
  },

  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
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
    fontSize: 24,
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


class NavBar extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      shouldShow: null,
    };

    this.lastScroll = null;

    this.handleScroll = this.handleScroll.bind(this);
    // Alternatively, you can throttle scroll events to avoid
    // updating the state too often. Here using lodash.
    // this.handleScroll = _.throttle(this.handleScroll.bind(this), 100);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(evt) {
    const lastScroll = window.scrollY;

    if (lastScroll === this.lastScroll) {
      return;
    }

    const shouldShow = (this.lastScroll !== null) ?  (lastScroll < this.lastScroll) : null;

    if (shouldShow !== this.state.shouldShow) {
      this.setState((prevState, props) => ({
        ...prevState,
        shouldShow,
      }));
    }

    this.lastScroll = lastScroll;
  }

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
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="fixed" backgroundColor="primary" 
              className={
                `${classes.root} ${
                  this.state.shouldShow === null ? '' : (
                    this.state.shouldShow ? classes.show : classes.hide
                  )
                }`
              }
        >
        <Toolbar  >
          <Typography variant="h5" color="secondary" align="left" className={classes.title}>
          
          <Link to="/game" style={{ textDecoration: 'none' }}>
          OFERVLOW
          </Link>
          
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
            <div >
                <IconButton target="_blank" href="https://github.com/Slackluky/first-react-app/tree/master/src">
                  <Help className={classes.sectionMobile} />
                </IconButton>
              </div>
              <div className={classes.sectionDesktop}>
              
                <IconButton component={Link} to='/content'>
                  
                  <Whatshot/>
                
              </IconButton>
                
                
                <Link to='/game'>
                <IconButton component={Link} to='/about'>
                  <Person />
                </IconButton>
                </Link>

              </div>
             
          </Toolbar>
        </AppBar>


   <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        
        <div className={classes.grow}>
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
          
            <Tab icon={ <Home className={classes.icon}  /> }  component={Link} to="/game"/>

            <Tab icon={<Whatshot className={classes.icon}/>} component={Link} to="/content" />

            <Tab icon={<SearchIcon className={classes.icon} />} disabled/>
            
            <Tab icon={<Person className={classes.icon} />}  component={Link} to='/about'/>
            
          </Tabs>
          
          </AppBar>
          </div>
          </MuiThemeProvider>
    </React.Fragment>

       

        </MuiThemeProvider>
      </div>
     );
  }

}



  
 


NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
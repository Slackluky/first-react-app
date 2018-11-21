
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Code from '@material-ui/icons/Code';
import Pig from './img/luky.jpg';
// import { FormControlLabel } from '@material-ui/core';


const styles = theme => ({

  title: {
    display: 'block',
    textAlign: 'right',
    marginLeft: 30,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      margin:'auto',
      textAlign: 'left',
      marginLeft:10,
    },
  },

  sectionDesktop:{
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  card: {
    maxWidth: 345,
    padding: 10,
    [theme.breakpoints.up('sm')]: {
      display:'block',
      minWidth: 600,
      padding: 10,
      },
    [theme.breakpoints.up('md')]: {
      display:'block',
      minWidth: 1000,
      padding: 10,
      borderRadiusBottomRight: 100,
      },

  }, 

  emcode: { 
    padding:10,
    maxWidth: 400, 
    backgroundColor: 'grey',
  },

  content:{
    backgroundColor: 'grey',
    paddingTop :25,
    paddingBottom :40,
    marginTop:50,
    marginBottom:50,
    
  },

  row: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom:'20px',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 180,
    height: 180,
    margin: 'auto',
  },
});



class About extends React.Component{
    
 render(){
    const { classes } = this.props;
    return (
      <div className={classes.content}>
    <div className={classes.row}>
    <Card className={classes.card}>
      <Avatar
        alt="Luky Setiawan"
        src={Pig}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
      <CardContent align="center">
          <Typography gutterBottom variant="h4" component="h2" align="center">
            Luky Setiawan
          </Typography>
          <Typography component="p">
            Seorang remaja yang tidak jelas asalnya, dia hanya ingin tidur dan membuat webpage dengan React JS.
          </Typography>
        </CardContent>
      </Card>

      <Divider />

    </div>

    <div className={classes.row}>
    <Card className={classes.card}>
      <CardContent >
          <Typography gutterBottom variant="h4" component="h2" align="center" >
          <Code fontSize="large" viewBox="0 0 24 14"/>
          Tutorial
          </Typography>
          <Typography component="p" >
            Pada halaman ini saya akan menjelaskan sedikit tentang membuat halaman web menggunakan React JS dan teman-temannya, disimak yaah.
          </Typography>
        </CardContent>
        <Divider />
        <CardContent style={{marginTop:20}}>
          <Typography gutterBottom variant="h5" component="h2" align="left">
           Persiapan
          </Typography>
          <Typography component="p">
            Sebelum bagian coding, ada beberapa yang harus kalian butuhkan nih.
            Yang kalian butuhkan yaitu;
            <br />
            1. npm dan nodejs
            <br /> 
            <br /> 
          </Typography>
          <Card className={classes.emcode}>
          <Typography component="p">
          <code>apt-get install npm && nodejs</code>
          </Typography>
            </Card>  
        </CardContent>
      </Card>
    </div>


    </div>
    );
 }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(About);
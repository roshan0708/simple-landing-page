import React from 'react';
import {AppBar,CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItemIcon, ListItem, ListItemText, Typography, Toolbar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LabelIcon from '@material-ui/icons/Label';
import DescriptionIcon from '@material-ui/icons/Description';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import "./navbar.styles.css";
import SettingsIcon from '@material-ui/icons/Settings';
import Logo from "../../assests/img/main-logo.svg";
import DellLogo from "../../assests/img/dell.svg";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: "70px",
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "white !important",
    boxShadow: "none !important",
    [theme.breakpoints.up('sm')]: {
      width:"100%",
      marginLeft: "20px"
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  toolBar: {
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
  },
  logoImg:{
      height:"35px",
      padding:"5px 20px"
  },
  dellImg:{
      height: "40px",
      padding: "10px 0",
  },
  iconDiv:{
      display:"flex",
      justifyContent:"center"
  },
  drawerPaper: {
    width: "fit-content",
  },
  itemDiv:{
      padding: "0",
      height: "70px",
      width: "80px",
  },
  itemDivLast:{
      padding: "0",
      height: "80px",
      width: "80px",
      marginTop: "40px",
  },
  navIcon:{
      color:"black"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
      backgroundColor:"#EBF7FF"
  },
}));

const Navbar = props => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div id="drawer">
      <div className={classes.toolbar+" "+classes.toolBar}>
        <img className={classes.logoImg} src={Logo} alt="logo" />
      </div>
      <Divider />
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={DellLogo} className={classes.dellImg} alt="dell" />
      </div>
      <Divider />
      <List id="nav-list">
        <ListItem button className={classes.itemDiv+" nav-item"}>
            <ListItemIcon className={classes.iconDiv}><AppsIcon className={classes.navIcon+" nav-icon"}/></ListItemIcon>
        </ListItem>
        <ListItem button className={classes.itemDiv+" nav-item"}>
            <ListItemIcon className={classes.iconDiv}><LabelIcon className={classes.navIcon+" nav-icon"}/></ListItemIcon>
        </ListItem>
        <ListItem button className={classes.itemDiv+" nav-item"}>
            <ListItemIcon className={classes.iconDiv}><DescriptionIcon className={classes.navIcon+" nav-icon"}/></ListItemIcon>
        </ListItem>
        <ListItem button className={classes.itemDiv+" nav-item"}>
            <ListItemIcon className={classes.iconDiv}><MonetizationOnIcon className={classes.navIcon+" nav-icon"}/></ListItemIcon>
        </ListItem>
        <ListItem button className={classes.itemDiv+" nav-item"}>
            <ListItemIcon className={classes.iconDiv}><ShoppingCartIcon className={classes.navIcon+" nav-icon"}/></ListItemIcon>
        </ListItem>
        <ListItem button className={classes.itemDiv+" nav-item"}>
            <ListItemIcon className={classes.iconDiv}><DynamicFeedIcon className={classes.navIcon+" nav-icon"}/></ListItemIcon>
        </ListItem>
        <ListItem button className={classes.itemDiv+" nav-item"}>
            <ListItemIcon className={classes.iconDiv}><TrendingUpIcon className={classes.navIcon+" nav-icon"}/></ListItemIcon>
        </ListItem>
        <ListItem button className={classes.itemDivLast+" nav-item"}>
            <ListItemIcon className={classes.iconDiv}><SettingsIcon className={classes.navIcon+" nav-icon"}/></ListItemIcon>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}

export default Navbar;

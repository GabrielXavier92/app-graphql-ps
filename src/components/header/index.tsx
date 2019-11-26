import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles'

import { useHistory } from "react-router-dom";
import { routes } from "../../routes";
interface IHeader {
  open: boolean;
  handleDrawerOpen: any;
  routes: Array<any>
}
const Header: React.FC<IHeader> = ({ open, handleDrawerOpen }) => {
  const classes = useStyles();
  const history = useHistory()
  const [title, setTitle] = useState('Dashboard')

  useEffect(() => {
    const newTitle = routes.find(route => (
      route.path === history.location.pathname
    ))
    setTitle(newTitle!.name)
  }, [history.location.pathname])

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          {title}
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
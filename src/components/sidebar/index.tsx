import React from 'react';
import clsx from 'clsx';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';

import { useStyles } from './styles'
import Item from './Item';
import { useHistory } from "react-router-dom";

interface ISideBar {
  open: boolean;
  handleDrawerClose: any;
  routes: Array<any>
}


const SideBar: React.FC<ISideBar> = ({ open, handleDrawerClose, routes }) => {
  const history = useHistory()
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <div>
          {routes.map(({ key, name, path }) =>
            (<Item key={key} name={name} selected={path === history.location.pathname} path={path}></Item>)
          )}
        </div>
      </List>
      <Divider />
    </Drawer>
  )
}

export default SideBar
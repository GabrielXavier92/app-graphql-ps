import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import clsx from 'clsx';

import Header from '../header';
import SideBar from '../sidebar';

import { DashboardRoutes } from '../../routes/index';

import { useStyles } from './styles'
import { Container } from "@material-ui/core";

const Dashboard: React.FC = () => {
  const [open, setOpen] = useState(true);

  const classes = useStyles();

  const handleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <Header open={open} handleDrawerOpen={handleDrawer} />
      <SideBar open={open} handleDrawerClose={handleDrawer} />
      <main className={classes.content}>
        <div className={clsx(classes.appBarSpacer, classes.fixedHeight)}>
          <Container maxWidth="lg" className={classes.container}>
            <DashboardRoutes />
          </Container>
        </div>
      </main>
    </div>
  )

}

export default Dashboard
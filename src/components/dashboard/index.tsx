import React, { useState } from 'react';
import clsx from 'clsx';

import { DashboardRoutes, routes } from '../../routes';

import { useStyles } from './styles'
import { Container } from "@material-ui/core";

import Header from '../header';
import SideBar from '../sidebar';

const Dashboard: React.FC = () => {
  const [open, setOpen] = useState(true);

  const classes = useStyles();

  const handleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <Header open={open} handleDrawerOpen={handleDrawer} routes={routes} />
      <SideBar open={open} handleDrawerClose={handleDrawer} routes={routes} />
      <main className={classes.content}>
        <div className={clsx(classes.appBarSpacer, classes.fixedHeight)}>
          <Container className={classes.container}>
            <DashboardRoutes />
          </Container>
        </div>
      </main>
    </div>
  )

}

export default Dashboard
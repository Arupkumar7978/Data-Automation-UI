import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import sideIcons from './constants';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import { sideNavBarStyles } from './styles';
import Fade from '@mui/material/Fade';

const SideNavbar = () => {
  const classes = sideNavBarStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headIconStyles}>
        <Button variant="text">
          <MotionPhotosAutoIcon className={classes.brandLogo} />
        </Button>
      </div>

      <div className={classes.dynamicIconsDiv}>
        {sideIcons.filter(sideIcons=>sideIcons.id<5).map((item) => {
          
            return (
            <Tooltip
              title={item.Name}
              placement="right-end"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <Button key={item.id} className={classes.dynamicIcons}>
                {item.icon}
              </Button>
            </Tooltip>
          );
         } )}
      </div>

      <div className={classes.footerContent}>
      {sideIcons.filter(sideIcons=>sideIcons.id>4).map((item) => {
         
            return (
            <Tooltip
              title={item.Name}
              placement="right-end"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <Button key={item.id} className={classes.dynamicIcons}>
                {item.icon}
              </Button>
            </Tooltip>
          );
          })}
      </div>
    </div>
  );
};

export default SideNavbar;

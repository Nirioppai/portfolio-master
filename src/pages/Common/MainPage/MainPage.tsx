import React, { useState, useEffect } from 'react';

import {
  Box,
  Chip,
  Grid,
  Typography,
  Link,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { About, Experience, FadeInComponent } from '../../../components';

type SectionId = string;

function MainPage() {
  const [isVisible, setIsVisible] = useState(true);
  const theme = useTheme();
  const isLgOrXl = useMediaQuery(theme.breakpoints.up('lg'));

  const handleScroll = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Github and LinkedIn Icon behaviors
  useEffect(() => {
    const handleResize = () => {
      // Check if the current breakpoint is lg or xl
      if (!isLgOrXl) return;

      // Define the condition under which the element should be hidden
      if (window.innerHeight < 600) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [isLgOrXl]);

  return (
    <>
      <FadeInComponent>
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Grid
            container
            justifyContent='center'
            sx={{
              marginTop: { xs: 8, sm: 0, md: 0, lg: 10.7 },
            }}
          >
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Grid
                container
                rowSpacing={1}
                sx={{
                  position: 'sticky',
                  top: { lg: 90, xl: 90 },
                  marginLeft: { lg: -12, xl: 0 },
                }}
              >
                <Grid item xs={12}>
                  <Typography
                    component='h1'
                    sx={{
                      color: 'text.primary',
                      fontSize: '2rem',
                      fontWeight: 'bold',
                    }}
                  >
                    <Link
                      href='/'
                      color='inherit'
                      underline='none'
                      sx={{
                        fontSize: { xs: 28, sm: 40, md: 40, lg: 40, xl: 40 },
                      }}
                    >
                      Nico C. Del Rosario
                    </Link>
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant='h2'
                    sx={{
                      color: 'text.primary',
                      fontSize: '20px',
                      fontWeight: 'medium',
                    }}
                  >
                    Web Developer & Automation Test Engineer
                  </Typography>
                </Grid>

                <Grid item xs={9}>
                  <Typography paragraph sx={{ maxWidth: 'xs' }}>
                    I develop functional web pages and reusable components, and
                    I also design automated test cases for web applications.
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'none',
                      lg: 'block',
                    },
                  }}
                >
                  <List
                    sx={{
                      width: '100%',
                    }}
                    // component='nav'
                    aria-labelledby='nested-list-subheader'
                  >
                    <ListItemButton onClick={() => handleScroll('about')}>
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText primary='About' />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleScroll('experience')}>
                      <ListItemIcon>
                        <StarIcon />
                      </ListItemIcon>
                      <ListItemText primary='Experience' />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <RocketLaunchIcon />
                      </ListItemIcon>
                      <ListItemText primary='Projects' />
                    </ListItemButton>
                  </List>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{
                    position: {
                      xs: 'relative',
                      sm: 'relative',
                      md: 'relative',
                      lg: 'fixed',
                    },
                    bottom: {
                      xs: 0,
                      sm: 0,
                      md: 0,
                      lg: 90,
                    },
                    display: isVisible ? 'block' : 'none', // Conditional display based on state
                  }}
                >
                  <IconButton>
                    <GitHubIcon />
                  </IconButton>
                  <IconButton>
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
             <About/>
             <Experience/>
              
            </Grid>

            {/* New Content */}
          </Grid>
        </Box>
      </FadeInComponent>
    </>
  );
}

export default MainPage;

import React from 'react';

import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FadeInComponent } from '../../../components';

type SectionId = string;

function MainPage() {
  const handleScroll = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
              <Box id='about'>
                <Typography
                  sx={{
                    display: {
                      xs: 'block',
                      sm: 'block',
                      md: 'block',
                      lg: 'none',
                    },
                  }}
                  py={3}
                >
                  ABOUT
                </Typography>

                <Typography paragraph>
                  Back in 2018, I was given the opportunity to lead a web
                  development project for Xavier School San Juan as a student,
                  creating their first queueing system for student enrollments.
                  The system was well-received by staff, students, and parents.
                  Reflecting on that experience, it marked the beginning of a
                  deep dive into coding and web development. Fast forward to
                  today, I’ve had the privilege of developing an additional
                  system for Xavier School, building systems for a startup, and
                  engaging in various freelance opportunities. Currently, I am
                  exploring the field of Automation Testing.
                </Typography>

                <Typography paragraph>
                  My primary focus these days is designing automated test cases
                  for the development team at DOST - PHIVOLCS. I particularly
                  enjoy working at the intersection of design and engineering,
                  where aesthetics meet robust construction. In my free time, I
                  continually expand my knowledge in the field of quality
                  assurance.
                </Typography>

                <Typography paragraph>
                  When I'm not at the computer, I'm usually 🚲cycling,
                  📖reading, or playing the 🎹piano.
                </Typography>
              </Box>
              <Box id='experience'>
                <Grid item xs={12}>
                  <Box>
                    <Typography
                      sx={{
                        display: {
                          xs: 'block',
                          sm: 'block',
                          md: 'block',
                          lg: 'none',
                        },
                      }}
                      py={3}
                    >
                      EXPERIENCE
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginTop: { xs: 0, sm: 0, md: 0, lg: 19, xl: 19 },
                    }}
                  >
                    <Typography>2024 - Present</Typography>
                    <Typography paragraph>2024 - Present</Typography>
                  </Box>
                </Grid>
              </Box>
            </Grid>

            {/* New Content */}
          </Grid>
        </Box>
      </FadeInComponent>
    </>
  );
}

export default MainPage;

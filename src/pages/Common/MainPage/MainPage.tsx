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
import { Experience, FadeInComponent } from '../../../components';

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

{/* Icons */}
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
                  <IconButton
                    component="a"
                    href="https://github.com/Nirioppai"
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/nico-del-rosario-a84281211/"
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer">
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
                  and implementing the AGILE workflow for the development team
                  at DOST - PHIVOLCS. I particularly enjoy working at the
                  intersection of design and engineering, where aesthetics meet
                  robust construction. In my free time, I continually expand my
                  knowledge in the field of quality assurance.
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

                  <Experience 
        timeframe="06/2024 - Present"
        title="QA Consultant"
        company="World Bank Group"
        description="Spearheaded comprehensive automation testing strategies, developing robust workflows for smoke and regression testing using Jenkins and Robot Framework. Engineered performance testing scripts with JMeter to enhance system reliability and validate application performance."
        chips={['Robot Framework', 'Jenkins', 'JMeter', 'Automation Testing']}
      />

      <Experience 
        timeframe="09/2023 - 06/2024"
        title="Project Technical Specialist III - Automation Test Engineer"
        company="Philippine Institute of Volcanology and Seismology"
        description="Transformed R&D division's workflow by integrating Agile methodologies and GitLab, significantly improving project efficiency. Developed comprehensive automation testing frameworks for critical platforms including Plansmart for Safe Schools and El Nino Online Platform. Conducted performance testing to enhance application stability and reliability."
        chips={['Robot Framework', 'Jenkins', 'JMeter', 'Agile', 'GitLab']}
      />

      <Experience 
        timeframe="11/2022 - 09/2023"
        title="Frontend Developer"
        company="Stack Educational Technologies"
        description="Developed and maintained mission-critical web applications for educational systems, including a Finance System, Learning Management System, and Admission System. Worked in an Agile-driven environment, ensuring timely project delivery and adherence to internal risk control guidelines."
        chips={['React.js', 'TypeScript', 'Agile Methodology']}
      />

      <Experience 
        timeframe="09/2022 - 10/2022"
        title="Intern Frontend Developer"
        company="Offshorly"
        description="Contributed to the revitalization of an NFT application by enhancing the home page design, implementing intuitive search functionality with advanced filters, and optimizing front-end code for improved performance and maintainability."
        chips={['Frontend Development', 'UI/UX', 'Code Optimization']}
      />

      <Experience 
        timeframe="09/2022 - 09/2022"
        title="Freelance Frontend Developer"
        description="Developed a Facility and Equipment Lending System using React.js and TypeScript, creating responsive and modern frontend layouts with React Query for efficient state management."
        chips={['React.js', 'TypeScript', 'React Query']}
      />

      <Experience 
        timeframe="05/2022 - 08/2022"
        title="Freelance Frontend Developer"
        description="Created an Attendance Monitoring System using React.js and TypeScript, focusing on responsive design and efficient data management with React Query."
        chips={['React.js', 'TypeScript', 'React Query']}
      />

      <Experience 
        timeframe="04/2022 - 08/2022"
        title="Freelance Full Stack Developer"
        description="Developed a comprehensive Gym Management System using Laravel, creating responsive layouts and implementing robust backend functionality with SQL database integration and Heroku deployment."
        chips={['Laravel', 'Bootstrap', 'SQL', 'Heroku']}
      />

      <Experience 
        timeframe="11/2019 - 11/2021"
        title="Full Stack Web Developer"
        company="Xavier School San Juan"
        description="Engineered two pivotal systems: the OLSAT Monitoring System, which automated workflows and increased efficiency by 80%, and the Dynamic Queueing System, which transformed the school's enrollment process."
        chips={['Full Stack Development', 'System Automation']}
      />
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

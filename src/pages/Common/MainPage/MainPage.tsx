import React, { useState, useEffect } from 'react';

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
  useTheme,
  useMediaQuery,
} from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Experience, FadeInComponent, ProjectCard } from '../../../components';

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

  const skillList = {
    robotFramework: {
      label: 'Robot Framework',
      url: 'https://robotframework.org/',
    },
    jenkins: { label: 'Jenkins', url: 'https://www.jenkins.io/' },
    jmeter: { label: 'JMeter', url: 'https://jmeter.apache.org/' },
    automationTesting: {
      label: 'Automation Testing',
      url: 'https://www.globalapptesting.com/blog/what-is-automation-testing',
    },
    agile: {
      label: 'Agile',
      url: 'https://asana.com/resources/agile-methodology',
    },
    gitLab: { label: 'GitLab', url: 'https://gitlab.com/' },
    react: { label: 'React.js', url: 'https://reactjs.org/' },
    typeScript: { label: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    reactQuery: { label: 'React Query', url: 'https://tanstack.com/query/' },
    frontendDev: {
      label: 'Frontend Development',
      url: 'https://en.wikipedia.org/wiki/Front-end_web_development',
    },
    uiux: {
      label: 'UI/UX',
      url: 'https://flatironschool.com/blog/what-is-ux-ui-design/',
    },
    codeOptimization: {
      label: 'Code Optimization',
      url: 'https://www.quora.com/What-exactly-does-code-optimization-mean',
    },
    laravel: { label: 'Laravel', url: 'https://laravel.com/' },
    bootstrap: { label: 'Bootstrap', url: 'https://getbootstrap.com/' },
    sql: { label: 'SQL', url: 'https://www.mysql.com/' },
    heroku: { label: 'Heroku', url: 'https://www.heroku.com/' },
    fullStackDev: {
      label: 'Full Stack Development',
      url: 'https://www.mongodb.com/resources/basics/full-stack-development',
    },
    systemAutomation: {
      label: 'System Automation',
      url: 'https://www.ibm.com/docs/en/tsaam/4.1.0?topic=overview-system-automation',
    },
  };

  const projects = [
    {
      backgroundImage: '/dynamicpos.png',
      title: 'Scalable POS',
      description:
        'A POS gathered for business owners specifically that have multiple businesses that has multiple products they want to use across their businesses, wherein they can share assets, products, stores and cashiers by their fingertips.',
      link: '#',
      chips: [
        { label: 'React', url: 'https://reactjs.org/' },
        { label: 'Material UI', url: 'https://mui.com/' },
        { label: 'Firebase', url: 'https://firebase.google.com/' },
      ],
      timeframe: '2023',
      company: 'Thesis Project',
      carouselImages: [
        {
          title: 'Dynamic POS Screenshot',
          url: '/dynamicpos.png',
        },
      ],
    },
    {
      backgroundImage: '/edhevents.png',
      title: 'EDH Events',
      description:
        "A Magic the Gathering Commander Format centric Pairings builder designed for the 4 Player Commander Format. Pairings are based primarily on Upkeep Hobbies' rulings.",
      link: 'https://edh-pairings.vercel.app/events',
      chips: [
        { label: 'Next JS', url: 'https://nextjs.org/' },
        { label: 'Vercel', url: 'https://vercel.com/' },
        { label: 'Firebase', url: 'https://firebase.google.com/' },
      ],
      timeframe: 'WIP',
      company: 'Freelance',
      carouselImages: [
        {
          title: 'EDH Events Screenshot',
          url: '/edhevents.png',
        },
      ],
    },
    {
      backgroundImage: '/facility.png',
      title: 'Facilities and Equipment Borrowing App',
      description:
        'A tracker for facilities and equipment lending for a specific organization in for the Polytechnic University of the Philippines.',
      link: '#',
      chips: [
        { label: 'React', url: 'https://reactjs.org/' },
        { label: 'Material UI', url: 'https://mui.com/' },
        { label: 'Firebase', url: 'https://firebase.google.com/' },
      ],
      timeframe: '2022',
      company: 'Freelance',
      carouselImages: [
        {
          title: 'Facilities App Screenshot',
          url: '/facility.png',
        },
      ],
    },
    {
      backgroundImage: '/zzzparty.png',
      title: 'New Eridu Party Generator',
      description:
        'A Personal project of mine to automatically come up with good parties based on the characters I have that refer to the community ratings.',
      link: 'https://zzz-team-generator.web.app/',
      chips: [
        { label: 'React', url: 'https://reactjs.org/' },
        { label: 'Firebase', url: 'https://firebase.google.com/' },
      ],
      timeframe: '2023',
      company: 'Personal',
      carouselImages: [
        {
          title: 'New Eridu Party Screenshot',
          url: '/zzzparty.png',
        },
      ],
    },
  ];

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
                    I develop functional web pages and reusable components, as
                    well as design automated test cases for web applications.
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
                    <ListItemButton onClick={() => handleScroll('projects')}>
                      <ListItemIcon>
                        <RocketLaunchIcon />
                      </ListItemIcon>
                      <ListItemText primary='Projects' />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleScroll('getintouch')}>
                      <ListItemIcon>
                        <RocketLaunchIcon />
                      </ListItemIcon>
                      <ListItemText primary='Get in Touch' />
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
                    component='a'
                    href='https://github.com/Nirioppai'
                    target='_blank' // Opens in a new tab
                    rel='noopener noreferrer'
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    component='a'
                    href='https://www.linkedin.com/in/nico-del-rosario-a84281211/'
                    target='_blank' // Opens in a new tab
                    rel='noopener noreferrer'
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Box id='about'>
                <Typography
                  variant='h4'
                  component='h1'
                  sx={{
                    fontSize: '40px',
                    fontWeight: 'bold',
                    lineHeight: 1.2,
                  }}
                >
                  About
                </Typography>

                <Typography
                  sx={{ marginTop: { xs: 9, sm: 9, md: 9, lg: 9, xl: 9 } }}
                  paragraph
                >
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
              <Box id='experience' sx={{ marginTop: 20 }}>
                <Grid item xs={12}>
                  <Typography
                    variant='h4'
                    component='h1'
                    sx={{
                      fontSize: '40px',
                      fontWeight: 'bold',
                      lineHeight: 1.2,
                    }}
                  >
                    Experience
                  </Typography>

                  <Experience
                    timeframe='06 2024 - Present'
                    title='QA Consultant'
                    company='The World Bank Group'
                    description='Spearheaded comprehensive automation testing strategies, developing robust workflows for smoke and regression testing using Jenkins and Robot Framework. Engineered performance testing scripts with JMeter to enhance system reliability and validate application performance.'
                    chips={[
                      skillList.agile,
                      skillList.automationTesting,
                      skillList.gitLab,
                      skillList.jenkins,
                      skillList.jmeter,
                      skillList.robotFramework,
                      skillList.systemAutomation,
                    ]}
                  />

                  <Experience
                    timeframe='09 2023 - Present'
                    title='Project Technical Specialist III - Automation Test Engineer'
                    company='Philippine Institute of Volcanology and Seismology'
                    description="Transformed R&D division's workflow by integrating Agile methodologies and GitLab, significantly improving project efficiency. Developed comprehensive automation testing frameworks for critical platforms including Plansmart for Safe Schools, Ready to Rebuild, and El Nino Online Platform. Conducted performance testing to enhance application stability and reliability."
                    chips={[
                      skillList.agile,
                      skillList.automationTesting,
                      skillList.gitLab,
                      skillList.jenkins,
                      skillList.jmeter,
                      skillList.robotFramework,
                      skillList.systemAutomation,
                    ]}
                  />

                  <Experience
                    timeframe='11 2022 - 09 2023'
                    title='Frontend Developer'
                    company='Stack Educational Technologies'
                    description='Developed and maintained mission-critical web applications for educational systems, including a Finance System, Learning Management System, and Admission System. Worked in an Agile-driven environment, ensuring timely project delivery and adherence to internal risk control guidelines.'
                    chips={[
                      skillList.react,
                      skillList.reactQuery,
                      skillList.typeScript,
                      skillList.agile,
                      skillList.uiux,
                    ]}
                  />

                  <Experience
                    timeframe='09 2022 - 10 2022'
                    title='Intern Frontend Developer'
                    company='Offshorly'
                    description='Contributed to the revitalization of an NFT application by enhancing the home page design, implementing intuitive search functionality with advanced filters, and optimizing front-end code for improved performance and maintainability.'
                    chips={[
                      skillList.agile,
                      skillList.codeOptimization,
                      skillList.frontendDev,
                      skillList.react,
                      skillList.typeScript,
                    ]}
                  />

                  <Experience
                    timeframe='09 2022 - 09 2022'
                    title='Freelance Frontend Developer'
                    description='Developed a Facility and Equipment Lending System using React.js and TypeScript, creating responsive and modern frontend layouts with React Query for efficient state management.'
                    chips={[
                      skillList.react,
                      skillList.reactQuery,
                      skillList.typeScript,
                      skillList.uiux,
                      skillList.fullStackDev,
                    ]}
                  />

                  <Experience
                    timeframe='05 2022 - 08 2022'
                    title='Freelance Frontend Developer'
                    description='Created an Attendance Monitoring System using React.js and TypeScript, focusing on responsive design and efficient data management with React Query.'
                    chips={[
                      skillList.react,
                      skillList.reactQuery,
                      skillList.typeScript,
                      skillList.uiux,
                      skillList.fullStackDev,
                    ]}
                  />

                  <Experience
                    timeframe='04 2022 - 08 2022'
                    title='Freelance Full Stack Developer'
                    description='Developed a comprehensive Gym Management System using Laravel, creating responsive layouts and implementing robust backend functionality with SQL database integration and Heroku deployment.'
                    chips={[
                      skillList.bootstrap,
                      skillList.fullStackDev,
                      skillList.heroku,
                      skillList.laravel,
                      skillList.sql,
                      skillList.uiux,
                    ]}
                  />

                  <Experience
                    timeframe='11 2019 - 11 2021'
                    title='Frontend Developer'
                    company='Stack Educational Technologies'
                    description='Built and enhanced web applications for organizational systems, focusing on responsive design, improved navigation, and modern visuals. Key projects include a Finance System, where I developed responsive frontend features; a Learning Management System, where I contributed as both a Frontend Developer and Product Manager; and an Admission System, where I implemented core frontend functionalities. I collaborated in an Agile-driven environment, adhering to risk control and quality standards.'
                    chips={[
                      skillList.react,
                      skillList.typeScript,
                      skillList.uiux,
                      skillList.agile,
                    ]}
                  />

                  <Experience
                    timeframe='09 2019 - 09 2021'
                    title='Full Stack Web Developer'
                    company='Xavier School San Juan'
                    description="Engineered two pivotal systems: the OLSAT Monitoring System, which automated workflows and increased efficiency by 80%, and the Dynamic Queueing System, which transformed the school's enrollment process."
                    chips={[
                      skillList.bootstrap,
                      skillList.fullStackDev,
                      skillList.heroku,
                      skillList.laravel,
                      skillList.sql,
                      skillList.uiux,
                    ]}
                  />
                </Grid>

                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  mt={2}
                  mb={2}
                >
                  <Typography
                    variant='h6'
                    sx={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'primary.main' },
                    }}
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/resume.pdf';
                      link.target = '_blank';
                      link.rel = 'noopener noreferrer';
                      link.click();
                    }}
                  >
                    View Full Resume
                  </Typography>
                </Box>
              </Box>

              <Box
                id='projects'
                sx={{
                  marginTop: { xs: 12, sm: 12, md: 12, lg: 12, xl: 12 },
                }}
              >
                <Box>
                  <Typography
                    variant='h4'
                    component='h1'
                    sx={{
                      fontSize: '40px',
                      fontWeight: 'bold',
                      lineHeight: 1.2,
                    }}
                  >
                    Projects
                  </Typography>
                </Box>
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    backgroundImage={project.backgroundImage}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    chips={project.chips}
                    timeframe={project.timeframe}
                    company={project.company}
                    carouselImages={project.carouselImages}
                  />
                ))}
              </Box>

              <Box id='getintouch' sx={{ marginTop: 15 }}>
                <Box id='get-in-touch'>
                  {/* Header */}
                  <Typography
                    variant='h4'
                    component='h1'
                    sx={{
                      fontSize: '40px',
                      fontWeight: 'bold',
                      lineHeight: 1.2,
                    }}
                  >
                    Get in Touch
                  </Typography>
                  {/* Description */}
                  <Typography
                    sx={{ marginTop: 5, marginBottom: 2 }}
                    variant='body1'
                    align='left'
                  >
                    Whether you're a developer looking for collaboration, an
                    employer seeking talent, or someone simply intrigued by my
                    work, I'd love to hear from you! Feel free to drop a
                    message. Let’s build, innovate, and make great ideas come to
                    life together.
                  </Typography>
                  {/* Email Link */}
                  You can contact me at &nbsp;
                  <Link href='mailto:nicodelrosario0806@gmail.com' align='left'>
                    nicodelrosario0806@gmail.com
                  </Link>
                  .
                </Box>
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

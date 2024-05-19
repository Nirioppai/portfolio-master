import React from 'react';

import { Grid, Box, Typography } from '@mui/material';
import Experience from '../Experience';

function About() {
  return (
    <div>
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
            Back in 2018, I was given the opportunity to lead a web development
            project for Xavier School San Juan as a student, creating their
            first queueing system for student enrollments. The system was
            well-received by staff, students, and parents. Reflecting on that
            experience, it marked the beginning of a deep dive into coding and
            web development. Fast forward to today, I’ve had the privilege of
            developing an additional system for Xavier School, building systems
            for a startup, and engaging in various freelance opportunities.
            Currently, I am exploring the field of Automation Testing.
          </Typography>

          <Typography paragraph>
            My primary focus these days is designing automated test cases and
            implementing the AGILE workflow for the development team at DOST -
            PHIVOLCS. I particularly enjoy working at the intersection of design
            and engineering, where aesthetics meet robust construction. In my
            free time, I continually expand my knowledge in the field of quality
            assurance.
          </Typography>

          <Typography paragraph>
            When I'm not at the computer, I'm usually 🚲cycling, 📖reading, or
            playing the 🎹piano.
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
              <Experience />
            </Box>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}

export default About;

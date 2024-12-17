import React from 'react';
import { Box, Grid, Typography, Chip } from '@mui/material';

function Experience() {
  return (
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
        <Box>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={3}>
              <Typography>2024 - Present</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              Position
            </Grid>
            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={9}>
              <Typography paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Voluptatum ex quo aliquam expedita nam
                debitis, unde obcaecati perspiciatis suscipit autem
                eaque ab, quasi ratione maxime voluptatibus.
                Similique enim dolorum a?ds
              </Typography>
              <Chip
                sx={{ padding: '3px', marginRight: 1 }}
                label='Chip Filled'
              />
              <Chip
                sx={{ padding: '3px', marginRight: 1 }}
                label='Chip Filled'
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      


    </Grid>
  </Box>
  );
}

export default Experience;

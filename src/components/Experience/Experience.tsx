import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function Experience() {
  return (
    <Box>
      <Grid container rowSpacing={1}>
        <Grid item xs={2}>
          <Typography>2024 - Present</Typography>
        </Grid>
        <Grid item xs={10}>
          Senior Frontend
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <Typography paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            ex quo aliquam expedita nam debitis, unde obcaecati perspiciatis
            suscipit autem eaque ab, quasi ratione maxime voluptatibus.
            Similique enim dolorum a?ds
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Experience;

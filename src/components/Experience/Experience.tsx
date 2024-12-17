import React from 'react';
import { Box, Grid, Typography, Chip, BoxProps } from '@mui/material';

/**
 * Interface defining the props for the ExperienceCard component
 */
interface ExperienceCardProps extends Omit<BoxProps, 'title'> {
  /** The timeframe of the experience (e.g., "2024 - Present") */
  timeframe: string;

  /** The title of the experience */
  title: string;

  /** The company of the experience */
  company: string;

  /** Detailed description of the experience */
  description: string;

  /** Optional array of skills or technologies used */
  chips?: string[];
}

/**
 * ExperienceCard Component
 * Displays a card-like layout for professional experiences
 */
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  timeframe,
  title,
  company,
  description,
  chips = [],
  ...boxProps
}) => {
  return (
    <Box  sx={{
      marginTop: { xs: 10, sm: 10, md: 10, lg: 10, xl: 10 },
    }} {...boxProps}>
      <Grid container rowSpacing={1}>
        {/* Timeframe */}
        <Grid item xs={12} sm={3}>
          <Typography>{timeframe}</Typography>
        </Grid>
        
        {/* Title */}
        <Grid item xs={12} sm={9}>
          <Typography>{title} at {company}</Typography>
        </Grid>
        
        {/* Empty Grid for alignment */}
        <Grid item xs={12} sm={3}></Grid>
        
        {/* Description and Chips */}
        <Grid item xs={12} sm={9}>
          <Typography paragraph>{description}</Typography>
          {chips.map((chipLabel, index) => (
            <Chip
              key={index}
              sx={{ padding: '3px', marginRight: 1 }}
              label={chipLabel}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceCard;
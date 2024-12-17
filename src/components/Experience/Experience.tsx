import React from 'react';
import { Box, Grid, Typography, Chip, BoxProps } from '@mui/material';

/**
 * Interface for a single Chip item
 */
interface ChipItem {
  label: string; // The text label for the chip
  url: string; // The URL to redirect to on click
}

/**
 * Interface defining the props for the ExperienceCard component
 */
interface ExperienceCardProps extends Omit<BoxProps, 'title'> {
  /** The timeframe of the experience (e.g., "2024 - Present") */
  timeframe: string;

  /** The title of the experience */
  title: string;

  /** The company of the experience (optional) */
  company?: string;

  /** Detailed description of the experience */
  description: string;

  /** Optional array of skills or technologies used */
  chips?: ChipItem[]; // Updated to accept ChipItem objects
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
    <Box
      sx={{
        marginTop: { xs: 9, sm: 9, md: 9, lg: 9, xl: 9 },
      }}
      {...boxProps}
    >
      <Grid container rowSpacing={1}>
        {/* Timeframe */}
        <Grid item xs={12} sm={3}>
          <Typography>{timeframe}</Typography>
        </Grid>

        {/* Title */}
        <Grid item xs={12} sm={9}>
          <Typography>
            {title}
            {company && ` at ${company}`}
          </Typography>
        </Grid>

        {/* Empty Grid for alignment */}
        <Grid item xs={12} sm={3}></Grid>

        {/* Description and Chips */}
        <Grid item xs={12} sm={9}>
          <Typography paragraph>{description}</Typography>
          {chips.map((chip, index) => (
            <Chip
              key={index}
              sx={{
                padding: '3px',
                marginRight: 1,
                marginBottom: 2,
                cursor: 'pointer',
              }}
              label={chip.label} // Use chip label
              onClick={() => window.open(chip.url, '_blank')} // Open the chip URL in a new tab
              clickable
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceCard;

import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Chip,
  Backdrop,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SxProps, Theme } from '@mui/system';

// Interface for component props
interface ProjectCardProps {
  backgroundImage: string; // Background image URL
  title: string; // Title of the project
  description: string; // Description of the project
  link?: string; // Optional link to the project
  chips: { label: string; url: string }[]; // List of chips with label and URL
  boxProps?: SxProps<Theme>; // Optional additional Box styling props
  timeframe?: string; // Optional timeframe
  company?: string; // Optional company name
  carouselImages: { title: string; url: string }[]; // Images for carousel
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  backgroundImage,
  title,
  description,
  link,
  chips,
  boxProps,
  timeframe,
  company,
  carouselImages,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const responsive = {
    ultraWide: { breakpoint: { max: 3840, min: 3001 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <>
      {/* Card Component */}
      <Box
        sx={{
          marginTop: { xs: 9, sm: 9, md: 9, lg: 9, xl: 9 },
          borderRadius: 2,
          padding: 2,
          color: '#fff',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          backgroundColor: isHovered ? 'rgba(0, 123, 255, 0.1)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          '&:hover img': {
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease',
          },
        }}
        onClick={handleOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...boxProps}
      >
        {/* Timeframe (Image Thumbnail) */}
        <Grid
          item
          xs={false} /* Hide on xs */
          sm={3}
          md={6}
          lg={6}
          xl={4}
          sx={{ display: { xs: 'none', sm: 'block' }, alignSelf: 'flex-start' }}
        >
          <Box
            component='img'
            src={backgroundImage}
            alt={title}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 1,
              boxShadow: 2,
              objectFit: 'cover',
            }}
          />
        </Grid>

        {/* Content */}
        <Grid item xs={12} sm={9} md={10} lg={10} xl={10}>
          {/* Title */}
          <Typography
            variant='h5'
            component='h2'
            sx={{
              fontWeight: 'bold',
              cursor: link ? 'pointer' : 'default',
              transition: 'color 0.3s ease',
              '&:hover': link ? { color: 'primary.main' } : {},
            }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent open carousel
              link && window.open(link, '_blank');
            }}
          >
            {title}
            {company && ` - ${company}`}
          </Typography>

          {/* Description */}
          <Typography paragraph>{description}</Typography>

          {/* Chips */}
          {chips.map((chip, index) => (
            <Chip
              key={index}
              sx={{
                padding: '3px',
                marginRight: 1,
                marginBottom: 2,
                cursor: 'pointer',
              }}
              label={chip.label}
              onClick={(e) => {
                e.stopPropagation();
                window.open(chip.url, '_blank');
              }}
              clickable
            />
          ))}
        </Grid>
      </Box>

      {/* Fullscreen Backdrop with Carousel */}
      <Backdrop
        open={open}
        style={{ color: '#fff', zIndex: 1300 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
      >
        <Box
          position='relative'
          width='100%'
          height='100%'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          bgcolor='rgba(0, 0, 0, 0.8)'
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              color: '#fff',
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Carousel */}
          <Box width='80%' maxHeight='80%'>
            <Carousel responsive={responsive} infinite={true}>
              {carouselImages.map((image, index) => (
                <Box
                  key={index}
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    style={{
                      width: '100%',
                      height: '80vh',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              ))}
            </Carousel>
          </Box>
        </Box>
      </Backdrop>
    </>
  );
};

export default ProjectCard;

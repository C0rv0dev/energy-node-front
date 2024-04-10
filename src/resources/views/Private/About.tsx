import React from 'react';
import CardComponent from '../../components/CardComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Grid, IconButton } from '@mui/material';
import config from '../../../config/config';

function About() {
  return (
    <>
      <CardComponent
        hasHeader
        headerTitle="About"
        headerBackgroundColor={(theme) => theme.palette.info.main}
        headerFontColor="white"
      >
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Grid item>
            <p>
              This is a simple application that calculates and gives you an estimated cost of your energy bills; using MERN Stack. 
              <br />
              I ({config.author_name}) made this project with <FontAwesomeIcon icon={faHeart} style={{ color: 'red', margin: '0 5px' }} /> 
              for showcasing and personal use.
            </p>
          </Grid>

          <Grid item>
            <IconButton
              href={config.author_github_url}
              rel='noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
          </Grid>
        </Grid>
      </CardComponent >
    </>
  );
}

export default About;

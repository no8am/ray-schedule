import Head from 'next/head'
import { Fade, Grid, Avatar, Typography } from '@mui/material';
import { compiler } from 'markdown-to-jsx';
import { SocialIcon } from 'react-social-icons';

import markdownOptions from '../components/markdownOptions';

const Person = ({ name, title, image, description, links }) => {
  return (
    <Grid item xs={20} s={10} md={5}>
      <div className="flex flex-row gap-4 h-10 items-center">
        <Avatar alt="" src={image} />
        <span className="flex gap-2">
          {links.map((link, index) => (
            <SocialIcon key={index} url={link} style={{height: "30px", width: "30px"}}/>
          ))}
        </span>
      </div>
      <Typography variant="h6" component="h6" gutterBottom={true} sx={{fontWeight: 900}}>{name}</Typography>
      <Typography variant="body1" color="textSecondary" component="span">{title}</Typography>
      <Typography variant="body2" color="textSecondary" component="span">{description}</Typography><br />
    </Grid>
  )
}

export default function About() {
  return (
    <div className="container">
      <div className={"p-0 m-0 w-screen flex items-center justify-center"}>
        <div>
          <Fade in={true} timeout={1000}>
            <div className={"flex flex-col items-center justify-center max-w-lg mx-auto gap-4 sm:pt-32"}>
              <div className={"flex flex-col flex-wrap items-stretch justify-center gap-4 w-5/6 sm:w-full"}>
              {compiler(`
### *Who are we?*

#### **Current Team**
              `, markdownOptions)}
              <Grid container spacing={5}>
                <Person name="Nick DeMarchis '22" title="Lead Developer" image="https://avatars.githubusercontent.com/u/65045396?v=4" links={["http://nickdemarchis.com", "http://github.com/ndemarchis", "http://linkedin.com/in/nickdemarchis"]}/>
                <Person name="Anh Tran '24" title="Developer" image="https://avatars.githubusercontent.com/u/44528372?v=4" links={["https://github.com/Slayzur02", "https://www.linkedin.com/in/anh-tran-8a8b32202/"]}/>
                <Person name="Minh Bui '23" title="Developer" image="https://avatars.githubusercontent.com/u/29977238?v=4" links={["https://github.com/buiminh1995", "https://www.linkedin.com/in/minhbui19/"]} />
                <Person name="Christina Yu '22" title="Designer" image="https://avatars.githubusercontent.com/u/54337204?v=4" links={["https://www.linkedin.com/in/christinajyu/"]} />
              </Grid>
              {compiler(`
#### **Past Team**
              `, markdownOptions)}
              <Grid container spacing={5}>
                <Person name="Jimmy Wei '21" title="" image="https://avatars.githubusercontent.com/u/2521639?v=4" links={["https://www.linkedin.com/in/chiehmin-wei/"]} />
              </Grid>
              {compiler(`
### *Our Vision*

To make scheduling courses here at Bucknell as easy and convenient as possible.

We believe in the power of a liberal arts education, and that means being exposed to a variety of classes here at Bucknell. Figuring out what you're interested in, what you take, has the opportunity to make your time here all the more meaningful.

We care about that, so we made this tool. We hope you like it.

                `, markdownOptions)}
                <br /><br />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}
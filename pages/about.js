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
                <Person name="Anh Tran '24" title="Developer" image="https://avatars.githubusercontent.com/u/44528372?v=4" links={["https://github.com/Slayzur02", "https://www.linkedin.com/in/anh-tran-8a8b32202/"]}/>
                <Person name="Minh Bui '23" title="Developer" image="https://avatars.githubusercontent.com/u/29977238?v=4" links={["https://github.com/buiminh1995", "https://www.linkedin.com/in/minhbui19/"]} />
              </Grid>
              {compiler(`
#### **Past Team**
              `, markdownOptions)}
              <Grid container spacing={5}>
                <Person name="Jimmy Wei '21" title="Founder" image="https://avatars.githubusercontent.com/u/2521639?v=4" links={["https://www.linkedin.com/in/chiehmin-wei/"]} />
                <Person name="Nick DeMarchis '22" title="f. Lead Developer" image="https://avatars.githubusercontent.com/u/65045396?v=4" links={["http://nickdemarchis.com", "http://github.com/ndemarchis", "http://linkedin.com/in/nickdemarchis"]}/>
                <Person name="Christina Yu '22" title="f. Designer" image="https://avatars.githubusercontent.com/u/54337204?v=4" links={["https://www.linkedin.com/in/christinajyu/"]} />
              </Grid>
              {compiler(`
#### **Special Thanks**
              `, markdownOptions)}
              <Grid container spacing={5}>
                <Person name="Nadeem Nasimi '17" title="Founder, no8am" image="https://avatars.githubusercontent.com/u/6021541?v=4" links={["https://www.linkedin.com/in/nasimi/"]} />
                <Person name="Tony Tomashefski '14" title="Co-creator, ScheduleFast" image="https://via.placeholder.com/128/fff.jpg" links={["https://www.linkedin.com/in/tony-tomashefski-41654b38/"]}/>
                <Person name="Zachary Crowley '16" title="Co-creator, ScheduleFast" image="https://via.placeholder.com/128/fff.jpg" links={["https://www.linkedin.com/in/zachary-crowley-b4596759/"]} />
              </Grid>
              {compiler(`

Read more about the previous projects to tackle course scheduling at Bucknell:
- no8am
    - [Archived site](http://web.archive.org/web/20181123163546/https://no8.am/)
    - [in the Bucknellian](https://bucknellian.net/80003/features/the-brain-behind-no8am/)
- ScheduleFast
    - [Archived site](http://web.archive.org/web/20141123163546/https://schedulefast.com/)
    - [in the Bucknellian](https://bucknellian.net/46737/news/online-scheduling-turf-war-divides-students/)

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
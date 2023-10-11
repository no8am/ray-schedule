import { Fade } from '@mui/material';
import { Card, CardContent, Typography, CardActions, Button, ButtonBase } from '@mui/material';
import { compiler } from 'markdown-to-jsx';
import Link from 'next/link'

import markdownOptions from '../components/markdownOptions';

export default function LandingPage () {
  
  return (
    <div className={"p-0 m-0 w-screen flex items-center justify-center"}>
      <div>
        <Fade in={true} timeout={1000}>
          <div className={"flex flex-col items-center justify-center max-w-lg mx-auto gap-4 sm:pt-32"}>
            <div className={"flex flex-row flex-wrap items-stretch justify-center gap-4 w-5/6 sm:w-full"}>
              {compiler(`

### Welcome to ***'ray*&nbsp;schedule**.

Bucknell's new, smarter, and more efficient scheduling solution is here.

              `, markdownOptions)}
              <Link href="/app" passHref={true}>
                <Button variant='contained' color="primary" size='large'> Use the app 😎 </Button>
              </Link>
              {compiler(`
*Now updated for all of your Spring 2024 scheduling needs.*
              `, markdownOptions)}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
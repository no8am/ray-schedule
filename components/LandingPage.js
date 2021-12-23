import { Fade } from '@mui/material';
import { Card, CardContent, Typography, CardActions, Button, ButtonBase } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux'

export default function LandingPage () {
  
  const dispatch = useDispatch()

  return (
    <div className={"p-0 m-0 w-screen flex items-center justify-center"}>
      <div>
        <Fade in={true} timeout={1000}>
          <div className={"flex flex-col items-center justify-center max-w-lg mx-auto gap-4 sm:pt-32"}>
            <div className={"flex flex-row flex-wrap items-stretch justify-center gap-4 w-full"}>
              <Card className={"min-w-xs max-w-xl"}>
                <ButtonBase onClick={() => {}}>
                  <CardContent>
                    <Typography variant="h4">
                      Auto-scheduler
                    </Typography>
                    <Typography>
                      A student-made course scheduling solution
                    </Typography>
                  </CardContent>
                </ButtonBase>
              </Card>
              <Card className={"min-w-xs max-w-xl"}>
                <ButtonBase onClick={() => {}}>
                  <CardContent>
                    <Typography variant="h4">
                      Manual schedule
                    </Typography>
                    <Typography>
                      A student-made course scheduling solution
                    </Typography>
                  </CardContent>
                </ButtonBase>
              </Card>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
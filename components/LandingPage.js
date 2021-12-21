import { Fade } from '@mui/material';
import { Card, CardContent, Typography, CardActions, Button, ButtonBase } from '@mui/material';

import styles from '../components/LandingPage.module.scss'

export default function LandingPage () {

  return (
    <div className={styles.container}>
      <div className={styles.landingPage}>
        <Fade in={true} timeout={1000}>
          <div className={styles.landingPageContent}>
            <div className={styles.mainOptions}>
              <Card className={styles.card}>
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
              <Card className={styles.card}>
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
            <Card className={styles.card} style={{maxWidth: "100%"}}>
              <ButtonBase onClick={() => {}}>
                <CardContent>
                  <Typography variant="h5">
                    Already have an account? Log in here.
                  </Typography>
                </CardContent>
              </ButtonBase>
            </Card>
          </div>
        </Fade>
      </div>
    </div>
  )
}
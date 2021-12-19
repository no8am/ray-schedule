import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Fade } from '@mui/material';

export default function App () {

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h3">
            frank
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  )
}
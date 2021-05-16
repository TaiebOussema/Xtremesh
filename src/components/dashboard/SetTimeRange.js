import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import SliderRange from '../SliderRange';

const SetTimeRange = (props) => (
  <Card
    sx={{
      borderStyle: 'solid',
      borderWidth: '1px',
      height: '100%'
    }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h4"
          >
            SET TIME RANGE
          </Typography>
          <SliderRange />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default SetTimeRange;

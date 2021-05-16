import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';

const UpTime = (props) => (
  <Card
    style={{
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
            UP TIME
          </Typography>
          <Typography
            color="textPrimary"
            variant="h2"
          >
            10h:55m:23s
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default UpTime;

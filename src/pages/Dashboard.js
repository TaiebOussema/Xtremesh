import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import NumberDevices from 'src/components/dashboard/NumberDevices';
import Informations from 'src/components/dashboard/Informations';
import LatestProducts from 'src/components/dashboard//LatestProducts';
import LatestData from 'src/components/dashboard/LatestData';
import SetTimeRange from 'src/components/dashboard/SetTimeRange';
import Monitoring from 'src/components/dashboard/Monitoring';
import UpTime from 'src/components/dashboard/UpTime';
import DevicesAvailability from 'src/components/dashboard/DevicesAvailabilty';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3,
        zoom: '100%'
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <NumberDevices />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Monitoring />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <UpTime sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <SetTimeRange />
          </Grid>

          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <DevicesAvailability sx={{ height: '100%' }} />
          </Grid>

          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestData />
          </Grid>

          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Informations />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;

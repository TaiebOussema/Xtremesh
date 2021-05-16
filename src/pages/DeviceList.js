import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import DeviceListResults from 'src/components/devices/DeviceListResults';
import DeviceListToolbar from 'src/components/devices/DeviceListToolbar';
import devices from 'src/__mocks__/devices';

const DeviceList = () => (
  <>
    <Helmet>
      <title>Devices</title>
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
        <DeviceListToolbar />
        <Box sx={{ pt: 3 }}>
          <DeviceListResults devices={devices} />
        </Box>
      </Container>
    </Box>
  </>
);

export default DeviceList;

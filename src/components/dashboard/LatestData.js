import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const LatestData = (props) => (
  <Card
    {...props}
    sx={{
      borderStyle: 'solid',
      borderWidth: '1px'
    }}
  >
    <CardHeader
      action={(
        <Button
          endIcon={<ArrowDropDownIcon />}
          size="small"
          ariant="text"
        >
          Last 7 days
        </Button>
        )}
      title="Latest Data/Problems"
    />
    <Divider />
    <CardContent>
      <Box
        sx={{
          height: 0,
          position: 'relative'
        }}
      />
      <iframe title="events panel" src="http://192.168.1.55:3001/d-solo/9A1PQRCGz/test-zabbix?orgId=1&from=now-2d&to=now&refresh=5s&theme=light&panelId=4" width="100%" height="400" frameBorder="0" />
    </CardContent>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        Overview
      </Button>
    </Box>
  </Card>
);

export default LatestData;

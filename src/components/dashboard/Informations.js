/* eslint-disable */
import devices from 'src/__mocks__/devices';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Informations = (props) => (
  <Card
    style={{
      borderStyle: 'solid',
      borderWidth: '1px',
      height: '100%'
    }}
    {...props}
  >
    <CardHeader title="Informations" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                IP Address
              </TableCell>
              <TableCell>
                Name
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    MAC
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devices.map((devices) => (
              <TableRow
                hover
                key={devices.id}
              >
                <TableCell>
                  {devices.ip}
                </TableCell>
                <TableCell>
                  {devices.name}
                </TableCell>
                <TableCell>
                  {devices.mac}
                </TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label="pending"
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
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
        View all
      </Button>
    </Box>
  </Card>
);

export default Informations;

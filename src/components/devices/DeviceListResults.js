import { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';

const DeviceListResults = ({ devices, ...rest }) => {
  const [selectedDeviceIds, setSelectedDeviceIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedDeviceIds;

    if (event.target.checked) {
      newSelectedDeviceIds = devices.map((device) => device.id);
    } else {
      newSelectedDeviceIds = [];
    }

    setSelectedDeviceIds(newSelectedDeviceIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedDeviceIds.indexOf(id);
    let newSelectedDeviceIds = [];

    if (selectedIndex === -1) {
      newSelectedDeviceIds = newSelectedDeviceIds.concat(selectedDeviceIds, id);
    } else if (selectedIndex === 0) {
      newSelectedDeviceIds = newSelectedDeviceIds.concat(selectedDeviceIds.slice(1));
    } else if (selectedIndex === selectedDeviceIds.length - 1) {
      newSelectedDeviceIds = newSelectedDeviceIds.concat(selectedDeviceIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedDeviceIds = newSelectedDeviceIds.concat(
        selectedDeviceIds.slice(0, selectedIndex),
        selectedDeviceIds.slice(selectedIndex + 1)
      );
    }

    setSelectedDeviceIds(newSelectedDeviceIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedDeviceIds.length === devices.length}
                    color="primary"
                    indeterminate={
                      selectedDeviceIds.length > 0
                      && selectedDeviceIds.length < devices.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Device name
                </TableCell>
                <TableCell>
                  Ip address
                </TableCell>
                <TableCell>
                  Mac address
                </TableCell>
                <TableCell>
                  Model
                </TableCell>
                <TableCell>
                  BitStream
                </TableCell>
                <TableCell>
                  Firmware
                </TableCell>
                <TableCell>
                  Serial number
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {devices.slice(0, limit).map((device) => (
                <TableRow
                  hover
                  key={device.id}
                  selected={selectedDeviceIds.indexOf(device.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedDeviceIds.indexOf(device.id) !== -1}
                      onChange={(event) => handleSelectOne(event, device.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {device.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {device.ip}
                  </TableCell>
                  <TableCell>
                    {device.mac}
                  </TableCell>
                  <TableCell>
                    {device.model}
                  </TableCell>
                  <TableCell>
                    {device.bitStream}
                  </TableCell>
                  <TableCell>
                    {device.firmware}
                  </TableCell>
                  <TableCell>
                    {device.serialNumber}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={devices.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
      />
    </Card>
  );
};

DeviceListResults.propTypes = {
  devices: PropTypes.array.isRequired
};

export default DeviceListResults;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SliderRange() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen} />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" />
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={15}>Last 15 min</MenuItem>
          <MenuItem value={30}>Last 30 min</MenuItem>
          <MenuItem value={60}>Last 60 min</MenuItem>
          <MenuItem value={120}>Last 2 hours</MenuItem>
          <MenuItem value={180}>Last 3 hours</MenuItem>
          <MenuItem value={360}>Last 6 hours</MenuItem>
          <MenuItem value={1440}>Last 24 hours</MenuItem>
          <MenuItem value={2880}>Last 2 days</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

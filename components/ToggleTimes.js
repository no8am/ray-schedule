import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const ToggleTimes = (props) => {
  const {times, setTimes, facets, setFacets} = props;

  const items = [
    <MenuItem key="" value=""><em>None</em></MenuItem>,
    <MenuItem key={"0800"} value={"0800"}>8:00 AM</MenuItem>,
    <MenuItem key={"0830"} value={"0830"}>8:30 AM</MenuItem>,
    <MenuItem key={"0900"} value={"0900"}>9:00 AM</MenuItem>,
    <MenuItem key={"0930"} value={"0930"}>9:30 AM</MenuItem>,
    <MenuItem key={"1000"} value={"1000"}>10:00 AM</MenuItem>,
    <MenuItem key={"1030"} value={"1030"}>10:30 AM</MenuItem>,
    <MenuItem key={"1100"} value={"1100"}>11:00 AM</MenuItem>,
    <MenuItem key={"1130"} value={"1130"}>11:30 AM</MenuItem>,
    <MenuItem key={"1200"} value={"1200"}>12:00 PM</MenuItem>,
    <MenuItem key={"1230"} value={"1230"}>12:30 PM</MenuItem>,
    <MenuItem key={"1300"} value={"1300"}>1:00 PM</MenuItem>,
    <MenuItem key={"1330"} value={"1330"}>1:30 PM</MenuItem>,
    <MenuItem key={"1400"} value={"1400"}>2:00 PM</MenuItem>,
    <MenuItem key={"1430"} value={"1430"}>2:30 PM</MenuItem>,
    <MenuItem key={"1500"} value={"1500"}>3:00 PM</MenuItem>,
    <MenuItem key={"1530"} value={"1530"}>3:30 PM</MenuItem>,
    <MenuItem key={"1600"} value={"1600"}>4:00 PM</MenuItem>,
    <MenuItem key={"1630"} value={"1630"}>4:30 PM</MenuItem>,
    <MenuItem key={"1700"} value={"1700"}>5:00 PM</MenuItem>,
    <MenuItem key={"1800"} value={"1800"}>6:00 PM</MenuItem>,
    <MenuItem key={"1900"} value={"1900"}>7:00 PM</MenuItem>,
    <MenuItem key={"2000"} value={"2000"}>8:00 PM</MenuItem>,
    <MenuItem key={"2100"} value={"2100"}>9:00 PM</MenuItem>,
    <MenuItem key={"2200"} value={"2200"}>10:00 PM</MenuItem>,
  ]

  const setiTime = (i, time) => {
    let newTimes = [...times];
    newTimes[i] = time;
    setTimes(newTimes);
    setFacets({
      ...facets, 
      "possibleMeetings.Start": newTimes[0],
      // "possibleMeetings.End": newTimes[1],
    });
  }


  return (
    <div className="gap-1 w-full flex flex-row h-8">
      <FormControl className="w-full" size='small'>
      {/* <FormControl className="w-1/2 h-8"> */}
      <InputLabel id="select-start">Start</InputLabel>
      <Select
        value={times[0]}
        className="w-full"
        sx={{fontSize: '.6rem'}}
        id="select-start"
        variant="outlined"
        label="Start"
        native={window.innerWidth < 768}
        onChange={(e, newValue) => setiTime(0, newValue.props.value)}
      >
        {items}
      </Select>
      </FormControl>
      {/* <FormControl className="w-1/2 h-8" error={(times[1]) && (times[0]) && (times[1] < times[0])}>
      <InputLabel id="select-end">End</InputLabel>
      <Select
        value={times[1]}
        className="w-full h-8"
        sx={{fontSize: '.6rem'}}
        id="select-end"
        variant="outlined"
        label="End"
        native={window.innerWidth < 768}
        onChange={(e, newValue) => setiTime(1, newValue.props.value)}
      >
        {items}
      </Select>
      </FormControl> */}
    </div>
  )
}

export default ToggleTimes;
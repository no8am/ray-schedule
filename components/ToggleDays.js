import React, { useState } from "react";
import { withStyles } from '@mui/styles';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const DAYS = [
  {
    key: "monday",
    label: "M"
  },
  {
    key: "tuesday",
    label: "T"
  },
  {
    key: "wednesday",
    label: "W"
  },
  {
    key: "thursday",
    label: "R"
  },
  {
    key: "friday",
    label: "F"
  },
];

const StyledToggleButtonGroup = withStyles(theme => ({
  grouped: {
    "&:not(:last-child)": {
        borderRadius: '4px',
    },
    margin: theme.spacing(2),
    padding: theme.spacing(0, 1),
    "&:not(:first-child)": {
    //   border: "1px solid",
    //   borderColor: "#692B7C",
    //   borderRadius: "50%"
    },
    "&:first-child": {
        marginLeft: theme.spacing(0),
    //   border: "1px solid",
    //   borderColor: "#692B7C",
    //   borderRadius: "50%"
    },
  }
}))(ToggleButtonGroup);

const StyledToggle = withStyles({
  root: {
    // color: "#692B7C",
    // "&$selected": {
    //   color: "white",
    //   background: "#692B7C"
    // },
    // "&:hover": {
    //   borderColor: "#BA9BC3",
    //   background: "#BA9BC3"
    // },
    // "&:hover$selected": {
    //   borderColor: "#BA9BC3",
    //   background: "#BA9BC3"
    // },
    minWidth: 20,
    maxWidth: 20,
    height: 20,
    textTransform: "unset",
    fontSize: "0.75rem"
  },
  selected: {}
})(ToggleButton);

const ToggleDays = (props) => {
  const {days, setDays} = props;
  return (
    <>
      <StyledToggleButtonGroup
        size="small"
        arial-label="Days of the week"
        value={days}
        onChange={(event, value) => setDays(value)}
      >
        {DAYS.map((day, index) => (
          <StyledToggle key={day.key} value={index} aria-label={day.key}>
            {day.label}
          </StyledToggle>
        ))}
      </StyledToggleButtonGroup>
    </>
  );
};

export default ToggleDays;

import React, { useCallback, useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";

const useStyles = makeStyles((theme) => ({
  rounded: {
    backgroundColor: "#3f51b5",
    color: "white",
  },
}));

export default function VehicleIcon(props) {
  const classes = useStyles();
  if (props.data.ongoing) {
    return (
      <Badge color="secondary" variant="dot">
        <Avatar variant="rounded" className={classes.rounded}>
          {props.data.vehicle_type % 2 === 0 ? (
            <DriveEtaIcon />
          ) : (
            <MotorcycleIcon />
          )}
        </Avatar>
      </Badge>
    );
  } else {
    return (
      <Avatar variant="rounded" className={classes.rounded}>
        {props.data.vehicle_type % 2 === 0 ? (
          <DriveEtaIcon />
        ) : (
          <MotorcycleIcon />
        )}
      </Avatar>
    );
  }
}

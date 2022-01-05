import { FC } from "react";
import { Paper, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface SensorDataCardProps {
  color?: string;
  title?: string;
  value?: string | number;
  units?: string;
}

export const SensorDataCard: FC<SensorDataCardProps> = ({
  color,
  title,
  value,
  units,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Box bgcolor={color} className={classes.box}>
        <Typography
          color={"white"}
          letterSpacing={1}
          variant={"h6"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          {title}
        </Typography>
        <Box
          height={"50%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          color={"white"}
        >
          <Typography>
            {value}&nbsp;{units}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

const useStyles = makeStyles({
  container: {
    height: 150,
  },
  box: {
    height: "100%",
    borderRadius: 10,
    padding: 10,
  },
});

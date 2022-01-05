import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "@mui/material";
import { SensorDataCard } from "../components/SensorDataCard";

export const Home: FC = () => {
  return (
    <Grid container gap={1} sx={{ padding: 2 }}>
      <Grid item xs={3}>
        <SensorDataCard
          value={100}
          title={"Temperature"}
          units={"*C"}
          color={colors.blue[500]}
        />
      </Grid>
      <Grid item xs={3}>
        <SensorDataCard
          value={134}
          units={"watts"}
          title={"Power Generated"}
          color={colors.red[500]}
        />
      </Grid>
      <Grid item xs={3}>
        <SensorDataCard
          value={50}
          units={"rmp"}
          title={"RPM"}
          color={colors.green[500]}
        />
      </Grid>
    </Grid>
  );
};

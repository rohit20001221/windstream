import { FC } from "react";
import { Box } from "@mui/material";
import { SensorDataCard } from "../components/SensorDataCard";

export const Home: FC = () => {
  return (
    <Box>
      {/* Display the sensor data */}
      <Box className="h-10 p-3 grid gap-2 grid-cols-3">
        <SensorDataCard
          className={"bg-blue-500 text-white font-bold"}
          value={200}
          units={"*C"}
          title={"Temperature"}
        />
        <SensorDataCard
          className={"bg-yellow-500 text-yellow-100 font-bold"}
          value={120}
          units={"Hz"}
          title={"Frequency"}
        />
        <SensorDataCard
          className={"bg-red-500 text-red-200 font-bold"}
          value={111}
          units={"Watts"}
          title={"Power"}
        />
      </Box>
      {/* Display the graphs */}
      <Box className="grid gap-2 grid-cols-2">
        {/* Bar graph */}
        {/* Pie chart */}
      </Box>
    </Box>
  );
};

import { FC } from "react";
import { Box } from "@mui/material";
import { SensorDataCard } from "../components/SensorDataCard";
import { Line, Bar } from "react-chartjs-2";

export const Home: FC = () => {
  return (
    <Box>
      {/* Display the sensor data */}
      <Box className="p-3 grid gap-2 grid-cols-3 mb-5">
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
      <Box className="grid gap-2 grid-cols-2 px-10">
        {/* Bar graph */}
        <Box className="h-12">
          <Bar
            title="power generated"
            data={{
              labels: [1, 2, 3, 4, 5],
              datasets: [
                {
                  data: [10, 20, 30, 14, 15],
                  barThickness: 40,
                  label: "power generated",
                },
              ],
            }}
          />
        </Box>

        {/* Pie chart */}
        <Box className="h-12">
          <Line
            title="power generated"
            data={{
              labels: [1, 2, 3, 4, 5],
              datasets: [
                {
                  data: [10, 20, 30, 14, 15],
                  label: "revenue generated",
                },
              ],
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

import { FC } from "react";
import { Line } from "react-chartjs-2";
import { Box, colors } from "@mui/material";

export const LineGraph: FC = () => {
  return (
    <Box className={"h-96"}>
      <Line
        className={"max-h-96"}
        data={{
          labels: [1, 2, 3, 4, 5, 6],
          datasets: [
            {
              data: [52, 44, 31, 21, 63, 15],
              borderColor: colors.blueGrey[100],
              backgroundColor: colors.lightBlue[200],
              label: "humidity",
            },
          ],
        }}
      />
    </Box>
  );
};

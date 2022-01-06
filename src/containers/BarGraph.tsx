import { colors, Box } from "@mui/material";
import { FC } from "react";
import { Bar } from "react-chartjs-2";
import { ReadingValue } from "../types/graphs";
import { DateUtil } from "../utils/DateUtil";

interface BarGraphProps {
  title: string;
  data: ReadingValue[];
}

export const BarGraph: FC<BarGraphProps> = ({ title, data }) => {
  return (
    <Box className={"h-96"}>
      <Bar
        className={"max-h-96"}
        title={title}
        data={{
          labels: data.map((item) => DateUtil.getDateTime(item.timestamp)),
          datasets: [
            {
              data: data.map((item) => item.value),
              barThickness: 40,
              label: title,
              borderColor: colors.blue[400],
              backgroundColor: colors.blue[300],
            },
          ],
        }}
      />
    </Box>
  );
};

import { FC } from "react";
import { Line } from "react-chartjs-2";
import { Box, colors } from "@mui/material";
import { ReadingValue } from "../types/graphs";
import { DateUtil } from "../utils/DateUtil";

interface LineGraphProps {
  title: string;
  data: ReadingValue[];
}

export const LineGraph: FC<LineGraphProps> = ({ title, data }) => {
  return (
    <Box className={"h-96"}>
      <Line
        className={"max-h-96"}
        data={{
          labels: data.map((item) => DateUtil.getDateTime(item.timestamp)),
          datasets: [
            {
              data: data.map((item) => item.value),
              borderColor: colors.blueGrey[100],
              backgroundColor: colors.lightBlue[200],
              label: title,
            },
          ],
        }}
      />
    </Box>
  );
};

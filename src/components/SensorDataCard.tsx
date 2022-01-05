import { FC } from "react";
import { Box } from "@mui/material";

interface SensorDataCardProps {
  title?: string;
  value?: string | number;
  units?: string;
  className?: string;
}

export const SensorDataCard: FC<SensorDataCardProps> = ({
  title,
  value,
  units,
  className,
}) => {
  return (
    <Box className={`p-3 h-32 rounded-md shadow-md ${className}`}>
      <Box>{title}</Box>
      <Box>
        {value}&nbsp;{units}
      </Box>
    </Box>
  );
};

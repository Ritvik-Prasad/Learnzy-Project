import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = ({role}) => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Overall Progress" />
      <Box height="75vh">
        <LineChart role={role}/>
      </Box>
    </Box>
  );
};

export default Line;
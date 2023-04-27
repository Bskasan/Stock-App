import { Typography } from "@mui/material";
import KpiCards from "../components/KpiCards";
import Charts from "../components/Charts";

const Home = () => {
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Dashboard
      </Typography>

      <KpiCards />
      <Charts />
    </div>
  );
};

export default Home;

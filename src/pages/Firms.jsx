import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyles";
import FirmModal from "../components/modals/FirmModal";

// import axios from "axios"
// import { useDispatch, useSelector } from "react-redux"
// import { fetchFail, getSuccess, fetchStart } from "../features/stockSlice"

const Firms = () => {
  // const { token } = useSelector((state) => state.auth)
  // const dispatch = useDispatch()

  // const getFirms = async () => {
  //   const BASE_URL = "https://10001.fullstack.clarusway.com/"
  //   dispatch(fetchStart())
  //   const url = "firms"
  //   try {
  //     const { data } = await axios(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     })
  //     dispatch(getSuccess({ data, url }))
  //   } catch (error) {
  //     console.log(error)
  //     dispatch(fetchFail())
  //   }
  // }

  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  useEffect(() => {
    // getFirms()
    getStockData("firms");
  }, []); // eslint-disable-line

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>

      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ marginBottom: "1rem" }}
      >
        New Firm
      </Button>

      <FirmModal open={open} handleClose={handleClose} />

      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} setOpen={setOpen} setInfo={setInfo} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;

import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { deepPurple, pink, amber } from "@mui/material/colors";

const KpiCards = () => {
  const data = [
    {
      id: 1,
      title: "sales",
      value: "$20000",
      icon: <MonetizationOnIcon sx={{ fontSize: "2.3rem" }} />,
      color: deepPurple[600],
      bgColor: deepPurple[100],
    },
    {
      id: 2,
      title: "profit",
      value: "$30000",
      icon: <ShoppingIcon sx={{ fontSize: "2.3rem" }} />,
      color: pink[600],
      bgColor: pink[100],
    },
    {
      id: 3,
      title: "purchases",
      value: "$10000",
      icon: <PaymentsIcon sx={{ fontSize: "2.3rem" }} />,
      color: amber[600],
      bgColor: amber[100],
    },
  ];

  return (
    <Grid container justifyContent={"center"} spacing={5}>
      {data.map((item) => (
        <Grid
          item
          key={item.id}
          xs={12}
          sm={10}
          md={6}
          lg={4}
          sx={{ minWidth: "250px" }}
        >
          <Paper sx={{ p: 2 }} elevation={10}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{
                  backgroundColor: item.bgColor,
                  color: item.color,
                  width: "60px",
                  height: "60px",
                }}
              >
                {item.icon}
              </Avatar>
              <Box>
                <Typography variant="button">{item.title}</Typography>
                <Typography variant="h4">{item.value}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KpiCards;

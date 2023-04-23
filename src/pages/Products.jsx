import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyles";
import ProductModal from "../components/modals/ProductModal";
import ProductCard from "../components/ProductCard";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const Products = () => {
  const { getStockData } = useStockCall();
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    { field: "id", headerName: "#", minWidth: 60, flex: 1 },
    {
      field: "category",
      headerName: "Category",
      headerAlign: "center",
      align: "center",
      minWidth: 40,
      maxWidth: 70
    },
    {
      field: "brand",
      headerName: "Brand",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
    },
    {
      field: "name",
      headerName: "Name",
      type: "number",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
    },

    {
      field: "stock",
      headerName: "Stock",
      headerAlign: "center",
      align: "center",
      minWidth: 100,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "number",
      headerAlign: "center",
      align: "center",
      minWidth: 50,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  useEffect(() => {
    getStockData("products");
  }, []); // eslint-disable-line

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Products
      </Typography>

      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ marginBottom: "1rem" }}
      >
        New Product
      </Button>

      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <Box sx={{ width: "100%" }}>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>

      {/* <Grid container sx={flex}>
        {products?.map((product) => (
          <Grid item key={product.id}>
            <ProductCard
              product={product}
              setOpen={setOpen}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
};

export default Products;

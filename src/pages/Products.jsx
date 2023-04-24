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
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { btnStyle } from "../styles/globalStyles";

const Products = () => {
  const { deleteStockData, getProCatBrand } = useStockCall();
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
    {
      field: "id",
      headerName: "#",
      minWidth: 40,
      maxWidth: 70,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "category",
      headerName: "Category",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      flex: 3,
    },
    {
      field: "brand",
      headerName: "Brand",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      flex: 2,
    },
    {
      field: "name",
      headerName: "Name",
      type: "number",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      flex: 2,
    },

    {
      field: "stock",
      headerName: "Stock",
      headerAlign: "center",
      align: "center",
      minWidth: 100,
      flex: 0.7,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "number",
      headerAlign: "center",
      align: "center",
      minWidth: 50,
      flex: 1,
      renderCell: ({ id }) => (
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          label="Delete"
          sx={btnStyle}
          onClick={() => deleteStockData("products", id)}
        />
      ),
    },
  ];

  useEffect(() => {
    // getStockData("products")
    // getStockData("categories")
    // getStockData("brands")

    //! Promise All
    getProCatBrand();
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

      <Box sx={{ width: "100%", marginTop: "1rem" }}>
        <DataGrid
          autoHeight
          rows={products}
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
          slots={{ toolbar: GridToolbar }}
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

import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    purchases: [],
    sales: [],
    brands: [],
    firms: [],
    products: [],
    categories: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },
    // getSuccessSales: (state, { payload }) => {
    //   state.loading = false
    //   state.sales = payload
    // },
    // getSuccesPurchase: (state, { payload }) => {
    //   state.loading = false
    //   state.purchases = payload
    // },
    getProCatBrandSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.categories = payload[1];
      state.brands = payload[2];
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail, getProCatBrandSuccess } =
  stockSlice.actions;
export default stockSlice.reducer;

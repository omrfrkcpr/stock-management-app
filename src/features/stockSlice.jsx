import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    categories: [],
    brands: [],
    firms: [],
    products: [],
    purchases: [],
    sales: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    // base success reducer for all success cases. We should not use dot notation for dynamic object keys.(payload) Instead of we should use square bracket notation.
    getSuccess: (state, { payload: { data, url } }) => {
      // console.log(payload);
      state.loading = false;
      state[url] = data; // state["brands"] - state["firms"]
    },
    getProCatBrandSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.categories = payload[1];
      state.brands = payload[2];
    },
    getProPurcFirBrandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0].data;
      state.purchases = payload[1].data;
      state.firms = payload[2].data;
      state.brands = payload[3].data;
    },
    getProSalBrandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0].data;
      state.brands = payload[1].data;
      state.sales = payload[2].data;
    },
    getPurcSalesSuccess: (state, { payload }) => {
      state.loading = false;
      state.purchases = payload[1].data;
      state.sales = payload[0].data;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  getProCatBrandSuccess,
  getProPurcFirBrandsSuccess,
  getProSalBrandsSuccess,
  getPurcSalesSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;

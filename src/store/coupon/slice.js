import { createSlice } from "@reduxjs/toolkit";

const couponSlice = createSlice({
  name: "coupon",
  initialState: {
    categories: [],
    couponList: [],
    loadingCategories: true,
    loadingCoupon: true,
  },
  reducers: {
    getCategories(state) {
      state.loadingCategories = true;
    },
    getCategoriesSuccess(state, { payload }) {
      state.loadingCategories = false;
      state.categories = payload.data;
    },
    getCategoriesFail(state) {
      state.loadingCategories = false;
    },
    getCoupon(state) {
      state.loadingCoupon = true;
    },
    getCouponSuccess(state, { payload }) {
      state.loadingCoupon = false;
      state.couponList = payload.data;
    },
    getCouponFail(state) {
      state.loadingCoupon = false;
    },
  },
});

export const {
  getCategoriesFail,
  getCategories,
  getCategoriesSuccess,
  getCoupon,
  getCouponFail,
  getCouponSuccess,
} = couponSlice.actions;

export default couponSlice.reducer;

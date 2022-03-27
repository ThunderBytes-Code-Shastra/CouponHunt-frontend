import { createLogic } from "redux-logic";
import {
  getCategories,
  getCategoriesFail,
  getCategoriesSuccess,
  getCoupon,
  getCouponFail,
  getCouponSuccess,
  submitCardDetail,
  submitCardDetailFail,
  submitCardDetailSuccess,
} from "./slice";
import get from "lodash/get";

const getCategoriesLogic = createLogic({
  type: getCategories.type,
  latest: true,

  async process({ action, baseAxios }, dispatch, done) {
    try {
      const res = await baseAxios.get("bank-and-offer/banks");

      dispatch(getCategoriesSuccess(res.data));
    } catch (err) {
      dispatch(
        getCategoriesFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

const getCouponLogic = createLogic({
  type: getCoupon.type,
  latest: true,

  async process({ action, baseAxios }, dispatch, done) {
    try {
      const { bankName } = action.payload;

      const res = await baseAxios.get("bank-and-offer/offers", {
        params: { bankName },
      });

      dispatch(getCouponSuccess(res.data));
    } catch (err) {
      dispatch(
        getCouponFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

const submitCardDetailLogic = createLogic({
  type: submitCardDetail.type,
  latest: true,

  async process({ action, baseAxios }, dispatch, done) {
    try {
      const { bankName, cardType } = action.payload;

      const res = await baseAxios.get("bank-and-offer/offers", {
        params: { bankName, cardType: encodeURIComponent(cardType) },
      });

      console.log("submitCardDetail: ", res);
      dispatch(submitCardDetailSuccess(res.data));
    } catch (err) {
      console.log("error: ", { ...err });
      dispatch(
        submitCardDetailFail(
          get(err, "response.data.error.message", err.message)
        )
      );
    }
    done();
  },
});

export default [getCategoriesLogic, getCouponLogic, submitCardDetailLogic];

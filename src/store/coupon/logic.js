import { createLogic } from "redux-logic";
import {
  getCategories,
  getCategoriesFail,
  getCategoriesSuccess,
  getCoupon,
  getCouponFail,
  getCouponSuccess,
  sendMessages,
  sendMessagesFail,
  sendMessagesSuccess,
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
      const { bankName, limit, isHomeScreen } = action.payload;

      const res = await baseAxios.get("bank-and-offer/offers", {
        params: { bankName, limit },
      });

      dispatch(getCouponSuccess({ data: res.data, isHomeScreen }));
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

const sendMessagesLogic = createLogic({
  type: sendMessages.type,
  latest: true,

  async process({ action, mlAxios }, dispatch, done) {
    try {
      const { messages } = action.payload;

      const res = await mlAxios.post("/translation", {
        messages: [],
      });

      console.log("submitCardDetail: ", res);
      dispatch(sendMessagesSuccess(res.data));
    } catch (err) {
      console.log("error: ", { ...err });
      dispatch(
        sendMessagesFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

export default [getCategoriesLogic, getCouponLogic, submitCardDetailLogic];

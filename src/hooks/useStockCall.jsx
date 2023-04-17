import { useDispatch, useSelector } from "react-redux";
import { getSuccess, fetchFail, fetchStart } from "../features/stockSlice";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    // const BASE_URL = "https://12177.fullstack.clarusway.com/";
    dispatch(fetchStart());

    try {
      // const { data } = await axios(`${BASE_URL}stock/${url}/`, {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //   },
      // });
      const { data } = await axiosWithToken(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken(`stock/${url}/${id}`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be deleted`);
    }
  };

  const postStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} successfuly posted`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be posted`);
    }
  };

  const putStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} successfuly updated`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be updated`);
    }
  };
  return { getStockData, deleteStockData, postStockData, putStockData };
};

export default useStockCall;

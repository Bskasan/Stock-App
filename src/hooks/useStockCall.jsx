import { useDispatch, useSelector } from "react-redux";
import { getSuccess, fetchFail, fetchStart } from "../features/stockSlice";
import axios from "axios";
import { toastErrorNotify } from "../helper/ToastNotify";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const getStockData = async (url) => {
    const BASE_URL = "https://12177.fullstack.clarusway.com/";
    dispatch(fetchStart());

    try {
      const { data } = await axios(`${BASE_URL}stock/${url}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    const BASE_URL = "https://12177.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      await axios(`${BASE_URL}stock/${url}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be deleted`);
    }
  };

  return { getStockData, deleteStockData };
};

export default useStockCall;

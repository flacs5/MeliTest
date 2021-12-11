import { useReducer, useEffect } from "react";
import { Action, ApiState } from "../shared/types";

function useService<T>(
  func: () => Promise<T>,
  query?: string
): [T | null, boolean] {
  const serviceReducer = <T>(
    state: ApiState<T>,
    action: Action<T>
  ): ApiState<T> => {
    switch (action.type) {
      case "INIT":
        return { ...state, loading: true };
      case "SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "FAIL":
        return { ...state, loading: false, data: null };
      default:
        return state;
    }
  };

  const typedReducer = (st: ApiState<T>, action: Action<T>) =>
    serviceReducer(st, action);

  const [state, dispatch] = useReducer(typedReducer, {
    loading: false,
    data: null,
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: "INIT" });
      try {
        const data = await func();
        console.log("success");
        if (!didCancel) {
          dispatch({ type: "SUCCESS", payload: data });
        }
      } catch (error) {
        console.log(error);
        if (!didCancel) {
          dispatch({ type: "FAIL" });
        }
      }
    };

    fetchData();
    return () => {
      didCancel = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return [state.data, state.loading];
}

export default useService;

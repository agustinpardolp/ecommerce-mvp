import { useState, useEffect, useCallback } from "react";
import { REQUEST_OK } from "../constants";

const executeAsyncRequest = async ({
  values,
  request,
  onPrefetch,
  onSuccess,
  onError,
}) => {
  onPrefetch();
  const response = await request(values);
  if (response.status === REQUEST_OK) {
    onSuccess(response.data);
  } else {
    onError({ problem: response.problem, errorData: response.data });
  }
};
//function to manage all request, success and errors
export const useRequest = (
  {
    request,
    payload,
    initialState = null,
    skip = false,
    withPostSuccess,
    withPostFailure,
  },
  dependencies
) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(
    () => {
      if (!skip) {
        sendRequest(payload);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  );
  const sendRequest = useCallback(
    (values) => {
      executeAsyncRequest({
        values,
        request,
        onPrefetch: () => {
          setLoading(true);
          setState(initialState);
          setError(null);
        },
        onSuccess: (data) => {
          setState(data);
          setLoading(false);
          withPostSuccess?.(data);
        },
        onError: (errorInfo) => {
          setError(() => errorInfo);
          setLoading(false);
          withPostFailure?.(errorInfo);
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialState, request]
  );

  return [state, loading, error, sendRequest];
};

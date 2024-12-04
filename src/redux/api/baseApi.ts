import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../features/store";
import { logOut, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (Headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      Headers.set("authorization", token);
    }

    return Headers;
  },
});

const baseQueryWithRefreshToken : BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType>= async (args, api, extraOption) : Promise<any> => {
  let result = await baseQuery(args, api, extraOption);

  if (result.error?.status === 401) {
    console.log("sending send refresh token");

    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    const user = (api.getState() as RootState).auth.user;

    if (data.data?.accessToken) {
      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );
      result = await baseQuery(args, api, extraOption);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

import axios, { BaseData } from "..";
import { Login } from "../types";

// 登录
export const sendLogin = (data : Login.Request) => {
  return axios.post<BaseData<string>>("/login/account", data, {
    header: { "Content-Type": "application/json" }
  })
}
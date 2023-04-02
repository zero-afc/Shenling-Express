import axios, { BaseData } from "..";
import { UserInfo } from "../types";

// 获取用户信息
export const getUserInfo = () => {
  return axios.get<BaseData<UserInfo.User>>("/users")
}

// 获取车辆信息
export const getCarInfo = () => {
  return axios.get<BaseData<UserInfo.Car>>("/users/truck")
}

// 获取任务数据
export const getTaskInfo = (data : { year : number, month : number }) => {
  return axios.get<BaseData<UserInfo.Task>>("/users/taskReport", data)
}
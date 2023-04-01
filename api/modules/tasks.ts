import axios, { BaseData } from "..";
import { Tasks } from "../types";

// 登录
export const getTaskList = (data : Tasks.TaskListReq) => {
  return axios.get<BaseData<Tasks.TaskListRes>>("/tasks/list", data)
}
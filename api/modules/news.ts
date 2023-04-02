import axios, { BaseData } from "..";
import { News } from "../types";

// 获取消息列表
export const getNewsList = (data : News.NewsListReq) => {
  return axios.get<BaseData<News.MessageListRes>>("/messages/page", data)
}
import { GraphTypeList } from "../../types/graphs";
import { PublicAxios } from "../index";

export const getGraphs = async (): Promise<GraphTypeList> => {
  const { data } = await PublicAxios.get("/graph/list");

  return data;
};

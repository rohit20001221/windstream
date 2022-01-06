import { useState, useEffect } from "react";
import { getGraphs } from "../api/graph/getGraphs";
import { GraphTypeList } from "../types/graphs";

interface UseGraphsHooks {
  graphs: GraphTypeList;
}

export const useGraphs = (): UseGraphsHooks => {
  const [graphs, setGraphs] = useState<GraphTypeList>([]);

  useEffect(() => {
    getGraphs().then((graphs) => {
      setGraphs(graphs);
    });
  }, []);

  return { graphs };
};

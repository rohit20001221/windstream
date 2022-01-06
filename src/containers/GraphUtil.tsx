import { GraphType, GraphTypes } from "../types/graphs";
import { BarGraph } from "./BarGraph";
import { LineGraph } from "./LineGraph";

export const renderGraph = (graph: GraphType) => {
  switch (graph.graph_type) {
    case GraphTypes.LINE:
      return (
        <LineGraph
          key={graph.id}
          title={graph.reading_type.reading_type}
          data={graph.reading_type.reading_value_set}
        />
      );
    case GraphTypes.BAR:
      return (
        <BarGraph
          key={graph.id}
          title={graph.reading_type.reading_type}
          data={graph.reading_type.reading_value_set}
        />
      );
  }

  return null;
};

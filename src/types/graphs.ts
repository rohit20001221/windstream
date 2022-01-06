export interface ReadingValue {
  timestamp: string;
  value: number;
}

export interface ReadingType {
  reading_type: string;
  reading_value_set: ReadingValue[];
}
export interface GraphType {
  reading_type: ReadingType;
  graph_type: string;
  id: number;
}

export type GraphTypeList = GraphType[];

export enum GraphTypes {
  LINE = "line",
  BAR = "bar",
}

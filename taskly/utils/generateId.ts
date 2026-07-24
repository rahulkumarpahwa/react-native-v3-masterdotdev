import { List } from "./types";

export const generateNewId = (data: List[]) => {
  let cur = data[data.length - 1]?.id;
  if(!cur){
    return 1;
  }
  return cur + 1;
};

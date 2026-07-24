import { List } from "../types";

export const deleteTask = (id: number, list: List[]): List[] => {
  return list.filter((item) => item.id !== id);
};

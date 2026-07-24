import { List } from "../types";

export const toggleTask = (id: number, list: List[]): List[] => {
  return list.map((item) =>
    item.id === id
      ? { ...item, status: !item.status }
      : item
  );
};


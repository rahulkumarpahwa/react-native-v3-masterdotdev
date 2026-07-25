import { List } from "../types";

export function orderShoppingList(shoppingList: List[]) {
  return shoppingList.sort((item1, item2) => {
    if (item1.completedAt && item2.completedAt) {
      return Number(item2?.completedAt) - Number(item1?.completedAt);
    }

    if (item1.completedAt && !item2.completedAt) {
      return 1;
    }

    if (!item1.completedAt && item2.completedAt) {
      return -1;
    }

    // if (!item1.completedAt && !item2.completedAt) {
    //   return item2.lastUpdatedTimestamp - item1.lastUpdatedTimestamp;
    // }

    return 0;
  });
}

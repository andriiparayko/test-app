import { MENU_ITEM_LIST } from "./constants";

export const getCurrentPath = (location) => {
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment && segment !== "/");

  const relevantSegments = pathSegments.slice(-2);

  const matchedMenuItem = MENU_ITEM_LIST.find((menuItem) =>
    relevantSegments.some((segment) => menuItem.path.includes(segment))
  );

  return matchedMenuItem ? matchedMenuItem.key : MENU_ITEM_LIST[0].key;
};

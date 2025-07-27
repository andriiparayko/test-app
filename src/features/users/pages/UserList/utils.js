import { getFullNameText } from "../../utils";

export const getFilteredUserList = (userList, search) => {
  if (!search) {
    return userList || [];
  }

  return (
    userList?.filter((user) => {
      const fullNameText = getFullNameText(user);
      const fullName = fullNameText.toLowerCase();

      return fullName.includes(search.toLowerCase());
    }) || []
  );
};

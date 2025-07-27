export const getFullNameText = (user) => {
  const { firstname, lastname } = user?.name || {};

  return `${firstname || ""} ${lastname || ""}`.trim();
};

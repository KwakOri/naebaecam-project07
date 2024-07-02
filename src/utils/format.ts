export const getFormatedId = (id: number) => {
  const strId = id.toString();
  switch (strId.length) {
    case 1:
      return "000" + strId;

    case 2:
      return "00" + strId;

    case 3:
      return "0" + strId;
  }
};

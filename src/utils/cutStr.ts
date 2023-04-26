export const cutString = (string: string, limit: number): string => {
  let limitStr = string;
  if (string.length > limit && limit > 0) {
    const sliceStr = string.slice(0, limit);
    limitStr = sliceStr + "...";
  }

  return limitStr;
};

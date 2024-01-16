const withSign = (int: number | string) => {
  if (int === " ") {
    return "...";
  }
  if (int < 0) {
    return `- ${-int}`;
  }
  return `+ ${int}`;
};

export default withSign;

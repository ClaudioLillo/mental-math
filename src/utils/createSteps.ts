const createSteps = (steps: number = 5, range: number = 10) => {
  console.log({ steps, range });
  const values = [];
  let stepsCounter = 0;
  let current = Math.floor(Math.random() * range);
  values.push(current);

  while (stepsCounter < steps) {
    const value = Math.floor(Math.random() * range);
    const sign = Math.floor(Math.random() * 2) || -1;
    const diff = value * sign;
    if (current + diff >= 0) {
      current = current + diff;
      values.push(diff);
    } else {
      current = current - diff;
      values.push(-diff);
    }
    stepsCounter++;
  }
  values.push(current);
  console.log(values.join(", ,").split(","));
  return values.join(", ,").split(",");
};

export default createSteps;

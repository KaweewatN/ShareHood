const updateCount = (
  type: "increment" | "decrement",
  item: number,
  count: number,
  setCount: (value: number) => void,
) => {
  if (item) {
    if (type === "increment" && count < Number(item)) {
      setCount(count + 1);
    } else if (type === "decrement" && count > 1) {
      setCount(count - 1);
    }
  }
};

export const incrementQuantity = (item: number, count: number, setCount: (value: number) => void) =>
  updateCount("increment", item, count, setCount);
export const decrementQuantity = (item: number, count: number, setCount: (value: number) => void) =>
  updateCount("decrement", item, count, setCount);

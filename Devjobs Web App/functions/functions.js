import raw from "./data";

const showAll = async () => {
  let data = raw;
  return data;
};

console.log(raw);

const showUnique = async (id) => {
  let data = await raw;
  let filter = await data.find((item) => {
    return item.id == id;
  });

  return filter;
};
export { showAll, showUnique };

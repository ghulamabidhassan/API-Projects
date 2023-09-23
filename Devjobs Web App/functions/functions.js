import raw from "./data";

const showAll = async () => {
  let data = raw;
  return data;
};

console.log(raw);

const showUnique = (id) => {
  let data = raw;
  let filter = data.find((item) => {
    return item.id == id;
  });
  return filter;
};
export { showAll, showUnique };

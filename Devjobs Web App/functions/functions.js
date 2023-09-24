import raw from "./data";

const showAll = async () => {
  let data = raw;
  return data;
};

const showSingle = async (id) => {
  let data = raw;
  let filter = data.map((item) => {
    return item.id == id;
  });
  return filter;
};

const showUnique = async (id) => {
  let data = await showSingle(id);
  return data;
};
export { showAll, showUnique };

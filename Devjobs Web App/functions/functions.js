import { raw } from "./data";

const showAll = async () => {
  let data = raw;
  return data;
};

const showUnique = async (id) => {
  let data = raw;
  let filter = data.filter((item) => {
    return item.id == id;
  });
  return filter;
};
export { showAll, showUnique };

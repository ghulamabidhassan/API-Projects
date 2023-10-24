import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [temp, setTemp] = useState([]);
  const [moviePage, setMoviePage] = useState();
  const [search, setSearch] = useState("avengers");
  const [loading, setLoading] = useState(true);

  console.log(loading);

  const showAll = async () => {
    setLoading(true);
    const result = await axios.get(
      "https://www.omdbapi.com/?&apikey=41f09284&s=avengers"
    );
    setTemp(result.data);
    setLoading(false);
  };

  const showUnique = async (id) => {
    setLoading(true);
    const result = await axios.get(
      `https://www.omdbapi.com/?&apikey=41f09284&i=${id}`
    );
    setMoviePage(result.data);
    setLoading(false);
  };

  const showSearch = async () => {
    setLoading(true);
    const result = await axios.get(
      `https://www.omdbapi.com/?&apikey=41f09284&s=${search}`
    );
    setTemp(result.data);
    setLoading(false);
  };

  const inputSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    showAll();
  }, []);

  useEffect(() => {
    if (!search) {
      showAll();
    }
  }, [search]);

  return (
    <AppContext.Provider
      value={{
        temp,
        inputSearch,
        showAll,
        showUnique,
        search,
        showSearch,
        moviePage,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppContext, AppProvider };

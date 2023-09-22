import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState();
  const [temp, setTemp] = useState();
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState();
  const [job, setJob] = useState();
  const [list, setList] = useState(6);
  const [hide, setHide] = useState(false);
  const [arr, setArr] = useState([]);
  // const [fields, setFields] = useState({
  //   title: "",
  //   location: "",
  //   type: "",
  // });
  const [search, setSearch] = useState();

  const darkMode = () => {
    setDark(!dark);
  };

  const searchInput = (e) => {
    let value = e.target.value;
    setSearch(value);

    let filterData = data.filter((item) => {
      return (
        item.position.toLowerCase().includes(search) ||
        item.contract.toLowerCase().includes(search) ||
        item.company.toLowerCase().includes(search) ||
        item.location.toLowerCase().includes(search)
      );
    });
    setList(filterData.length);
    setTemp(filterData);
  };

  const searchBtn = () => {
    if (!search) {
      return setTemp(data);
    }

    let filterData = data.filter((item) => {
      return (
        item.position.toLowerCase().includes(search) ||
        item.contract.toLowerCase().includes(search) ||
        item.company.toLowerCase().includes(search) ||
        item.location.toLowerCase().includes(search)
      );
    });
    setList(filterData.length);
    setTemp(filterData);
  };

  const ShowAll = async () => {
    setLoading(true);
    let url = `http://localhost:8888/.netlify/functions/server`;
    const {
      data: { data },
    } = await axios.get(url);
    setData(data);
    setTemp(data);
    setLoading(false);
  };

  const showUnique = async (id) => {
    setLoading(true);
    let url = `http://localhost:8888/.netlify/functions/server/job/${id}`;
    const {
      data: { data },
    } = await axios.get(url);
    setJob(data[0]);
    setLoading(false);
  };

  const loadMore = () => {
    setList((prev) => {
      return prev + 6;
    });
  };

  useEffect(() => {
    if (list < 6) {
      setHide(true);
    }
    if (list >= 6 && list <= 12) {
      setHide(false);
    } else {
      setHide(true);
    }
  }, [list]);

  useEffect(() => {
    ShowAll();
  }, []);

  return (
    <AppContext.Provider
      value={{
        dark,
        setDark,
        data,
        setData,
        loading,
        setLoading,
        job,
        setJob,
        showUnique,
        darkMode,
        loadMore,
        list,
        searchInput,
        hide,
        arr,
        setArr,
        searchBtn,
        temp,
        setTemp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

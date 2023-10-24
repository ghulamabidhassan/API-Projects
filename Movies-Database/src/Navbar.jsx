import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { inputSearch, showSearch, search } = useGlobalContext();

  return (
    <nav className="navbar">
      <input
        value={search}
        onChange={inputSearch}
        type="text"
        placeholder="Search for movie"
        className="search"
      />
      <button onClick={showSearch} className="btn">
        Search
      </button>
    </nav>
  );
};

export default Navbar;

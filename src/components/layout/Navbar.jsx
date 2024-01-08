import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const category = [

  {
    name: "American",
    url: "/category/american",
  },

  {
    name: "Indian",
    url: "/category/indian",
  },

  {
    name: "Italian",
    url: "/category/italian",
  },
  
  {
    name: "Mexican",
    url: "/category/mexican",
  },

  {
    name: "Spanish",
    url: "/category/spanish",
  },
  
  {
    name: "Thai",
    url: "/category/thai",
  },
  
];

function Navbar() {
  return (
    <>
      <header className="bg-teal-200 pt-6"> 
        <section className="container">
          <div className="flex items-center justify-between gap-4 py-4">
            <Link to="/">
              <img 
                            src="https://th.bing.com/th/id/OIG.cz2Fwoqa4ZWomzc6q0SH?pid=ImgGn"
                            className="w-80 h-64 rounded-full"
                            alt="Logo"
                        />
              
            </Link>

            <SearchBar />
          </div>
          <nav className="flex items-center gap-8">
            {category.map((data) => (
              <NavLink key={data.name} to={data.url}>
                <p className="py-4 font-bold border-b-2 border-b-transparent hover:border-b-black cursor-pointer duration-200">
                  {data.name}
                </p>
              </NavLink>
            ))}
          </nav>
        </section>
      </header>
    </>
  );
}

export default Navbar;

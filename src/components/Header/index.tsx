import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex items-center justify-evenly bg-gray-500  text-white ">
      <section className="w-[500px] my-7 text-lg font-lg">
        <Link to={"/"}>
          <h2>Rockr Blog</h2>
        </Link>
      </section>
      <section className="my-7 text-md font-md ">
        <Link to={"/"} className="mx-3">
          Posts
        </Link>
        <span className="mx-3">Contact</span>
      </section>
    </header>
  );
}

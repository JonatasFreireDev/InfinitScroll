import { Link, Outlet } from "react-router-dom";

import { ContactModal } from "../Modal/templates";
import { useModal } from "../../context";

export function Layout() {
  const { setContentModal } = useModal();

  return (
    <>
      <header className="flex items-center justify-evenly bg-gray-500 text-white lg:px-10">
        <section className="w-[500px] my-7 text-lg font-lg ">
          <Link to={"/"}>
            <h2>Rockr Blog</h2>
          </Link>
        </section>
        <section className="my-7 text-md font-md ">
          <Link to={"/"} className="mx-3">
            Posts
          </Link>
          <span
            onClick={() => setContentModal(<ContactModal />)}
            role="button"
            className="mx-3 cursor-pointer"
          >
            Contact
          </span>
        </section>
      </header>
      <Outlet />
    </>
  );
}

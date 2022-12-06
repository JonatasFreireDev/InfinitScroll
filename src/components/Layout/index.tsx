import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

import { ContactModal } from "../Modal/templates";
import { useModal } from "../../context";
import { Loading } from "../Loading";

export function Layout() {
  const { setContentModal } = useModal();

  return (
    <>
      <header className="flex items-center justify-evenly bg-gray-500 text-white sm:px-5 lg:px-10">
        <section className="w-[500px] sm:my-4 my-7 sm:text-md text-lg font-lg ">
          <Link to={"/"}>
            <h2>Infinity</h2>
          </Link>
        </section>
        <section className="sm:text-sm text-md font-md">
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
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}

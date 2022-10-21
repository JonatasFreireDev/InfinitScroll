import Arrow from "./Arrow";
import { Input } from "../../../Input";
import { useModal } from "../../../../context";

export function ContactModal() {
  const { closeModal } = useModal();

  return (
    <main className="flex flex-col justify-center items-center w-full p-10">
      <header className="m-7">
        <span className="text-orange-200 font-lg text-lg">Contact</span>
        <button
          className="absolute top-7 right-7 text-sm"
          onClick={() => closeModal()}
        >
          X
        </button>
      </header>
      <section className="w-full px-20">
        <form className="flex flex-col justify-center items-center">
          <Input type="text" label="Name" placeholder="Fill your full name" />
          <Input
            type="email"
            label="E-mail"
            placeholder="Fill a valid e-mail"
          />
          <Input type="text" label="Phone" placeholder="Fill your fone" />
          <Input type="" label="Post" placeholder="Hello..." />
          <button className="flex justify-around items-center w-56 h-16 p-4 m-9 bg-gray-500 text-white text-sm rounded transition-all ease-in hover:bg-gray-800">
            <Arrow />
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

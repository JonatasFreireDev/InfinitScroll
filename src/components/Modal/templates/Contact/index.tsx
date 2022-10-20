import { useModal } from "../../../../context";

export function ContactModal() {
  const { closeModal } = useModal();

  return (
    <main className="flex flex-col justify-center items-center w-full p-10">
      <header>
        <span className="text-orange-200 font-lg text-lg">Contact</span>
        <button
          className="absolute top-7 right-7 text-sm"
          onClick={() => closeModal()}
        >
          X
        </button>
      </header>
      <section>
        <form>
          <button className="w-56 h-16 p-4 bg-gray-500 text-white text-sm rounded">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

import Arrow from "./Arrow";
import { Input } from "../../../Input";
import { useForm } from "react-hook-form";
import { useModal } from "../../../../context";

interface IFormContact {
  name: string;
  email: string;
  phone: string;
  description: string;
}

export function ContactModal() {
  const { closeModal } = useModal();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IFormContact>();

  const submit = handleSubmit((data) => console.log(data));

  return (
    <main className="flex flex-col justify-center items-center w-full p-5">
      <header className="m-5">
        <span className="text-orange-200 font-lg text-lg">Contact</span>
        <button
          className="absolute top-7 right-7 text-sm"
          onClick={() => closeModal()}
        >
          X
        </button>
      </header>
      <section className="w-full px-20">
        <form
          onSubmit={submit}
          className="flex flex-col justify-center items-center"
        >
          <Input
            label="Name"
            placeholder="Fill your full name"
            {...register("name")}
          />
          <Input
            type="email"
            label="E-mail"
            placeholder="Fill a valid e-mail"
            {...register("email")}
          />
          <Input
            type="text"
            label="Phone"
            placeholder="Fill your fone"
            {...register("phone")}
          />
          <Input
            label="Post"
            placeholder="Hello..."
            {...register("description")}
          />
          <button
            disabled={isSubmitting}
            className="flex justify-around items-center w-56 h-16 p-4 m-3 bg-gray-500 text-white text-sm rounded transition-all ease-in hover:bg-gray-800 disabled:opacity-75"
          >
            <Arrow />
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

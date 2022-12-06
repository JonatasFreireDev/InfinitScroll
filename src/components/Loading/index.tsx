import { PuffLoader } from "react-spinners";

export function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-60">
      <PuffLoader />
    </div>
  );
}

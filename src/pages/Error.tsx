import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div id="error-page" className="flex h-screen justify-center items-center">
      <div className="flex items-center justify-center flex-col bg-white p-5 rounded-lg bg-opacity-70">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}

import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { ScrollToTop } from "../components";

interface IRequireAuthProps {
  children: ReactNode | null;
  isPrivate?: boolean;
}

export const RequireAuth = ({
  isPrivate = false,
  children,
}: IRequireAuthProps) => {
  const isLogin = false;

  return !isLogin && isPrivate ? (
    <Navigate to={"/"} />
  ) : (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

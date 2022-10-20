import { ModalProvider } from "./useModalContext";

export function AppProvider({ children }: any) {
  return <ModalProvider>{children}</ModalProvider>;
}

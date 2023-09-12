import { createContext, Dispatch, SetStateAction } from "react";

export const PageContext = createContext<{
  setRefresh: Dispatch<SetStateAction<boolean>>;
}>({ setRefresh: () => {} });
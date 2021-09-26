import { createContext } from "react";

export const ThemeContex = createContext("");
function Theme({ children }) {
  return (
    <>
      <ThemeContex.Provider value={"light"}>{children}</ThemeContex.Provider>
    </>
  );
}

export default Theme;

import { useContext } from "react";
import { ThemeContex } from "./ThemeContex";
function Todos() {
  const Theme = useContext(ThemeContex);
  return (
    <>
      <h1>LoginPage</h1>
    </>
  );
}
export default Todos;

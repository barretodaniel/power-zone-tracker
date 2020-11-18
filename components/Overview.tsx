import { useContext } from "react";
import { AppStateContext } from "../pages/_stateManager";

export default function Overview() {
  const { state } = useContext(AppStateContext);

  return <pre></pre>;
}

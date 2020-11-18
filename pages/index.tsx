import Head from "next/head";
import { useReducer, createContext, Dispatch } from "react";
import DropZone from "../components/DropZone";
import {
  AppStateContext,
  CurrentState,
  initialState,
  reducer,
} from "./_stateManager";

function getAppState(state: CurrentState) {
  switch (state) {
    case CurrentState.Initial:
    default:
      return <DropZone />;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Head>
        <title>Power Zone Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-2 h-screen">
        <AppStateContext.Provider value={{ state, dispatch }}>
          {getAppState(state.currentState)}
        </AppStateContext.Provider>
      </main>
    </div>
  );
}

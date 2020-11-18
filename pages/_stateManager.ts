import { ParseResult } from "papaparse";
import { createContext, Dispatch } from "react";

export enum CurrentState {
  Initial,
  Overview,
}

export enum ActionTypes {
  ChangeState,
  GoToOverview,
}

export type Actions =
  | { type: ActionTypes.ChangeState; payload: CurrentState }
  | {
      type: ActionTypes.GoToOverview;
    };

export type AppState = {
  currentState: CurrentState;
};

export const initialState: AppState = {
  currentState: CurrentState.Initial,
};

export const AppStateContext = createContext<{
  state: AppState;
  dispatch: Dispatch<Actions>;
}>({ state: initialState, dispatch: () => {} });

export function reducer(state: AppState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ChangeState:
      return { ...state, currentState: action.payload };
    case ActionTypes.GoToOverview:
      return {
        ...state,
        currentState: CurrentState.Overview,
      };
    default:
      return state;
  }
}

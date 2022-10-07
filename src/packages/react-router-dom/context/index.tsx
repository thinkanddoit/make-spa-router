import React, { useReducer, useContext, createContext, Dispatch } from "react";

type State = {
  path: string;
};

type Action = { type: "CHANGE_PATH"; path: string };

type RouterDispatch = Dispatch<Action>;

const RouterStateContext = createContext<State | null>(null);
const RouterDispatchContext = createContext<RouterDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "CHANGE_PATH":
      return {
        ...state,
        path: action.path,
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function RouterProvider({
  children,
  basePath,
}: {
  children: React.ReactNode;
  basePath: string;
}) {
  const [state, dispatch] = useReducer(reducer, {
    path: basePath,
  });

  return (
    <RouterStateContext.Provider value={state}>
      <RouterDispatchContext.Provider value={dispatch}>
        {children}
      </RouterDispatchContext.Provider>
    </RouterStateContext.Provider>
  );
}

export function useRouterState() {
  const state = useContext(RouterStateContext);
  if (!state) throw new Error("Cannot find RouterProvider");
  return state;
}

export function useRouterDispatch() {
  const dispatch = useContext(RouterDispatchContext);
  if (!dispatch) throw new Error("Cannot find RouterProvider");
  return dispatch;
}

import * as Redux from "redux";
import * as StateActions from "./state.actions";

let mainStore: Redux.Store;

export function getState(): any {
  return mainStore.getState();
}

export function dispatch(action: any): void {
  mainStore.dispatch(action);
}

export function initialiseState(): void {
    mainStore = Redux.createStore(mainReducer);
}

export function subscribe(listener: () => void): Redux.Unsubscribe {
  return mainStore.subscribe(listener);
}

let defaultState: any = {
   "window_count": 0
};

export var mainReducer: Redux.Reducer = (state: any = defaultState, action: any) => {
    let newState: any = {
      ...state
    };
    switch(action.type) {
      case StateActions.NewWindow: {
        newState.window_count++;
        return newState;
      }
      case StateActions.CloseWindow: {
        newState.window_count--;
        return newState;
      }
      default:
      return newState;
    }
  };
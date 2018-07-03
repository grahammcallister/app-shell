import * as Redux from "redux";
export declare function getState(): any;
export declare function dispatch(action: any): void;
export declare function initialiseState(): void;
export declare function subscribe(listener: () => void): Redux.Unsubscribe;
export declare var mainReducer: Redux.Reducer;

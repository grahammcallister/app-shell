"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redux = require("redux");
const StateActions = require("./state.actions");
let mainStore;
function getState() {
    return mainStore.getState();
}
exports.getState = getState;
function dispatch(action) {
    mainStore.dispatch(action);
}
exports.dispatch = dispatch;
function initialiseState() {
    mainStore = Redux.createStore(exports.mainReducer);
}
exports.initialiseState = initialiseState;
function subscribe(listener) {
    return mainStore.subscribe(listener);
}
exports.subscribe = subscribe;
let defaultState = {
    "window_count": 0
};
exports.mainReducer = (state = defaultState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
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
//# sourceMappingURL=state.js.map
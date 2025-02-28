import { createReducer, on } from "@ngrx/store";
import { SetChosenProgram } from "./app.action";
import { initialAppState } from "./app.state";


const _appStateReducer = createReducer(
    initialAppState,

    on(SetChosenProgram, (state, action) => {
        return {
            ...state,
            chosenProgram: action.chosenProgram
        }
    })
)


export function appStateReducer(state, action) {
    return _appStateReducer(state, action)
}
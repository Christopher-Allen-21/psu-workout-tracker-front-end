import { createFeatureSelector, createSelector } from "@ngrx/store"

import { AppState } from "./app.state"


const getAppState = createFeatureSelector<AppState>('appState')

export const getChosenProgram = createSelector(
    getAppState,
    (state) => {
        console.log(state)
        return state.chosenProgram
    }
)
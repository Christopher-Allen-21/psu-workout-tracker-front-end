import { createFeatureSelector, createSelector } from "@ngrx/store"

import { AppState } from "./app.state"


const getAppState = createFeatureSelector<AppState>('appState')

export const selectChosenProgram = createSelector(
    getAppState,
    (state) => {
        console.log(state)
        return state.chosenProgram
    }
)
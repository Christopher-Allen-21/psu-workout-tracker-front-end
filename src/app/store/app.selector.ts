import { createFeatureSelector, createSelector } from "@ngrx/store"

import { AppState } from "./app.state"


const selectAppState = createFeatureSelector<AppState>('appState')

export const selectChosenProgram = createSelector(
    selectAppState,
    (state) => {
        return state.chosenProgram
    }
)

export const selectChosenExercise = createSelector(
    selectAppState,
    (state) => {
        return state.chosenExercise
    }
)
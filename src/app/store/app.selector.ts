import { createFeatureSelector, createSelector } from "@ngrx/store"

import { AppState } from "./app.state"


const selectAppState = createFeatureSelector<AppState>('appState')


export const selectAllPrograms = createSelector(
    selectAppState,
    (state) => {
        return state.allPrograms
    }
)

export const selectWorkoutHistoryForCurrentUser = createSelector(
    selectAppState,
    (state) => {
        return state.workoutHistoryForCurrentUser
    }
)

export const selectChosenProgram = createSelector(
    selectAppState,
    (state) => {
        return state.chosenProgram
    }
)

export const selectCurrentUser = createSelector(
    selectAppState,
    (state) => {
        return state.currentUser
    }
)

export const selectChosenWorkout = createSelector(
    selectAppState,
    (state) => {
        return state.chosenWorkout
    }
)

export const selectChosenExercise = createSelector(
    selectAppState,
    (state) => {
        return state.chosenExercise
    }
)

export const selectCompletedExercises = createSelector(
    selectAppState,
    (state) => {
        return state.completedExercises
    }
)

export const selectStartWorkoutStats = createSelector(
    selectAppState,
    (state) => {
        return {
            repsCompleted: state.repsCompleted,
            setsCompleted: state.setsCompleted,
            topProgram: state.topProgram,
            bottomProgram: state.bottomProgram,
        }
    }
)
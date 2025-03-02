import { createReducer, on } from "@ngrx/store";
import { 
    SetChosenWorkoutAndExercise, 
    SetChosenProgram,
    AddCompletedExercise,
    ClearCompletedExercises,
    SetSetsAndReps,
    SetTopAndBottomPrograms
 } from "./app.action";
import { initialAppState } from "./app.state";


const _appStateReducer = createReducer(
    initialAppState,

    on(SetChosenProgram, (state, action) => {
        return {
            ...state,
            chosenProgram: action.chosenProgram
        }
    }),
    on(SetChosenWorkoutAndExercise, (state, action) => {
        return {
            ...state,
            chosenWorkout: action.chosenWorkout,
            chosenExercise: action.chosenExercise
        }
    }),
    on(AddCompletedExercise, (state, action) => {
        return {
            ...state,
            completedExercises: [...state.completedExercises, action.completedExercise],
        }
    }),
    on(ClearCompletedExercises, (state, action) => {
        return {
            ...state,
            completedExercises: [],
        }
    }),
    on(SetSetsAndReps, (state, action) => {
        return {
            ...state,
            repsCompleted: action.repsCompleted,
            setsCompleted: action.setsCompleted
        }
    }),
    on(SetTopAndBottomPrograms, (state, action) => {
        return {
            ...state,
            topProgram: action.topProgram,
            bottomProgram: action.bottomProgram
        }
    })
)


export function appStateReducer(state, action) {
    return _appStateReducer(state, action)
}
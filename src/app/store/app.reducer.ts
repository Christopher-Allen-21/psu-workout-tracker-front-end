import { createReducer, on } from "@ngrx/store";
import { 
    SetChosenWorkoutAndExercise, 
    SetChosenProgram,
    AddCompletedExercise,
    ClearCompletedExercises
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
    })
)


export function appStateReducer(state, action) {
    return _appStateReducer(state, action)
}
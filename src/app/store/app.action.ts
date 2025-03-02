import { createAction, props } from "@ngrx/store";
import { Program } from "../models/program";
import { Workout } from "../models/workout";
import { Exercise } from "../models/exercise";

export enum ActionType {
    SetChosenProgram = 'SetChosenProgram',
    SetChosenWorkoutAndExercise = 'SetChosenWorkoutAndExercise',
    AddCompletedExercise = 'AddCompletedExercise',
    ClearCompletedExercises = 'ClearCompletedExercises'
}

export const SetChosenProgram = createAction(
    ActionType.SetChosenProgram,
    props<{ chosenProgram: Program }>()
)

export const SetChosenWorkoutAndExercise = createAction(
    ActionType.SetChosenWorkoutAndExercise,
    props<{ 
        chosenWorkout: Workout,
        chosenExercise: Exercise
    }>()
)

export const AddCompletedExercise = createAction(
    ActionType.AddCompletedExercise,
    props<{ 
        completedExercise: Exercise
    }>()
)

export const ClearCompletedExercises = createAction(
    ActionType.ClearCompletedExercises
)
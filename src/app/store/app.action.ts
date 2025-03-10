import { createAction, props } from "@ngrx/store";
import { Program } from "../models/program";
import { Workout } from "../models/workout";
import { Exercise } from "../models/exercise";
import { WorkoutHistory } from "../models/workoutHistory";

export enum ActionType {
    SetAllPrograms = 'SetAllPrograms',
    SetWorkoutHistoryForCurrentUser = 'SetWorkoutHistoryForCurrentUser',
    SetChosenProgram = 'SetChosenProgram',
    SetChosenWorkoutAndExercise = 'SetChosenWorkoutAndExercise',
    AddCompletedExercise = 'AddCompletedExercise',
    ClearCompletedExercises = 'ClearCompletedExercises',
    SetSetsAndReps = 'SetSetsAndReps',
    SetTopAndBottomPrograms = 'SetTopAndBottomPrograms'
}

export const SetAllPrograms = createAction(
    ActionType.SetAllPrograms,
    props<{ allPrograms: Program[] }>()
)

export const SetWorkoutHistoryForCurrentUser = createAction(
    ActionType.SetWorkoutHistoryForCurrentUser,
    props<{ workoutHistoryForCurrentUser: WorkoutHistory[] }>()
)

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

export const SetSetsAndReps = createAction(
    ActionType.SetSetsAndReps,
    props<{ 
        repsCompleted: number,
        setsCompleted: number,
    }>()
)

export const SetTopAndBottomPrograms = createAction(
    ActionType.SetTopAndBottomPrograms,
    props<{ 
        topProgram: Program
        bottomProgram: Program 
    }>()
)
import { createAction, props } from "@ngrx/store";
import { Program } from "../models/program";
import { Exercise } from "../models/exercise";

export enum ActionType {
    SetChosenProgram = 'SetChosenProgram',
    SetChosenExercise = 'SetChosenExercise'
}

export const SetChosenProgram = createAction(
    ActionType.SetChosenProgram,
    props<{ chosenProgram: Program }>()
)

export const SetChosenExercise = createAction(
    ActionType.SetChosenExercise,
    props<{ chosenExercise: Exercise }>()
)
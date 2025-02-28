import { createAction, props } from "@ngrx/store";
import { Program } from "../models/program";

export enum ActionType {
    SetChosenProgram = 'SetChosenProgram'
}

export const SetChosenProgram = createAction(
    ActionType.SetChosenProgram,
    props<{ chosenProgram: Program }>()
)
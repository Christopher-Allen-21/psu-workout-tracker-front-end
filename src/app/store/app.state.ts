import { Exercise } from "../models/exercise"
import { Program } from "../models/program"

export interface AppState {
    chosenProgram: Program
    chosenExercise: Exercise
}

export const initialAppState: AppState = {
    chosenProgram: null,
    chosenExercise: null,
}
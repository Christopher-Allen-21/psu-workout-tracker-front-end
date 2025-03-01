import { Exercise } from "../models/exercise"
import { Program } from "../models/program"
import { Workout } from "../models/workout"

export interface AppState {
    chosenProgram: Program
    chosenWorkout: Workout
    chosenExercise: Exercise
}

export const initialAppState: AppState = {
    chosenProgram: null,
    chosenWorkout: null,
    chosenExercise: null,
}
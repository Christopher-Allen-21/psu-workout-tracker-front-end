import { Exercise } from "../models/exercise"
import { Program } from "../models/program"
import { User } from "../models/user"
import { Workout } from "../models/workout"
import { WorkoutHistory } from "../models/workoutHistory"

export interface AppState {
    allPrograms: Program[]
    workoutHistoryForCurrentUser: WorkoutHistory[]

    currentUser: User
    chosenProgram: Program
    chosenWorkout: Workout
    chosenExercise: Exercise
    completedExercises: Exercise[]
    repsCompleted: number
    setsCompleted: number
    topProgram: Program
    bottomProgram: Program 
}

export const initialAppState: AppState = {
    allPrograms: [],
    workoutHistoryForCurrentUser: [],
    currentUser: {
        "pk": "0",
        "sk": "0",
        "birthDate": "03/22/1996",
        "email": "callen7908@yahoo.com",
        "firstName": "Chris",
        "height": 69,
        "lastName": "Allen",
        "weight": 180
    },
    chosenProgram: null,
    chosenWorkout: null,
    chosenExercise: null,
    completedExercises: [],
    repsCompleted: 0,
    setsCompleted: 0,
    topProgram: null,
    bottomProgram: null 
}
import { Exercise } from "./exercise"
import { RepSchema } from "./repSchema"

export interface Workout {
    exercise: Exercise
    repSchema: RepSchema[]
}
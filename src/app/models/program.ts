import { Workout } from "./workout"

export interface Program {
    pk: string
    sk: string
    name: string
    description: string
    timesCompleted: number
    customOrPremade: string
    bodyArea: string[]
    workouts: Workout[]
    musclesUsed?: string[]
}
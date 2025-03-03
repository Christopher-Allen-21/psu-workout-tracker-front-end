export interface WorkoutHistory {
    pk: string
    sk: string
    dateOfWorkout:  string
    exercises: string[]
    feeling: string
    program: string
    userId: string
    duration: number
}
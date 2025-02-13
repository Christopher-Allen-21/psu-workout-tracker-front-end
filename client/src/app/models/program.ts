export interface Program {
    _id: string
    name: string
    description: string
    bodyArea: string[]
    workouts: string[]
    timesCompleted?: number
    musclesUsed?: string[]
}
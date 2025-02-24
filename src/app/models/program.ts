export interface Program {
    _id: string
    name: string
    description: string
    timesCompleted: number
    customOrPremade: string
    bodyArea: string[]
    workouts: string[]
    musclesUsed?: string[]
}
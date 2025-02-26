export interface Program {
    pk: string
    sk: string
    name: string
    description: string
    timesCompleted: number
    customOrPremade: string
    bodyArea: string[]
    exercises: string[]
    musclesUsed?: string[]
}
export interface Exercise {
    pk: string
    sk: string
    name: string,
    bodyArea: string,
    description: string,
    machinesUsed: string[],
    musclesUsed: string[],
}
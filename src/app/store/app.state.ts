import { Program } from "../models/program"

export interface AppState {
    chosenProgram: Program
}

export const initialAppState: AppState = {
    chosenProgram: null
}
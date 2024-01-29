import { posGlobalThunkActions } from "./global.thunk-builder"
import { globalActions } from "./global.reducer"

export const posGlobalActions = {
    ...posGlobalThunkActions,
    ...globalActions
}
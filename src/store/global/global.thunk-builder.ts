import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { PosGlobalState } from './global-state';
import { globalInitThunkBuilder, globalInitThunk } from './global-thunk/globalInitThunkBuilder';

export const posGlobalThunkActionsBuilder = (builder: ActionReducerMapBuilder<PosGlobalState>) => {
    globalInitThunkBuilder(builder)
}

export const posGlobalThunkActions = {
    globalInitThunk,
};

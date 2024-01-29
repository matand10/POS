import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { PosGlobalState } from '../global-state';


export const globalInitThunk = createAsyncThunk(
    'global/globalInitThunk',
    async (): Promise<boolean> => {
        return Promise.resolve(true)
    }
);

export const globalInitThunkBuilder = (builder: ActionReducerMapBuilder<PosGlobalState>) => {
    builder
        .addCase(globalInitThunk.fulfilled, (state, action: PayloadAction<boolean>) => {
            if (!action.payload) return
            state.loaderCount = 1
            state.showCalculator = true
            state.error = 'ERROR!'
        })
};

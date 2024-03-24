import { createSlice } from '@reduxjs/toolkit';
import { ProjectDetailsSchema } from '../types/projectDetails';

const initialState: ProjectDetailsSchema = {
};

export const projectDetailsSlice = createSlice({
    name: 'projectDetails',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchProjectById.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(fetchProjectById.fulfilled, (
    //             state,
    //             action: PayloadAction<Project>,
    //         ) => {
    //             state.isLoading = false;
    //             state.project = action.payload;
    //         })
    //         .addCase(fetchProjectById.rejected, (
    //             state,
    //             action,
    //         ) => {
    //             state.isLoading = false;
    //             state.error = action.payload as string;
    //         });
    // },
});

export const { actions: projectDetailsActions } = projectDetailsSlice;
export const { reducer: projectDetailsReducer } = projectDetailsSlice;

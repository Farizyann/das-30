import { createAppSlice } from "@/lib/createAppSlice";
import { IComment } from "@/type/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { create } from "domain";
import { createCommentApi, deleteCommentApi, getCommentByPostIdApi } from "./commentApi";

interface IState {
    comments: IComment[]
}
const initialState: IState = {
    comments: []
}
export const commentSlice = createAppSlice({
    name: 'comment',
    initialState,
    reducers: (create) => ({
        getCommentByPostIdData: create.asyncThunk(
            async (id: number) => {
                return await getCommentByPostIdApi(id)
            }, {
            fulfilled: (state, action) => {
                state.comments = action.payload
            }
        }
        ),
        createCommentData: create.asyncThunk(
            async (obj: IComment) => {
                return await createCommentApi(obj)
            }, {
            fulfilled: (state, action) => {
                state.comments = action.payload
            }
        }
        ),
        deleteCommentData: create.asyncThunk(
            async (id: number) => {
                return await deleteCommentApi(id)
            }
        )
    }), selectors: {
        selectComments: (app) => app.comments
    }
})
export const { getCommentByPostIdData, createCommentData, deleteCommentData } = commentSlice.actions
export const {selectComments} = commentSlice.selectors
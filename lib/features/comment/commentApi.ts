import { IComment } from "@/type/type"
import axios from "axios"

export const getCommentByPostIdApi = async (id: number) => {
    const { data } = await axios.get('https://dummyjson.com/comments/post/' + id)
    return data.comments
}

export const createCommentApi = async (obj: IComment) => {
    const { data } = await axios.post('https://dummyjson.com/comments/add', obj)
    return data
}

export const deleteCommentApi = async (id: number) => {
    const { data } = await axios.delete('https://dummyjson.com/comments/' + id)
    return data
}
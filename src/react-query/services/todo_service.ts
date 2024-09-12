"use client"
import { Routes } from "@/constants/routes";
import axiosInstance from "../axios";
import { Todos } from "../models/todos";

class TodoService {
    getTodos = async (): Promise<Todos[]> => {
        const { data } = await axiosInstance.get<Todos[]>(
            Routes.API.TODOS.GET
        );
        return data;
    };
}

export default new TodoService();

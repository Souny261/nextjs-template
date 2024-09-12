"use client"
import { useQuery } from "@tanstack/react-query";
import { Todos } from "../models/todos";
import { Routes } from "@/constants/routes";
import todoService from "../services/todo_service";

export const useFetchTodos = () => {
    const { data, isError, isLoading, refetch } = useQuery<Todos[], Error>(
        {
            queryKey: [Routes.API.TODOS.GET],
            queryFn: () => todoService.getTodos(),
        }
    );
    return {
        todos: data || [],
        todosIsError: isError,
        todosIsLoading: isLoading,
        refetch
    };
};


"use client"
import { useFetchTodos } from '@/react-query/hooks/todo_hook'
import React from 'react'

export default function page() {
    const { todos, todosIsError, todosIsLoading } = useFetchTodos()
    return (
        <div>
            {
                todos.map((todo) => <div key={todo.id}>{todo.title}</div>)
            }
        </div>
    )
}

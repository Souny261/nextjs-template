"use client"
import { ModeToggle } from "@/components/theme/ModeToggle";
import { Button } from "@/components/ui/button";
import { useFetchTodos } from "@/react-query/hooks/todo_hook";
import { decrement, increment, reset } from "@/redux/slices/counter";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function Home() {
  const counterReducer = useAppSelector((state) => state.counterReducer)
  const dispatch: AppDispatch = useDispatch()


  const { todos, todosIsError, todosIsLoading } = useFetchTodos()

  
  return (
    <div className="flex flex-row justify-start items-start">
      <div className="flex-1 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center">
          <ModeToggle />
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="text-3xl sm:text-5xl">
            {counterReducer.count}
          </div>
          <div className="flex flex-row space-x-4">
            <Button variant="secondary" onClick={() => dispatch(increment())}>Increment</Button>
            <Button variant="secondary" onClick={() => dispatch(decrement())}>Decrement</Button>
            <Button variant="destructive" onClick={() => dispatch(reset(1000))}>Reset</Button>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
      <div className="flex-1 flex-col p-8 pb-20 gap-16 sm:p-20">
        <div>
          React Query
        </div>
        <div>
          {
            todosIsLoading ? "Loading..." : todosIsError ? "Error" : todos.map((todo) => <div key={todo.id}>{todo.id}-{todo.title}</div>)
          }
        </div>
      </div>
    </div>
  );
}

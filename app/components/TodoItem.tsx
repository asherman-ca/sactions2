'use client'
import { useTransition } from 'react'

type TodoItemProps = {
	id: string
	title: string
	complete: boolean
	toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
	let [isPending, startTransition] = useTransition()

	return (
		<li className='flex gap-1 items-center'>
			<input
				id={id}
				type='checkbox'
				className='cursor-pointer peer'
				defaultChecked={complete}
				onChange={(e) =>
					startTransition(() => toggleTodo(id, e.target.checked))
				}
				disabled={isPending}
			/>
			<label
				htmlFor={id}
				className={`cursor-pointer peer-checked:line-through peer-checked:text-slate-500 ${
					isPending && '!text-red-500'
				}`}
			>
				{title}
			</label>
		</li>
	)
}

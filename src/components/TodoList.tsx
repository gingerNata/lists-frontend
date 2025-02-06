import { API_URL } from '@/config';

export default function TodoList({ todos, onTodoUpdate }) {
    const toggleTodo = async (id, completed) => {
        await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: !completed }),
        });
        onTodoUpdate();
    };

    const deleteTodo = async (id) => {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        onTodoUpdate();
    };

    return (
        <ul className="space-y-4">
            {todos.map((todo) => (
                <li
                    key={todo._id}
                    className="flex items-center justify-between p-4 bg-white rounded shadow"
                >
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo._id, todo.completed)}
                            className="mr-4"
                        />
                        <span className={todo.completed ? 'line-through' : ''}>
              {todo.text}
            </span>
                    </div>
                    <button
                        onClick={() => deleteTodo(todo._id)}
                        className="text-red-500"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
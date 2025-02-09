import { API_URL } from '@/config';
import { useState } from 'react';

interface TodoFormProps {
    onTodoAdd: () => void;
}

export default function TodoForm({ onTodoAdd }: TodoFormProps) {
    const [text, setText] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text.trim()) return;

        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        setText('');
        onTodoAdd();
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
                className="w-full p-2 border rounded"
            />
        </form>
    );
}
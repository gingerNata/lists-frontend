'use client';
import { API_URL } from '@/config';
import { useState, useEffect } from 'react';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTodos(data);
  };

  return (
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Todo List</h1>
        <TodoForm onTodoAdd={fetchTodos} />
        <TodoList todos={todos} onTodoUpdate={fetchTodos} />
      </main>
  );
}
import React, { useState } from 'react';

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a Todo App', completed: true },
  { id: 3, text: 'Test with Jest', completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '0 1rem' }} className="fade-in-up">
      <div className="card">
        <h2 style={{ 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '2rem'
        }}>
          ✅ Todo List
        </h2>
        <form onSubmit={addTodo} data-testid="add-todo-form" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new todo..."
                data-testid="todo-input"
                style={{ 
                  width: '100%',
                  padding: '0.875rem 1rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <button 
              type="submit"
              style={{
                padding: '0.875rem 1.5rem',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                whiteSpace: 'nowrap'
              }}
            >
              ➕ Add
            </button>
          </div>
        </form>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          {todos.map((todo) => (
            <div
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              style={{
                padding: '1rem 1.5rem',
                background: todo.completed 
                  ? 'rgba(16, 185, 129, 0.1)' 
                  : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                border: todo.completed 
                  ? '2px solid rgba(16, 185, 129, 0.3)' 
                  : '2px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                textDecoration: todo.completed ? 'line-through' : 'none',
                opacity: todo.completed ? 0.7 : 1
              }}
              data-testid={`todo-item-${todo.id}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ 
                  fontSize: '1.5rem',
                  filter: todo.completed ? 'grayscale(1)' : 'none'
                }}>
                  {todo.completed ? '✅' : '⭕'}
                </span>
                <span style={{ 
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  color: todo.completed ? '#6b7280' : '#1e293b'
                }}>
                  {todo.text}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(todo.id);
                }}
                data-testid={`delete-btn-${todo.id}`}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  fontSize: '0.875rem',
                  borderRadius: '8px'
                }}
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>
        
        {todos.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem',
            color: '#6b7280',
            fontSize: '1.1rem'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
            No todos yet. Add one above to get started!
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;

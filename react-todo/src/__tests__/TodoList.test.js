import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders todo list with initial todos', () => {
    render(<TodoList />);
    
    // Check if the title is rendered
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a todo app')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    
    // Check if the form elements are present
    expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('adds a new todo when form is submitted', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');
    
    // Type a new todo
    await user.type(input, 'New todo item');
    await user.click(addButton);
    
    // Check if the new todo is added
    expect(screen.getByText('New todo item')).toBeInTheDocument();
    
    // Check if the input is cleared after submission
    expect(input.value).toBe('');
  });

  test('does not add empty todos', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const addButton = screen.getByText('Add Todo');
    const initialTodos = screen.getAllByText('Delete');
    
    // Try to add empty todo
    await user.click(addButton);
    
    // Check that no new todo was added
    const todosAfter = screen.getAllByText('Delete');
    expect(todosAfter).toHaveLength(initialTodos.length);
  });

  test('does not add todos with only whitespace', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');
    const initialTodos = screen.getAllByText('Delete');
    
    // Try to add whitespace-only todo
    await user.type(input, '   ');
    await user.click(addButton);
    
    // Check that no new todo was added
    const todosAfter = screen.getAllByText('Delete');
    expect(todosAfter).toHaveLength(initialTodos.length);
  });

  test('toggles todo completion status when clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    
    // Initially, the todo should not be completed (no line-through)
    expect(todoText).toHaveStyle('text-decoration: none');
    
    // Click to toggle completion
    await user.click(todoText);
    
    // Now it should be completed (line-through)
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back
    await user.click(todoText);
    
    // Should be back to not completed
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Find the "Learn React" todo and its delete button
    const todoText = screen.getByText('Learn React');
    const deleteButtons = screen.getAllByText('Delete');
    
    // Click the first delete button (for "Learn React")
    await user.click(deleteButtons[0]);
    
    // Check that the todo is no longer in the document
    expect(todoText).not.toBeInTheDocument();
    
    // Check that there's one less delete button
    const remainingDeleteButtons = screen.getAllByText('Delete');
    expect(remainingDeleteButtons).toHaveLength(deleteButtons.length - 1);
  });

  test('handles multiple operations correctly', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');
    
    // Add a new todo
    await user.type(input, 'Test todo');
    await user.click(addButton);
    
    // Verify it was added
    const newTodo = screen.getByText('Test todo');
    expect(newTodo).toBeInTheDocument();
    
    // Toggle its completion
    await user.click(newTodo);
    expect(newTodo).toHaveStyle('text-decoration: line-through');
    
    // Delete it
    const deleteButtons = screen.getAllByText('Delete');
    const newTodoDeleteButton = deleteButtons[deleteButtons.length - 1]; // Last one should be our new todo
    await user.click(newTodoDeleteButton);
    
    // Verify it was deleted
    expect(newTodo).not.toBeInTheDocument();
  });

  test('form submission works with Enter key', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo');
    
    // Type and press Enter
    await user.type(input, 'Todo via Enter key{enter}');
    
    // Check if the new todo is added
    expect(screen.getByText('Todo via Enter key')).toBeInTheDocument();
    
    // Check if the input is cleared
    expect(input.value).toBe('');
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a project')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByTestId('todo-input');
  const addButton = screen.getByTestId('add-button');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  const item = screen.getByText('Learn React');
  expect(item).toHaveStyle('text-decoration: none');

  fireEvent.click(item);
  expect(item).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const item = screen.getByText('Learn React');
  const deleteButton = screen.getAllByText('Delete')[0];

  fireEvent.click(deleteButton);
  expect(item).not.toBeInTheDocument();
});
import { Request, Response } from 'express';
import { Connection, Repository } from 'typeorm';
import Todo from './entity/Todo';

let repository: Repository<Todo>;

export const initializeTodos = (connection: Connection) => {
  repository = connection.getRepository(Todo);
};

export const createTodo = async (_: Request, res: Response) => {
  const todo = new Todo();
  todo.name = 'A Todo';
  await repository.save(todo);
  res.send(todo);
};

export const readTodos = async (_: Request, res: Response) => {
  const todos = await repository.find();
  res.send(todos);
};

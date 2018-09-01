import { Request, Response } from 'express';
import { getConnection, Repository } from 'typeorm';
import Todo from './entity/Todo';

let repository: Repository<Todo>;

const initialize = () => {
  const connection = getConnection();
  repository = connection.getRepository(Todo);
};

export const createTodo = async (_: Request, res: Response) => {
  if (repository === undefined) {
    initialize();
  }
  const todo = new Todo();
  todo.name = 'A Todo';
  await repository.save(todo);
  res.send(todo);
};

export const readTodos = async (_: Request, res: Response) => {
  if (repository === undefined) {
    initialize();
  }
  const todos = await repository.find();
  res.send(todos);
};

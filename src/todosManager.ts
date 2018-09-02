import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Todo from './entity/Todo';
import TodoRepository from './TodoRepository';

let repository: TodoRepository;

const initialize = () => {
  const connection = getConnection();
  repository = connection.getCustomRepository(TodoRepository);
};

export const createTodo = async (_: Request, res: Response, next: NextFunction) => {
  if (repository === undefined) {
    initialize();
  }
  try {
    const todo = new Todo();
    todo.name = 'A Todo';
    const errors = await validate(todo);
    if (errors.length > 0) {
      throw 400;
    }
    await repository.save(todo);
    res.send(todo);
  } catch (error) {
    if (error === 400) {
      res.status(400).send('Bad Request');
    } else {
      next(error);
    }
  }
};

export const readTodos = async (_: Request, res: Response, next: NextFunction) => {
  if (repository === undefined) {
    initialize();
  }
  try {
    const todos = await repository.find();
    res.send(todos);
  } catch (error) {
    next(error);
  }
};

export const readTodosIncomplete = async (_: Request, res: Response, next: NextFunction) => {
  if (repository === undefined) {
    initialize();
  }
  try {
    const todos = await repository.find({ isComplete: false });
    res.send(todos);
  } catch (error) {
    next(error);
  }
};

import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import Todo from './entity/Todo';

createConnection().then(async (connection) => {
  const app = express();
  app.get('/create', async (req, res) => {
    const todo = new Todo();
    todo.name = 'A Todo';
    await connection.manager.save(todo);
    res.send(todo);
  });
  app.get('/read', async (req, res) => {
    const todos = await connection.manager.find(Todo);
    res.send(todos);
  });
  app.listen(3000, () => console.log('Example app listening on port 3000!'));
}).catch((error) => console.log(error));

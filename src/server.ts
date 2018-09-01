import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { createTodo, readTodos } from './todosManager';

createConnection().then(async () => {
  const app = express();
  app.get('/create', createTodo);
  app.get('/read', readTodos);
  app.listen(3000, () => console.log('Example app listening on port 3000!'));
}).catch((error) => console.log(error));

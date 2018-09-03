import { NextFunction, Request, Response } from 'express';
import { getConnection, Repository } from 'typeorm';
import Author from './entity/Author';

let initialized = false;
let authorRepository: Repository<Author>;

const initialize = () => {
  initialized = true;
  const connection = getConnection();
  authorRepository = connection.getRepository(Author);
};

export const readAuthors = async (_: Request, res: Response, next: NextFunction) => {
  if (!initialized) {
    initialize();
  }
  try {
    const authors = await authorRepository.find({ relations: ['todos'] });
    res.send(authors);
  } catch (error) {
    next(error);
  }
};

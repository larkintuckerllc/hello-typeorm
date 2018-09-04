import { NextFunction, Request, Response } from 'express';
import { getConnection, Repository } from 'typeorm';
import Category from './entity/Category';

let initialized = false;
let categoryRepository: Repository<Category>;

const initialize = () => {
  initialized = true;
  const connection = getConnection();
  categoryRepository = connection.getRepository(Category);
};

export const readCategories = async (_: Request, res: Response, next: NextFunction) => {
  if (!initialized) {
    initialize();
  }
  try {
    const categories = await categoryRepository.find({ relations: ['todos'] });
    res.send(categories);
  } catch (error) {
    next(error);
  }
};

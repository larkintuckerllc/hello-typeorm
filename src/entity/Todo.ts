import { Validate } from 'class-validator';
import { Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';
import CapitalLetterValidator from '../CapitalLetterValidator';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @Validate(CapitalLetterValidator)
  public name: string = '';

  @Index()
  @Column()
  public isComplete: boolean = false;
}

export default Todo;

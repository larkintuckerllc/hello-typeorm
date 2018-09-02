import { Validate } from 'class-validator';
import { Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';
import CapitalLetterValidator from '../CapitalLetterValidator';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Validate(CapitalLetterValidator)
  public name: string = '';

  @Index()
  @Column()
  public isComplete: boolean = false;

  @Column('character varying', {
    name: 'name',
    nullable: false,
  })
  public persistedName: string = '';
}

export default Todo;

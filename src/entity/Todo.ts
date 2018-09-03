import { Validate } from 'class-validator';
import { AfterInsert, Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import CapitalLetterValidator from '../CapitalLetterValidator';
import TodoMetadata from './TodoMetadata';

@Entity()
export default class Todo {
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

  @OneToOne(() => TodoMetadata)
  @JoinColumn()
  public metadata: TodoMetadata;

  @AfterInsert()
  public handleAfterInsert() {
    console.log(`INSERTED TODO WITH ID: ${this.id}`);
  }
}

import {Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Todo from './Todo';

@Entity()
export default class Category {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @ManyToMany(() => Todo, (todo) => todo.categories)
    public todos: Todo[];
}

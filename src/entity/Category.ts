import {Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Category {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;
}

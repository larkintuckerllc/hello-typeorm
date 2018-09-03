import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class TodoMetadata {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public comment: string = '';
}

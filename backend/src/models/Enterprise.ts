import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('enterprises')
export default class Enterprise {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    fantasy_name: string;

    @Column()
    uf: string;

    @Column()
    cnpj: string;
}
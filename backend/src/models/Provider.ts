import { Entity, Column, PrimaryGeneratedColumn, Unique, Index } from 'typeorm';

@Entity('providers')
@Unique(['email', 'cpf_cnpj'])
export default class Provider {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    @Index()
    email: string;

    @Column()
    @Index()
    cpf_cnpj: string;
}
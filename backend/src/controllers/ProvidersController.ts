import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Provider from '../models/Provider';

export default {
    async index(request: Request, response: Response){
        const providerRepository = getRepository(Provider);

        const providers = await providerRepository.find();

        return response.json(providers);
    },

    async show(request: Request, response: Response){
        const { cpf_cnpj, name } = request.query;

        const providerRepository = getRepository(Provider);

        const providers = await providerRepository.find({
            where: [
                { name: name },
                { cpf_cnpj: cpf_cnpj }
              ]
        });

        return response.json(providers);
    },

    async create(request: Request, response: Response) {
        const {
            name,
            email,
            cpf_cnpj
        } = request.body;
    
        const providerRepository = getRepository(Provider);

        const providers = await providerRepository.find({
            where: [
                { email: email },
                { cpf_cnpj: cpf_cnpj }
              ]
        });

        if(providers.length > 0){
            return response.status(400).json({
                message: 'Já existe um Fornecedor com os dados informados'
            });
        }
    
        const provider = providerRepository.create({
            name,
            email,
            cpf_cnpj
        });
    
        await providerRepository.save(provider);
    
        return response.status(201).json({
            message: "Fornecedor cadastrado!",
            empresa: provider
        });
    }
}
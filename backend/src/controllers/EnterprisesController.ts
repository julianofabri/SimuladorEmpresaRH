import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Enterprise from '../models/Enterprise';

export default {
    async index(request: Request, response: Response){
        const enterpriseRepository = getRepository(Enterprise);

        const enterprises = await enterpriseRepository.find();

        return response.json(enterprises);
    },

    async create(request: Request, response: Response) {
        const {
            fantasy_name,
            uf,
            cnpj
        } = request.body;
    
        const enterpriseRepository = getRepository(Enterprise);
    
        const enterprise = enterpriseRepository.create({
            fantasy_name,
            uf,
            cnpj
        });
    
        await enterpriseRepository.save(enterprise);
    
        return response.status(201).json({
            message: "Empresa cadastrada!",
            empresa: enterprise
        });
    }
}
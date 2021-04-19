import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}
    execute({ name, description }: IRequest): void {
        const specificationsAlreadyExists = this.specificationsRepository.findByName(
            name,
        );
        if (specificationsAlreadyExists) {
            throw new Error('Especificação já existente');
        }
        this.specificationsRepository.create({ name, description });
    }
}

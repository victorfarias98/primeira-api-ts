import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    execute({ name, description }: IRequest): void {
        const categoriesAlreadyExists = this.categoriesRepository.findByName(name);
        if (categoriesAlreadyExists) {
            throw new Error('Categoria já existente');
        }
        this.categoriesRepository.create({ name, description });
    }
}

import { Specification } from '../../model/Specification';
import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
    private categories: Specification[];
    private static INSTANCE: SpecificationsRepository;
    private constructor() {
        this.categories = [];
    }
    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE;
    }
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
        this.categories.push(specification);
    }
    list(): Specification[] {
        return this.categories;
    }
    findByName(name: string): Specification {
        const specification = this.categories.find(
            specification => specification.name === name,
        );
        return specification;
    }
}

export { SpecificationsRepository };

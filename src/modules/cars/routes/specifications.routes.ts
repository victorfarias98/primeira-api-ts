import { Router } from 'express';

import { createSpecificationController } from '../useCases/createSpecification';
import { listSpecificationController } from '../useCases/listSpecification';

const specificationsRoutes = Router();
specificationsRoutes.post('/', (request, response) => {
    return createSpecificationController.handle(request, response);
});
specificationsRoutes.get('/', (request, response) => {
    return listSpecificationController.handle(request, response);
});
export { specificationsRoutes };

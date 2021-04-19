import { Router } from 'express';

import { createCategoryController } from '../useCases/createCategory';
import { listCategoryController } from '../useCases/listCategory';

const categoriesRoutes = Router();
categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response);
});
categoriesRoutes.get('/', (request, response) => {
    return listCategoryController.handle(request, response);
});
export { categoriesRoutes };

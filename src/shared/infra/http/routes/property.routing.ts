import { Router } from "express";

import { CreatePorpetyController } from "@modules/property/useCases/CreateProperty/CreatePorpetyController";
import { DeletePorpetyController } from "@modules/property/useCases/DeleteProperty/DeletePorpetyController";
import { FindOnePorpetyController } from "@modules/property/useCases/FindOneProperty/FindOnePorpetyController";
import { FindOnePropertyUseCase } from "@modules/property/useCases/FindOneProperty/FindOnePorpetyUseCase";
import { ListPorpetyController } from "@modules/property/useCases/ListProperty/ListPorpetyController";
import { UpdatePropertyController } from "@modules/property/useCases/UpdateProperty/UpdatePorpetyController";

const createPropertyController = new CreatePorpetyController();
const deletePropertyController = new DeletePorpetyController();
const listPropertyController = new ListPorpetyController();
const updatePropertyController = new UpdatePropertyController();
const findOnePorpetyController = new FindOnePorpetyController();
const propertyRoutes = Router();

propertyRoutes.post("/", createPropertyController.handle);
propertyRoutes.delete("/:id", deletePropertyController.handle);
propertyRoutes.get("/", listPropertyController.handle);
propertyRoutes.get("/:id", findOnePorpetyController.handle);
propertyRoutes.put("/:id", updatePropertyController.handle);
export { propertyRoutes };

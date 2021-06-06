import { Router } from "express";

import { checksPropertyExists } from "@shared/infra/http/middlewares/CheckAccountExists";
import { authenticateRouting } from "@shared/infra/http/routes/authenticate.routing";
import { propertyRoutes } from "@shared/infra/http/routes/property.routing";
import { userRoutes } from "@shared/infra/http/routes/user.routing";

const router = Router();
router.use("/user", userRoutes);
router.use("/property", checksPropertyExists, propertyRoutes);
router.use(authenticateRouting);

export { router };

import { Router } from "express";

import { authenticateRouting } from "@shared/infra/http/routes/authenticate.routing";
import { propertyRoutes } from "@shared/infra/http/routes/property.routing";
import { userRoutes } from "@shared/infra/http/routes/user.routing";

const router = Router();

router.use("/user", userRoutes);
router.use("/property", propertyRoutes);
router.use(authenticateRouting);

export { router };

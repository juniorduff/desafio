import { Router } from "express";

import { gameRoutes } from "@shared/infra/http/routes/game.routing";

const router = Router();
router.use("/game", gameRoutes);

export { router };

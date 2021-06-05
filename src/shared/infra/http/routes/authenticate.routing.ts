import { Router } from "express";

import { AuthenticateUserController } from "@modules/AuthenticateUser/AuthenticateUserController";

const authenticateRouting = Router();
const authenticateUserController = new AuthenticateUserController();

authenticateRouting.post("/sessions", authenticateUserController.handle);
export { authenticateRouting };

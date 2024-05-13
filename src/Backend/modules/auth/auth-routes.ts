import express from "express";
import * as AuthController from "./auth-controller";
import authenticateToken from "./auth-middleware";

const router = express.Router();

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
router.get("/user/:userId", AuthController.getUser);
router.put(
  "/ignore-donation/:donationId",
  authenticateToken,
  AuthController.ignoreDonation
);

export default router;

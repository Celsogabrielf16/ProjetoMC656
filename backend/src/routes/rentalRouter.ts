import e, { Router } from "express";
import { RentalController } from "../controllers/rentalController";

const router = Router()

router.get("/user", (req, res) => {
    RentalController.getRentalByUserId(req, res);
});

export default router;
import e, { Router } from "express";
import { RentalController } from "../controllers/rentalController";

const router = Router()

router.get("/user", (req, res) => {
    RentalController.getRentalByUserId(req, res);
});

router.post("/", (req, res) => {
    RentalController.createRental(req, res);
});

router.patch("/:id", (req, res) => {
    RentalController.updateRental(req, res);
});

export default router;
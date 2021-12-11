import express from "express";
import itemsController from "../controllers/items";
const router = express.Router();

router.get("/items", itemsController.getItems);
router.get("/items/:id", itemsController.getItem);

export = router;

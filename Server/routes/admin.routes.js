import { Router } from "express";
import { getAdmin, createAdmin, updateAdmin, deleteAdmin, getAdmins } from "../controllers/admin.controllers.js";

const router = Router()

router.post("/",  createAdmin);
router.get("/", getAdmins);
router.get("/:id", getAdmin);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

export default router
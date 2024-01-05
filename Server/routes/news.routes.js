import { Router } from "express";
import { createNews, getNewsImage, getNews } from "../controllers/news.controllers.js";

const router = Router()

router.post("/", createNews)
router.get('/img', getNewsImage);
router.get('/', getNews);

export default router
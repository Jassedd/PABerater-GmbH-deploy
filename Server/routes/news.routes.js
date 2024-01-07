import { Router } from "express";
import { createNews, getNewsImage, getNews, updateNews } from "../controllers/news.controllers.js";

const router = Router()

router.post("/", createNews)
router.get('/img', getNewsImage);
router.get('/', getNews);
router.put('/:id', updateNews)

export default router
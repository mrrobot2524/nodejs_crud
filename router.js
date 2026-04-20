import { Router } from "express";
import Post from "./Post.js";
import PostController from "./PostController.js";

const router = new Router();
/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Создать пост
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               author:
 *                 type: string
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               picture:
 *                 type: file
 *                 format: binary
 *     responses:
 *       201:
 *         description: Создано
 */
router.post("/posts", PostController.create);

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Получить все посты
 *     responses:
 *       200:
 *         description: Успешно
 */
router.get("/posts", PostController.getAll);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Получить пост по ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID поста
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Успешно
 *       404:
 *         description: Пост не найден
 */
router.get("/posts/:id", PostController.getOne);

/**
 * @swagger
 * /api/posts/:
 *   put:
 *     summary: Обновить пост по ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - author
 *               - title
 *               - content
 *             properties:
 *               author:
 *                 type: string
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Пост обновлён
 *       404:
 *         description: Пост не найден
 */
router.put("/posts", PostController.update);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Удалить пост по ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID поста
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Пост удален
 *       404:
 *         description: Пост не найден
 */
router.delete("/posts/:id", PostController.delete);

export default router;

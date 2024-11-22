import express from 'express';
import multer from 'multer';
import { listarPosts, postarNovoPost, uploadImagem } from '../controller/postsController.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
//windows

const upload = multer({dest: './uploads', storage})
//linux ou mac

const routes = (app) => {
    // Permite que o servidor receba dados no formato JSON
    app.use(express.json());
    // Rota GET para a URL '/posts'
    app.get('/posts', listarPosts);
    app.post('/posts', postarNovoPost);
    app.post('/upload',upload.single('imagem'), uploadImagem);
}

export default routes;
import express from 'express';
import routes from './src/config/routes/postsRoutes.js';

// Cria uma instância do servidor Express
const app = express();
routes(app);

// Serve arquivos estáticos da pasta 'uploads'
app.use('/uploads', express.static('uploads'));

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log('Servidor escutando...');
});



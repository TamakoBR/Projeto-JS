import conectarAoBanco from '../dbConfig.js';
// Conecta ao banco de dados utilizando a string de conexão fornecida como varíavel de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    // Obtém o banco de dados 'imersao-instaback' da conexão
    const db = conexao.db('imersao-instaback');
    // Obtém a coleção 'posts' do banco de dados
    const colecao = db.collection('posts');
    // Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
}
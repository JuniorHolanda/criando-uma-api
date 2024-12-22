import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutor = await autor.find({});
            res.status(200).json(listaAutor);
        } catch {
            res.status(500).json({ message: `${erro.message} - falha a requisição` });
        }
    };

    static async listarAutorPorId (req, res) {
        try {
            const id = (req.params.id)
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch {
            res.status(500).json({ message: `${erro.message} - falha a requisição do autor` });
        }
    };

    static async cadastrarAutor (req, res) {
        try {
            const novoautor = await autor.create(req.body);
            res.status(201).json({ message: "criado com sucesso", autor: novoautor});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` });
        }
    }

    static async atualizarAutor (req, res) {
        try {
            const id = (req.params.id)
            await autor.findByIdAndUpdate (id, req.body);
            res.status(200).json({message: 'autor atualizado'});
        } catch {
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    };

    static async excluirAutor (req, res) {
        try {
            const id = (req.params.id)
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: 'autor excluído com sucesso'});
        } catch {
            res.status(500).json({ message: `${erro.message} - falha na exclusão`});
        }
    };
    

};

export default AutorController;
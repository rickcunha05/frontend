import { useEffect, useState } from 'react';
import { ApiService } from '../../services/ApiService';
import { Professor } from './../../@types/Professor';

export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([

    ]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null)
    const [mensagem, setMensagem] = useState('');
    useEffect(() => {
        ApiService.get('/professores').then((resposta) => {
            setListaProfessores(resposta.data)
        })
    }, []),
    useEffect(() => {
        limparFormulario();        
    }, [professorSelecionado])

    function marcarAula() {
        if (professorSelecionado !== null) {
            if (validarDadosAula()) {
                ApiService.post('/professores/' + professorSelecionado.id + 'aulas', {
                    nome, email
                }).then(() => {
                    setProfessorSelecionado(null);
                    setMensagem('cadastrado com sucesso');
                }).catch((error) => {
                    setMensagem(error.response?.data.message)
                });
            } else{
                setMensagem('Preencha os dados corretamente');
            }

        }

    }

    function validarDadosAula() {
        return nome.length > 0 && email.length;
    }
    function limparFormulario(){
        setNome('')
        setEmail('')
    }

    return {
        listaProfessores,
        nome,
        setNome,
        email,
        setEmail,
        professorSelecionado,
        setProfessorSelecionado,
        marcarAula,
        mensagem,
        setMensagem
    }
}
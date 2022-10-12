import { useState } from 'react';
import { Professor } from './../../@types/Professor';

export function useIndex(){
    const[listaProfessores, setListaProfessores] = useState<Professor[]>([
        {
            id:1,
            nome: "Henrique",
            foto:"https://github.com/rickcunha05.png",
            descricao: "Descrição do professor 1",
            valor_hora: 100
        },
        {
            id:2,
            nome: "professor1",
            foto:"https://github.com/rickcunha05.png",
            descricao: "Descrição do professor 2",
            valor_hora: 200
        },
        {
            id:3,
            nome: "professor2",
            foto:"https://github.com/rickcunha05.png",
            descricao: "Descrição do professor 3",
            valor_hora: 500
        },
        {
            id:4,
            nome: "professor3",
            foto:"https://github.com/rickcunha05.png",
            descricao: "Descrição do professor 4",
            valor_hora: 400
        },
    ]);
    
    return {
        listaProfessores
    }
}
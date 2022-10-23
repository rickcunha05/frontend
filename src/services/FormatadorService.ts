import { text } from "stream/consumers"

export const FormatadorService = {
    ValorMonetario(valor: number): string {
        return valor.toLocaleString('pr-BR', 
        { minimumFractionDigits: 2,
             style: 'currency',
              currency: 'BRL'
        })
    },
    LimitarTexto(texto: string, tamanhoMaximo: number): string {
        if(texto.length < tamanhoMaximo){
            return texto;
        }
        return texto.slice(0, tamanhoMaximo) + '...';
    }
    
}
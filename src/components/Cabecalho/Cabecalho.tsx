import { CabecalhoContainer, Logo } from "./Cabecalho.style";

const Cabecalho = () => {
    return(
        <CabecalhoContainer>
           <>
            <Logo src="/imagens/myteacher.png"/>
           </>
           <p>Encontre o Professor Perfeito</p>
        </CabecalhoContainer>
    )
}

export default Cabecalho;
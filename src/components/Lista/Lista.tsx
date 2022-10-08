import {
	Descricao,
	Foto,
	Informacoes,
	ItemList,
	ListaStyled,
	ListaVazia,
	Nome,
	Valor,
} from "./Lista.style";
import { Button } from "@mui/material";
import { Professor } from "../../@types/Professor";

interface ListaProps {
	professores: Professor[];
}

const Lista = (props: ListaProps) => {
	return (
		<div>
			{props.professores.length > 0 ? (
				<ListaStyled>
					{props.professores.map((professor) => (						
						<ItemList key={professor.id}>
							<Foto src={professor.foto} />
							<Informacoes>
								<Nome>{professor.nome}</Nome>
								<Valor>{professor.valor_hora.toLocaleString('pr-BR',{minimumFractionDigits: 2, style:'currency', currency:'BRL'})}por hora</Valor>
								<Descricao>{professor.descricao}</Descricao>
								<Button sx={{ width: "70%" }}>Marcar Aula</Button>
							</Informacoes>
						</ItemList>
					))}
				</ListaStyled>
			) : (
				<ListaVazia> Nehum item foi encontrado </ListaVazia>
			)}
		</div>
	);
};

export default Lista;

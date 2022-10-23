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
import { FormatadorService } from "../../services/FormatadorService";

interface ListaProps {
	professores: Professor[],
	onSelect: (professor: Professor) => void
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
								<Valor>{FormatadorService.ValorMonetario(professor.valor_hora)} por hora</Valor>
								<Descricao>{FormatadorService.LimitarTexto(professor.descricao, 200)}</Descricao>
								<Button onClick={() => props.onSelect(professor)} sx={{ width: "70%" }}>Marcar aula com {professor.nome}</Button>
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

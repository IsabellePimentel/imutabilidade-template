import { EstilizacaoDoCarro } from "./styledCarro";
import { Button } from "./styledGaragem";


function Carro(props) {
  return (
    <div>
      <EstilizacaoDoCarro>
        <h2>Volksvagem</h2>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>adicionadoPor: {props.adicionadoPor}</li>
        <Button onClick={props.trocaCarro}>Mudar o carro</Button>
      </EstilizacaoDoCarro>
    </div>
  );
}

export default Carro;

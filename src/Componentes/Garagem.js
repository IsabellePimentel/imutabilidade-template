import Carro from "./Carro";
import { Button, EstilizacaoDaGaragem } from "./styledGaragem";
import {useState} from "react";

function Garagem(props) {

  const [automovel,setAutomovel] = useState({cor:"vermelho",ano:2002,flex:"sim"})
  const [automovel1,setAutomovel1] = useState({cor:"preto",ano:2002,flex:"sim"})
  const [automovel2,setAutomovel2] = useState({cor:"rosa",ano:2002,flex:"sim"})
  const [automovel3,setAutomovel3] = useState({cor:"rosa",ano:2002,flex:"sim"})
  const mudaNomeGaragem = () =>{
    props.setNome("Ammal")
    console.log("Clicou",props.nome)
  }
  const trocaCarro1 = () =>{
    const novoCarro = {
      ...automovel,
      ano: 2022
      // cor: "Lilás",
      // ano:2022,
      // flex:"não"
    }
    setAutomovel(novoCarro)
  }
  const trocaCarro2 = () =>{
    const novoCarro2 = {
      ...automovel1,
      cor:"azul"
    }
    setAutomovel1(novoCarro2)
  }
  const trocaCarro3 = () =>{
    const novoCarro3 = {
      ...automovel2,
      cor:"branco"
    }
    setAutomovel2(novoCarro3)
  }
  const trocaCarro4 = () =>{
    const novoCarro4 = {
      ...automovel3,
      cor:"lilas"
    }
    setAutomovel3(novoCarro4)
  }
  return (
    <EstilizacaoDaGaragem>
      <h1>Garagem da {props.nome}</h1>
      <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
      <Button onClick={mudaNomeGaragem}>Muda Nome</Button>
      <Carro
        adicionadoPor={props.nome}
        cor={automovel.cor}
        ano={automovel.ano}
        flex={automovel.flex}
        trocaCarro={trocaCarro1}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel1.cor}
        ano={automovel1.ano}
        flex={automovel.flex}
        trocaCarro={trocaCarro2}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel2.cor}
        ano={automovel2.ano}
        flex={automovel2.flex}
        trocaCarro={trocaCarro3}
      />
      <Carro 
      adicionadoPor={props.nome}
       cor={automovel3.cor} 
       ano={automovel3.ano} 
       flex={automovel3.flex}
       trocaCarro={trocaCarro4} />
    </EstilizacaoDaGaragem>
  );
}

export default Garagem;

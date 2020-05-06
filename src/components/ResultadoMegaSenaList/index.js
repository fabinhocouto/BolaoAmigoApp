import React from 'react';

import {Container, ValorText} from './styles';

export default function ResultadoMegaSenaList({ data }){
  return(
    <Container>
      <ValorText>Concurso Número: {data.numConcurso}</ValorText>
      <ValorText>Data do Sorteio: {data.dataSorteio}</ValorText>
      <ValorText>Números Sorteados: {data.numerosSorteados}</ValorText>
    </Container>
  )
}
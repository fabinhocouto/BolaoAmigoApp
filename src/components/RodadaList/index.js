import React from 'react';

import {Container, StatusText, ValorText, ValorExibeOuNaoText} from './styles';

export default function RodadaList({ data }){
  return(
    <Container>
      <StatusText status={data.status}>{data.status}</StatusText>
      <ValorText>Data Início: {data.dataInicio}</ValorText>
      <ValorExibeOuNaoText valor={data.dataFim}>Data Fim: {data.dataFim}</ValorExibeOuNaoText>
      <ValorText>Valor Aposta: R${data.valorAposta}</ValorText>
      <ValorText>Máximo Participantes: {data.maxParticipante}</ValorText>
      <ValorText>Número Participantes: {data.numParticipante}</ValorText>
    </Container>
  )
}
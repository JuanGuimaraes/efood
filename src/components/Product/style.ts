import styled from 'styled-components'
import { cores } from '../../style'
import { TagContainer } from '../Tag/style'

export const Card = styled.div`
  border: solid 1px ${cores.laranja};
  margin-bottom: 48px;
  position: relative;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nota {
      display: flex;
      margin-right: 8px;
    }
  }

  ${TagContainer} {
    position: absolute;
    right: 0;
    margin: 16px 16px;
    background-color: ${cores.laranja};
    color: ${cores.salmao};
  }
`
export const Titulo = styled.h3`
  font-size: 18px;
  color: ${cores.laranja};
  line-height: 21px;
  margin: 8px 7px;
  font-weight: bold;
`
export const Nota = styled.h3`
  color: ${cores.laranja};
  margin-right: 8px;
`

export const Texto = styled.p`
  color: ${cores.laranja};
  font-size: 14px;
  line-height: 22px;
  margin: 16px 8px;
`

export const Botao = styled.button`
  font-size: 14px;
  align-items: center;
  font-weight: bold;
  padding: 4px 6px;
  background-color: ${cores.laranja};
  color: ${cores.salmao};
  border: none;
  margin-left: 8px;
  margin-bottom: 8px;
`

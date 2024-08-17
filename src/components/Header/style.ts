import styled from 'styled-components'
import { cores } from '../../style'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  margin-bottom: 80px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const Texto = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
  color: ${cores.laranja};
  padding-top: 139px;
  padding-bottom: 40px;
  text-align: center;
`

export const Logo = styled.img`
  padding: 64px 0 0;
  max-width: 100%;
  heigth: auto;
  width: 125px;
`

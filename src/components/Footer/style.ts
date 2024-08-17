import styled from 'styled-components'
import { cores } from '../../style'

export const Imagem = styled.footer`
  width: 100%;
  height: 384px;
  margin-top: 24px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Logo = styled.img`
  margin: 40px 32px;
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`

export const SocialMediaItem = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`
export const Texto = styled.p`
  color: ${cores.laranja};
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
`

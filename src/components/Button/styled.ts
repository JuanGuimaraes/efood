import styled from 'styled-components'
import { cores } from '../../style'
import { Props } from '.'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button<Props>`
  font-size: 14px;
  align-items: center;
  font-weight: bold;
  padding: 4px 6px;
  background-color: ${cores.laranja};
  color: ${cores.salmao};
  border: none;
  margin-left: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
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

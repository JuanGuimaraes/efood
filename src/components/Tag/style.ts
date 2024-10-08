import styled from 'styled-components'
import { cores } from '../../style'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.salmao};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 4px')};
  display: inline-block;
`

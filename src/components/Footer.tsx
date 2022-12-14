import styled from 'styled-components'

import { FOOTER_HEIGHT } from '../constants'

export function Footer() {
  return (
    <Container>
      <CopyrightText>Copyright © 2022 🌾 Šid Caffe ☕, Serbia.</CopyrightText>
      <CopyrightText>All Rights Reserved.</CopyrightText>
      <CopyrightText>by Bejzik</CopyrightText>
    </Container>
  )
}

const Container = styled.footer`
  height: ${FOOTER_HEIGHT};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 10px;
`

const CopyrightText = styled.p`
  line-height: 16px;
  font-size: 12px;
  color: #ffffff80;
  text-align: center;
`

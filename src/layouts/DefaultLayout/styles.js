import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`

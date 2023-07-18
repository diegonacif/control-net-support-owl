import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  height: 5rem;
  width: 100vw;
  padding: 0 0.75rem;
  background: ${(props) => props.theme['blue-500']};
`

export const Navigation = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
  }
`

export const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 99999px;
  background: ${(props) => props.theme['gray-500']};
  margin-left: auto;
`
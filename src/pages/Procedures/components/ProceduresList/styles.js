import { styled } from "styled-components";

export const ProceduresContainer = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  width: 100vw;
  padding: 0 0.75rem;
  background: ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-900']};
`

export const ProceduresListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
`

export const ProceduresItem = styled.div`
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  padding: 0.75rem;
  color: ${(props) => props.theme['gray-100']}; 
  background: ${(props) => props.theme['blue-500']};
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.1);
  }
`
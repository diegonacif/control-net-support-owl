import { styled } from "styled-components";

export const ProcedureContainer = styled.div`
  background: ${(props) => props.theme['gray-500']};  
  color: ${(props) => props.theme['gray-900']};
  padding: 0.75rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
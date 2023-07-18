import { useContext } from "react"
import { ProceduresContext } from "../../../../contexts/ProceduresContext"
import { ProceduresContainer, ProceduresItem, ProceduresListWrapper } from "./styles"
import { useNavigate } from "react-router-dom"

export function ProceduresList() {
  const { proceduresList } = useContext(ProceduresContext)
  const navigate = useNavigate(); 

  return (
    <ProceduresContainer>
      <ProceduresListWrapper>
        {
          proceduresList.map(procedure => (
            <ProceduresItem key={procedure.id}>
              <h4 onClick={() => navigate(`/procedures/procedure/${procedure.id}`)}>{procedure.title}</h4>
            </ProceduresItem>
          ))
        }
      </ProceduresListWrapper>
    </ProceduresContainer>
  )
}

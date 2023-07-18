import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProceduresContext } from "../../../../contexts/ProceduresContext";
import { ProcedureContainer } from "./styles";

export function Procedure() {
  const { proceduresList } = useContext(ProceduresContext)
  const { id } = useParams()
  const [procedure, setProcedure] = useState({
    title: "",
    category: "",
    createdAt: "",
    description: "",
  })

  useEffect(() => {
    setProcedure(proceduresList.find(procedure => procedure.id === id))
  }, [proceduresList, id])

  return (
    <ProcedureContainer>
      <h4>Título: {procedure?.title}</h4>
      <span><strong>Categoria:</strong> {procedure?.category}</span>
      <span><strong>Criado em:</strong> {procedure?.createdAt}</span>
      <p>{procedure?.description}</p>
    </ProcedureContainer>
  )
}

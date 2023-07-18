import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export const ProceduresContext = createContext();

export function ProceduresProvider({ children }) {
  const [proceduresList, setProceduresList] = useState([]);

  console.log(proceduresList)

  async function fetchProcedures(query) {
    const response = await api.get('/procedures', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setProceduresList(response.data)
  }

  useEffect(() => {
    fetchProcedures()
  }, [])


  return (
    <ProceduresContext.Provider
      value={{
        proceduresList,
      }}
    >
      {children}
    </ProceduresContext.Provider>
  )
}
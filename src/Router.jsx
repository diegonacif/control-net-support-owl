import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Procedures } from "./pages/Procedures";
import { Home } from "./pages/Home";
import { Scripts } from "./pages/Scripts";
import { Procedure } from "./pages/Procedures/components/Procedure";
import { ProceduresList } from "./pages/Procedures/components/ProceduresList";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/procedures" element={<Procedures />}>
          <Route index element={<ProceduresList />}/>
          <Route path="procedure/:id" element={<Procedure />}/>
        </Route>
        <Route path="/scripts" element={<Scripts />} />
      </Route>
    </Routes>
  )
}
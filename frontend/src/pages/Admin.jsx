import TechForm from "@components/form/TechForm";
import ProjectForm from "@components/form/ProjectForm";
import { useLocation } from "react-router-dom";

function Admin() {
  const { pathname } = useLocation();
  return (
    <section className="p-8">
      {pathname === "/admin/project" && <ProjectForm />}
      {pathname === "/admin/tech" && <TechForm />}
    </section>
  );
}

export default Admin;

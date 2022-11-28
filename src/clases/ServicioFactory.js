import { Contenedor, Repositorio, Voluntariado, Charlas  } from "./Servicio";
class ServicioFactory {
  createServicio(type) {
    if (type === 1) {
      return new Contenedor();
    }

    if (type === 2) {
      return new Repositorio();
    }

    if (type === 4) {
      return new Voluntariado();
    }

    if (type === 6) {
      return new Charlas();
    }

    console.log("Servicio error not found");
  }
}

export default ServicioFactory;
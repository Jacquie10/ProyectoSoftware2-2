class Servicio {
    constructor(type) {
    
      this._type = type;
    }
  
    get type() {
      return this._type;
    }

    description() {
      return `yo quiero el servicio:  ${this.type}  `;
    }
  }
  
  class Contenedor extends Servicio {
    constructor() {
      super(1, "Contenedor");
    }
    fooFunction() {
      //....
    }
  }
  
  class Repositorio extends Servicio {
    constructor() {
      super(2, "Repositorio");
    }
    fooFunction() {
     
    }
  }
  
  class Voluntariado extends Servicio {
    constructor() {
      super(4, "Voluntariado");
    }
    fooFunction() {
  
    }
  }
  
  class Charlas extends Servicio {
    constructor() {
      super(6, "Charlas");
    }
    fooFunction() {
    
    }
  }
  
  export { Contenedor, Repositorio, Voluntariado, Charlas };
  
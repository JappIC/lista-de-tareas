export class Todo {

    // Instancias

    // Esto me permite recuperar los metodos de la clase para usar en el localstorage ya que no es capaz de leer objetos y tenemos que pasarlo a un JSON
    static fromJson({ id, tarea, completado, creado }){

        const tempTodo = new Todo( tarea );

        tempTodo.id          = id;
        tempTodo.completado  = completado;
        tempTodo.creado      = creado;

        return tempTodo;
    }

    constructor ( tarea ) {

        this.tarea = tarea;

        this.id         = new Date().getTime(); // .getTime() 1238974667 lo usaremos como un ID
        this.completado = false;
        this.creado     = new Date();

    }

}
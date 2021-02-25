//============ FUNCIONES ================

const reporte = () => {
    let tareas = null

    personas.forEach( p => {
        misTareas(p)
        p.tareas = misTareas(p)
    });
    console.log(personas)
}


const rep = () => {
    let reporte = []
    personas.forEach(p => {
        let obj = {
            nombre: p.nombre,
            tareas: misTareas(p)
        }
        reporte.push(obj)
    });
    return reporte
}


const misTareas = (persona) => {
    let datos = []
    tareas.forEach(t => {
        let tarea = null
        if(persona.edad > t.rango[0] && persona.edad < t.rango[1]){
            tarea = t.tipo
            if(!t.opcional)
                tarea += "(obligatorio)"
        }
        if(tarea != null)
            datos.push(tarea)
    });
    return datos
}

//============ FUNCIONES ================

const personas = [
    {nombre:"Pedro",edad: 20},
    {nombre:"Andrea",edad: 30},
    {nombre:"Elizabeth",edad: 26},
    {nombre:"Marco",edad: 23},
]

const tareas = [
    {tipo:"Archivar", rango:[15,22], opcional: true},
    {tipo:"Filtrar", rango:[18,28], opcional: false},
    {tipo:"Organizar", rango:[25,35], opcional: false},
    {tipo:"Entregar", rango:[15,35], opcional: true},
]

reporte()
console.log(rep())

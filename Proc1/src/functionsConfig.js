export const FUNCTIONS = [
    {
        titulo: "Ver Nombre de la Clínica",
        descripcion: "Consultar el nombre registrado de la clínica veterinaria",
        nombreFuncion: "ver_nombre",
        soloLectura: "1",
        inputs: []
    },

    {
        titulo: "Registrar Nueva Mascota",
        descripcion: "Registra una nueva mascota en el sistema con estado inicial Saludable.",
        nombreFuncion: "agregar_cliente",
        soloLectura: "0",
        inputs: [
            { name: "nombre_cliente", type: "string", label: "Nombre de la Mascota" },
            { name: "direccion_facturacion", type: "string", label: "Dirección del Dueño" },
            { name: "ano_de_registro", type: "u8", label: "Año de Registro (ej. 24)" },
            { name: "id_cliente", type: "u16", label: "ID Único de Mascota" }
        ]
    },
    {
        titulo: "Agregar Tratamiento",
        descripcion: "Añade un tratamiento al historial médico de la mascota.",
        nombreFuncion: "agregar_servicio",
        soloLectura: "0",
        inputs: [
            { name: "id_cliente", type: "u16", label: "ID de la Mascota" },
            { name: "servicio", type: "string", label: "Tratamiento/Procedimiento" }
        ]
    },
    {
        titulo: "Actualizar a Paciente Prioritario",
        descripcion: "Marcar mascota como paciente prioritario (atención especial).",
        nombreFuncion: "cambiar_nivel_a_oro",
        soloLectura: "0",
        inputs: [
            { name: "id_cliente", type: "u16", label: "ID de la Mascota" }
        ]
    },
    {
        titulo: "Ver Beneficios de Plan",
        descripcion: "Consultar beneficios según el plan de la mascota",
        nombreFuncion: "aplicar_descuento",
        soloLectura: "1",
        inputs: [
            {name: "id_cliente", type:"u16", label: "ID de la Mascota"}
        ]
    },
    {
        titulo: "Historial Médico",
        descripcion: "Ver el resumen médico completo de la mascota",
        nombreFuncion: "ver_estado_cliente",
        soloLectura: "1",
        inputs: [
            {name: "id_cliente", type:"u16", label: "ID de la Mascota"}
        ]
    },
    {
        titulo: "Expediente Completo",
        descripcion: "Consultar toda la información de la mascota",
        nombreFuncion: "retornar_todo",
        soloLectura: "1",
        inputs: [
            {name: "id_cliente", type:"u16", label: "ID de la Mascota"}
        ]
    }
];
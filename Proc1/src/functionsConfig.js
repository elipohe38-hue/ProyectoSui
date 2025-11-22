export const FUNCTIONS = [
    {
        titulo: "Ver Nombre de la Empresa",
        descripcion: "Ver cual es el nombre de registro de la empresa a gestionar",
        nombreFuncion: "ver_nombre",
        soloLectura: "1",
        inputs: [
        ]
    },

    {
        titulo: "Agregar Cliente",
        descripcion: "Registra un nuevo cliente en la empresa con nivel inicial Cobre.",
        nombreFuncion: "agregar_cliente",
        soloLectura: "0",
        inputs: [
            // Nota: 'empresa' (primer argumento en Move) se manejará automáticamente con empresaId
            { name: "nombre_cliente", type: "string", label: "Nombre Completo" },
            { name: "direccion_facturacion", type: "string", label: "Dirección" },
            { name: "ano_de_registro", type: "u8", label: "Año Registro (ej. 23)" },
            { name: "id_cliente", type: "u16", label: "ID Único Cliente" }
        ]
    },
    {
        titulo: "Agregar Servicio",
        descripcion: "Añade un servicio al historial de un cliente existente.",
        nombreFuncion: "agregar_servicio",
        soloLectura: "0",
        inputs: [
            { name: "id_cliente", type: "u16", label: "ID del Cliente" },
            { name: "servicio", type: "string", label: "Nombre del Servicio" }
        ]
    },
    {
        titulo: "Cambiar Nivel a Oro",
        descripcion: "Actualiza el nivel de un cliente a Oro (15% descuento).",
        nombreFuncion: "cambiar_nivel_a_oro",
        soloLectura: "0",
        inputs: [
            { name: "id_cliente", type: "u16", label: "ID del Cliente" }
        ]
    },
    {
        titulo: "Aplicar Descuento",
        descripcion: "Aplicar un descuento segun el nivel actual del cliente",
        nombreFuncion: "aplicar_descuento",
        soloLectura: "1",
        inputs: [
            {name: "id_cliente", type:"u16", label: "ID del Cliente"}
        ]
    },
    {
        titulo: "Resumen de Usuario",
        descripcion: "Ver el resumen y los datos generales de un usuario",
        nombreFuncion: "ver_estado_cliente",
        soloLectura: "1",
        inputs: [
            {name: "id_cliente", type:"u16", label: "ID del Cliente"}
        ]
    },
    {
        titulo: "Retornar todo",
        descripcion: "Retorna toda la informacion del usuario en su formato correspondiente",
        nombreFuncion: "retornar_todo",
        soloLectura: "1",
        inputs: [
            {name: "id_cliente", type:"u16", label: "ID del Cliente"}
        ]
    }
];
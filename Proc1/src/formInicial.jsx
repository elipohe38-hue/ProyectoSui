import { useState } from "react"



function FormInicial({ ClientCall, estado, setNuevaEmpresa }) {
    const funcion = "crear_empresa"
    const [nombre, cambiarNombre] = useState("")

    function enviar() {
        ClientCall({
            funcion,
            args: [nombre]
        })
    }
    
    return(
        <form style={{
          display: "flex",
          flexDirection: "column", // Los elementos uno debajo del otro
          alignItems: "center", // Centrados horizontalmente
          gap: "15px", // Espacio entre cada elemento
          marginTop: "30px" // Un poco de aire arriba
        }}>
          
          {/* 1. Input para el nombre */}
          <input 
            type="text" 
            placeholder="¿Cuál sería el nombre de tu empresa?"
            style={{
              padding: "12px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              width: "100%",
              maxWidth: "400px", // Que no se haga demasiado ancho en pantallas grandes
              textAlign: "center"
            }}
            onChange={(e) => cambiarNombre(e.target.value)} 
          />

          {/* 2. Botón principal */}
          <button 
            className='purple-button' 
            // onClick={CrearEmpresa} <-- Asegúrate de llamar a tu función aquí, no en onSubmit del form por ahora
            type="button" // Importante: evita que el form recargue la página al hacer clic
            disabled={estado}
            style={{ width: "100%", maxWidth: "300px" }}
            onClick={() => enviar()}
          >
            Crear Empresa
          </button>

          {/* 3. Texto y enlace para los que ya tienen empresa */}
          <p style={{ fontSize: "14px", color: "#ccc", marginTop: "10px" }}>
            ¿Ya tienes una empresa creada?{' '}
            <span 
              style={{ color: "#8e44ad", cursor: "pointer", textDecoration: "underline", fontWeight: "bold" }}
              onClick={() => setNuevaEmpresa(true)}
            >
              Da clic aquí
            </span>
          </p>

        </form>
    )
}


export default FormInicial
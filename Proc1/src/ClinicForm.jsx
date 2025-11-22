import { useState } from "react"

function ClinicForm({ ClientCall, estado, setClinicaCreada }) {
    const funcion = "crear_empresa"
    const [nombre, cambiarNombre] = useState("")

    function enviar() {
        if (!nombre.trim()) {
            alert("Por favor ingresa el nombre de la clínica veterinaria");
            return;
        }
        ClientCall({
            funcion,
            args: [nombre]
        })
    }
    
    return(
        <div className="hero-section">
            <h1 className="hero-title">Registrar Nueva Clínica</h1>
            <p className="hero-subtitle">
                Crea tu clínica veterinaria en blockchain para gestionar historiales médicos 
                de mascotas de forma segura y transparente.
            </p>
            
            <div style={{maxWidth: '500px', margin: '0 auto'}}>
                <div className="form-group">
                    <label className="form-label">Nombre de la Clínica Veterinaria</label>
                    <input 
                        type="text" 
                        placeholder="Ej: Clínica Veterinaria Patitas Felices"
                        className="form-input"
                        value={nombre}
                        onChange={(e) => cambiarNombre(e.target.value)}
                    />
                </div>

                <button 
                    className="btn-primary"
                    type="button"
                    disabled={estado}
                    onClick={enviar}
                    style={{marginBottom: '1rem'}}
                >
                    {estado ? (
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
                            <div className="loading-spinner"></div>
                            Registrando...
                        </div>
                    ) : (
                        "🐾 Registrar Clínica"
                    )}
                </button>

                <p style={{textAlign: 'center', color: '#cbd5e1', fontSize: '0.9rem'}}>
                    ¿Ya tienes una clínica registrada?{' '}
                    <span 
                        style={{ color: "#fbbf24", cursor: "pointer", textDecoration: "underline", fontWeight: "600" }}
                        onClick={() => setClinicaCreada(true)}
                    >
                        Acceder al sistema existente
                    </span>
                </p>
            </div>
        </div>
    )
}

export default ClinicForm
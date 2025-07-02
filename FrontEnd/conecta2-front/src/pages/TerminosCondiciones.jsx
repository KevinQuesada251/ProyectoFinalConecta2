import React from 'react'
import Navigation from '../components/Nav'
import '../styles/TerminosCondiciones.css'

function TerminosCondiciones() {
    return (
        <div>
            <Navigation />
            <div className='container-terminos'>
                <h1>Términos y Condiciones</h1>
                <ol>
                    <li><a href="#aceptacion">Aceptación de Términos</a></li>
                    <li><a href="#uso">Uso de la Plataforma</a></li>
                    <li><a href="#cuenta">Cuentas de Usuario</a></li>
                    <li><a href="#conducta">Conducta del Usuario</a></li>
                    <li><a href="#propiedad">Propiedad Intelectual</a></li>
                    <li><a href="#responsabilidad">Limitación de Responsabilidad</a></li>
                    <li><a href="#modificaciones">Modificaciones de los Términos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ol>

                <section id='aceptacion'>
                    <h2>1. Aceptación de Términos</h2>
                    <p>Al acceder y utilizar Conecta2, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de los términos, por favor no utilices la plataforma.</p>
                </section>

                <section id='uso'>
                    <h2>2. Uso de la Plataforma</h2>
                    <p>Conecta2 proporciona un mapa interactivo para conectar personas con ubicaciones y servicios. Te comprometes a utilizar esta funcionalidad de forma legal y responsable.</p>
                </section>

                <section id='cuenta'>
                    <h2>3. Cuentas de Usuario</h2>
                    <p>Para acceder a ciertas funciones, deberás crear una cuenta proporcionando información veraz. Eres responsable de mantener la confidencialidad de tus credenciales y de todas las actividades bajo tu cuenta.</p>
                </section>

                <section id='conducta'>
                    <h2>4. Conducta del Usuario</h2>
                    <p>Prohibimos cualquier uso de la plataforma que incluya:</p>
                    <ul>
                        <li>Contenido ofensivo, difamatorio o ilegal</li>
                        <li>Intentos de dañar el sistema o a otros usuarios</li>
                        <li>Acceso no autorizado a datos o servicios</li>
                    </ul>
                </section>

                <section id='propiedad'>
                    <h2>5. Propiedad Intelectual</h2>
                    <p>Todos los derechos de propiedad intelectual relacionados con Conecta2, incluyendo el diseño, código fuente, logotipos y contenidos, pertenecen a sus respectivos dueños. No se permite su reproducción sin autorización.</p>
                </section>

                <section id='responsabilidad'>
                    <h2>6. Limitación de Responsabilidad</h2>
                    <p>No nos hacemos responsables por:</p>
                    <ul>
                        <li>Interrupciones del servicio</li>
                        <li>Pérdida de datos</li>
                        <li>Daños derivados del uso de la plataforma</li>
                    </ul>
                    <p>El uso de Conecta2 es bajo tu propio riesgo.</p>
                </section>

                <section id='modificaciones'>
                    <h2>7. Modificaciones de los Términos</h2>
                    <p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Te notificaremos sobre cambios importantes a través del sitio o por correo electrónico.</p>
                </section>

                <section id='contacto'>
                    <h2>8. Contacto</h2>
                    <p>Para cualquier duda relacionada con estos Términos y Condiciones, puedes contactarnos en:</p>
                    <p>📧 Email: soporte@conecta2.com</p>
                    <p>🌐 Sitio web: www.conecta2.com</p>
                </section>
            </div>
        </div>
    )
}

export default TerminosCondiciones

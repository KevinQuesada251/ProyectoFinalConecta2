import React from 'react'
import Navigation from '../components/Nav'
import '../styles/PoliticasPrivacidad.css'
import Footer from '../components/Footer'



function PoliticasPrivacidad() {
    return (
        <div>
            <Navigation />
            
            <div className='container-politicas'>
                
                <ol>
                    <li><a href="#introduccion">Introduccion.</a></li>
                    <li><a href="#informacion">Información que Recopilamos.</a></li>
                    <li><a href="#uso">Uso de la Información.</a></li>
                    <li><a href="#seguridad">Seguridad de la información.</a></li>
                    <li><a href="#comparticion">Compartición de Datos.</a></li>
                    <li><a href="#derechos">Tus Derechos.</a></li>
                    <li><a href="#cambios">Cambios en esta Política.</a></li>
                    <li><a href="#contacto">Contacto.</a></li>
                </ol>
                <section id='introduccion'>
                    <h2>1. Introducción</h2>
                    <p>Fecha de entrada en vigor: 1 de julio de 2025</p>
                    <p>Bienvenido a Conecta2, una plataforma diseñada para conectar a personas a
                        En Conecta2, valoramos y respetamos tu privacidad. Esta Política de Privacidad describe de forma clara y transparente cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando accedes y utilizas nuestro sitio web y su funcionalidad principal: un mapa interactivo que conecta a los usuarios con distintos puntos y ubicaciones.</p>
                </section>
                <section id='informacion'>
                    <h2>2. Información que Recopilamos</h2>
                    <p>Al registrarte y utilizar nuestra aplicación, recopilamos la siguiente información personal:</p>
                    <ul>
                        <li>Nombre y apellido</li>
                        <li>Correo electrónico</li>
                        <li>Provincia</li>
                        <li>Contraseña (almacenada de forma segura y cifrada)</li>
                    </ul>
                    <p>También podemos recopilar información técnica no personal, como tipo de dispositivo, navegador, dirección IP y datos de uso del sitio para mejorar el rendimiento y la experiencia del usuario.</p>
                </section>

                <section id='uso'>
                    <h2>3. Uso de la Información</h2>
                    <p>Utilizamos la información recopilada para:</p>
                    <ul>
                        <li>Crear y gestionar tu cuenta en la plataforma</li>
                        <li>Mostrar tu ubicación asociada a la provincia (si aplica)</li>
                        <li>Contactarte si es necesario (por soporte o notificaciones importantes)</li>
                        <li>Mejorar las funcionalidades del mapa interactivo</li>
                        <li>Garantizar la seguridad y autenticidad de los usuarios</li>
                    </ul>
                </section>
                <section id='seguridad'>
                    <h2>4. Seguridad de la Información</h2>
                    <p>Tu información está protegida mediante medidas técnicas y organizativas adecuadas:</p>
                    <ul>
                        <li>Las contraseñas son cifradas antes de ser almacenadas.</li>
                        <li>Utilizamos conexiones seguras (HTTPS) para proteger la transmisión de datos.</li>
                        <li>Acceso restringido solo a personal autorizado.</li>
                    </ul>
                    <p>Sin embargo, ninguna transmisión por internet es 100% segura. Aunque trabajamos para proteger tus datos, no podemos garantizar su seguridad absoluta.</p>
                </section>
                <section id='comparticion'>
                    <h2>5. Compartición de Datos</h2>
                    <p>No compartimos tu información personal con terceros, salvo en los siguientes casos:</p>
                    <ul>
                        <li>Cuando sea requerido por ley o procesos legales</li>
                        <li>Para prevenir fraudes, proteger derechos legales o hacer cumplir nuestras políticas</li>
                    </ul>
                </section>
                <section id='derechos'>
                    <h2>6. Tus Derechos</h2>
                    <p>Tienes derecho a:</p>
                    <ul>
                        <li>Acceder, rectificar o eliminar tu información personal</li>
                        <li>Solicitar la restricción del uso de tus datos</li>
                        <li>Retirar tu consentimiento en cualquier momento</li>
                    </ul>
                    <p>Para ejercer estos derechos, puedes contactarnos mediante los canales disponibles en la plataforma.</p>
                </section>
                <section id='cambios'>
                    <h2>7. Cambios en esta Política</h2>
                    <p>Podemos actualizar esta Política de Privacidad ocasionalmente. Notificaremos cualquier cambio importante mediante la plataforma o por correo electrónico.</p>
                </section>
                <section id='contacto'>
                    <h2>8. Contacto</h2>
                    <p>Si tienes dudas, preguntas o deseas ejercer tus derechos en relación con tus datos personales, puedes contactarnos a través de:</p>
                    <p>📧 Email: soporte@conecta2.com</p>
                    <p>🌐 Sitio web: www.conecta2.com</p>
                </section>
                <h1>Políticas de Privacidad</h1>
                

            </div>
            <Footer />
        </div>
    )
}

export default PoliticasPrivacidad
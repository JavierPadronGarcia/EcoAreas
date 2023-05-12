import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/NavigationBar";
import "./PoliticsPage.css";

function PoliticsPage() {

  const changeRadiobutton = () => {
    const radio1 = document.getElementById("radio1");
    const cookies = document.getElementById("cookies-section");
    const privacy = document.getElementById("privacy-politics-section");

    if (radio1.checked) {
      privacy.style.display = "none";
      cookies.style.display = "flex";
    } else {
      cookies.style.display = "none";
      privacy.style.display = "flex";
    }
  }

  return (
    <div className="container">
      <NavigationBar />
      <div className="main-section">
        <div className="buttons">
          <ul>
            <li>
              <input type='radio' value='1' name='radio' id='radio1' onChange={changeRadiobutton} />
              <label for='radio1'>Cookies</label>
            </li>
            <li>
              <input type='radio' value='2' name='radio' id='radio2' onChange={changeRadiobutton} />
              <label for='radio2'>Politica de privacidad</label>
            </li>
          </ul>
        </div>

        <div className="information-container">
          <div className="cookies-section" id="cookies-section">
            <h2>POLÍTICA DE COOKIES</h2>
            <h3>¿Qué son las cookies?</h3>
            <p>
              Las cookies son pequeños fragmentos de texto que se utilizan para
              conservar información en navegadores web. Se usan para almacenar y
              recibir identificadores e información adicional en ordenadores,
              teléfonos y otros dispositivos. Otras tecnologías, incluidos datos
              que almacenamos en tu navegador web o tu dispositivo, identificadores
              asociados a tu dispositivo y otro software, se utilizan con fines
              similares. A efectos de esta política, todas estas tecnologías reciben
              el nombre de “cookies”.
            </p>
            <h3>¿Por qué utilizamos cookies?</h3>
            <p>
              Las cookies nos ayudan a proporcionar, proteger y mejorar los Productos
              de Ecoareas. Por ejemplo, nos permiten personalizar el contenido, adaptar los
              anuncios y medir su rendimiento, y ofrecer una experiencia más segura.
              Entre las cookies que usamos se incluyen las de sesión, que se eliminan
              cuando cierras el navegador, y las persistentes, que permanecen en el
              navegador hasta que caducan o las eliminas. Aunque las cookies que
              utilizamos pueden cambiar de vez en cuando a medida que mejoramos y
              actualizamos los Productos de Ecoareas.
            </p>
            <h3>¿Cómo puedes controlar tu Información?</h3>
            <p>
              Utilizamos cookies para personalizar y mejorar el contenido y los servicios,
              proporcionar una experiencia más segura y mostrarte anuncios útiles y
              pertinentes, dentro y fuera de los Productos de Meta. Puedes controlar
              cómo utilizamos los datos para mostrarte anuncios, entre otros fines,
              mediante las herramientas que proporcionan los navegadores.
            </p>
            <p>A continuacion proporcionamos algunos enlaces para ver la configuración en su navegador:</p>
            <ul className="links-list">
              <li><a href="https://support.google.com/chrome/answer/95647">Google</a></li>
              <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d">Microsoft Edge</a></li>
            </ul>
          </div>
          <div className="privacy-politics-section" id="privacy-politics-section">
            <h2>POLITÍCA DE PRIVACIDAD</h2>

            <p>
              Ecoareas, en aplicación de la normativa vigente en materia de protección
              de datos de carácter personal, informa que los datos personales que se
              recogen a través de los formularios del Sitio web Ecoareas, se incluyen
              en los ficheros automatizados específicos de usuarios.
            </p>
            <p>
              La recogida y tratamiento automatizado de los datos de carácter personal
              tiene como finalidad el mantenimiento de la relación comercial y el desempeño
              de tareas de información, formación, asesoramiento y otras actividades propias
              de Ecoareas
            </p>
            <p>
              Estos datos únicamente serán cedidos a aquellas entidades que sean necesarias
              con el único objetivo de dar cumplimiento a la finalidad anteriormente expuesta.
            </p>
            <p>
              Ecoareas  adopta las medidas necesarias para garantizar la seguridad, integridad
              y confidencialidad de los datos conforme a lo dispuesto en el Reglamento (UE)
              2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016,
              relativo a la protección de las personas físicas en lo que respecta al
              tratamiento de datos personales y a la libre circulación de los mismos.
            </p>

            <p>
              El usuario podrá en cualquier momento ejercitar los derechos de acceso,
              oposición, rectificación y cancelación reconocidos en el citado Reglamento (UE).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PoliticsPage;
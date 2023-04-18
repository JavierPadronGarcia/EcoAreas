
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/NavigationBar";
import "./Homepage.css";

function Homepage() {
  return (

    <div className="container">
      {/* Header */}
      <NavigationBar />

      <div className="first-information-panel">
        <p>
          Ecoáreas-mardetodos es una iniciativa innovadora en economía azul que busca
          transformar el uso y la gestión de los espacios litorales hacia un modelo que
          premie y promueva prácticas sostenibles y responsables y gestión horizontal.
          <br /><br />
          Un proyecto impulsado y financiado por la Consejería de Turismo, Industria y
          Comercio del Gobierno de Canarias, con la cofinanciación del Plan Avanza de los
          fondos FEDER de la Unión Europea, basado en tres pilares: acuerdos voluntarios,
          participación y gestión horizontal.
          <br /><br />
          En las Ecoáreas tu opinión y tu acción son de vital importancia.
          <br />
          Te invitamos a participar activamente en los procesos para el impulso de la
          Red Canaria de Áreas Ecoturísticas Litorales.
        </p>
      </div>

      <Footer />
    </div>

  );
}

export default Homepage;
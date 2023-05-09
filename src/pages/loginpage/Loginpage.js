import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/NavigationBar";
import "./Loginpage.css";

function Loginpage() {
  return (
    <div className="container">
      <NavigationBar />
      <div className="login-section">
        <h3>Para modificar noticias debes identificarte</h3>
        <form>
          <p>
            <label for="user">Usuario:   </label>
            <input type="text" id="user" name="user"></input>
          </p>
          <p>
            <label for="password">Contraseña:  </label>
            <input type="password" id="password" name="password" />
          </p>
          <button type="submit" id="submitForm"><a href="/modifyNews">hola</a></button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Loginpage;
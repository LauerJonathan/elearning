import NavBar from "../../components/NavBar";

/********** import media here ***********/
import drawnEmployee from "../../assets/media/employee.webp";

import "./index.css";

const Home = () => {
  return (
    <>
      <NavBar active="home" />
      <section className="form">
        <div className="form--header">
          <h1>Create a new employee</h1>
          <img
            src={drawnEmployee}
            alt="drawn employee"
            className="drawnemployeeIMG"
          />
        </div>
        <form>
          <div>
            <label htmlFor="firstName">FirstName :</label>
            <input id="firstName" placeholder="" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">LastName :</label>
            <input id="lastName" type="text" />
          </div>
          <div>
            <label htmlFor="birthdate">Birthdate :</label>
            <input id="birthdate" type="date"></input>
          </div>
          <div>
            <label htmlFor="startdate">Birthdate :</label>
            <input id="startdate" type="date"></input>
          </div>
          <button>Welcome</button>
        </form>
      </section>
    </>
  );
};

export default Home;

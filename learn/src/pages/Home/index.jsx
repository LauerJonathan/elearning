import NavBar from "../../components/NavBar";
import { useState, useContext } from "react";
import UserContext from "../../context";
import StatusModal from "../../components/StatusModal";

/********** import media here ***********/
import drawnEmployee from "../../assets/media/employee.webp";
import devIMG from "../../assets/media/dev.png";
import teacherIMG from "../../assets/media/teacher.png";
import sellerIMG from "../../assets/media/seller.png";
import technicianIMG from "../../assets/media/technician.png";

import "./index.css";

const Home = () => {
  const { list, setList } = useContext(UserContext);

  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [departmentIMG, setDepIMG] = useState(devIMG);
  const [birthdate, setBD] = useState("");
  const [startDate, setSD] = useState("");
  const [status, setStatus] = useState({
    code: null,
    txt: "Employee added successfully !",
  });
  /****** StatusModal ******/
  const [modalState, setModalState] = useState(false);

  const onChangeFN = (e) => {
    setFN(e.target.value);
  };
  const onChangeLN = (e) => {
    setLN(e.target.value);
  };
  const onChangeDep = (e) => {
    switch (e.target.value) {
      case "seller":
        setDepIMG(sellerIMG);
        break;
      case "teacher":
        setDepIMG(teacherIMG);
        break;
      case "technician":
        setDepIMG(technicianIMG);
        break;
      case "dev":
        setDepIMG(devIMG);
        break;
    }
  };
  const onChangeBD = (e) => {
    setBD(e.target.value);
  };
  const onChangeSD = (e) => {
    setSD(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updtList = [...list];
    updtList.push({
      firstName: firstName,
      lastName: lastName,
      departmentIMG: departmentIMG,
      dateOfBirth: birthdate,
      startDate: startDate,
    });
    setList(updtList);

    setStatus({
      code: 200,
      txt: "Employee added successfully !",
    });

    setModalState(true);
    setFN("");
    setLN("");
    setBD("");
    setSD("");
  };

  return (
    <>
      {modalState && <StatusModal content={status} stateFct={setModalState} />}
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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">FirstName :</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={onChangeFN}
            />
          </div>
          <div>
            <label htmlFor="lastName">LastName :</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={onChangeLN}
            />
          </div>
          <div>
            <label htmlFor="birthdate">Birthdate :</label>
            <input
              id="birthdate"
              type="date"
              value={birthdate}
              onChange={onChangeBD}></input>
          </div>
          <div>
            <label htmlFor="startdate">Startdate :</label>
            <input
              id="startdate"
              type="date"
              value={startDate}
              onChange={onChangeSD}></input>
          </div>
          <div>
            <label htmlFor="department">Department :</label>
            <select name="department" onChange={onChangeDep} id="department">
              <option value="dev">Developer</option>
              <option value="seller">Seller</option>
              <option value="technician">Technician</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <button>Welcome</button>
        </form>
      </section>
    </>
  );
};

export default Home;

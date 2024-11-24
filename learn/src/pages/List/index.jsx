import { useContext } from "react";
import UserContext from "../../context";
import "./index.css";

import img from "../../assets/media/seller.png";

/*********** import components here ***********/
import NavBar from "../../components/NavBar";

const List = () => {
  const { list } = useContext(UserContext);
  return (
    <>
      <NavBar active="list" />
      <section className="employee--list">
        <h1>Nos employés</h1>
        <div className="container">
          {list.map((elmt, index) => {
            return (
              <div key={index}>
                <img src={elmt.departmentIMG} />
                <h2>{elmt.firstName + " " + elmt.lastName}</h2>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default List;

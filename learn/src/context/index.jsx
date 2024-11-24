import { useState, createContext } from "react";

/*********** import media here ***********/
import devIMG from "../assets/media/dev.png";
import teacherIMG from "../assets/media/teacher.png";
import sellerIMG from "../assets/media/seller.png";
import technicianIMG from "../assets/media/technician.png";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [list, setList] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      departmentIMG: teacherIMG,
      dateOfBirth: "27/03/1999",
      startDate: "08/05/2024",
    },
    {
      firstName: "Ruan",
      lastName: "Delivera",
      departmentIMG: devIMG,
      dateOfBirth: "08/06/1989",
      startDate: "08/05/2024",
    },
    {
      firstName: "Malick",
      lastName: "André",
      departmentIMG: sellerIMG,
      dateOfBirth: "19/06/2002",
      startDate: "08/05/2024",
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      departmentIMG: technicianIMG,
      dateOfBirth: "15/02/1990",
      startDate: "01/04/2022",
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      departmentIMG: sellerIMG,
      dateOfBirth: "23/11/1985",
      startDate: "12/09/2023",
    },
    {
      firstName: "Sophie",
      lastName: "Williams",
      departmentIMG: sellerIMG,
      dateOfBirth: "07/04/1997",
      startDate: "20/02/2021",
    },
    {
      firstName: "Lucas",
      lastName: "Brown",
      departmentIMG: teacherIMG,
      dateOfBirth: "30/09/1992",
      startDate: "15/01/2024",
    },
    {
      firstName: "Charlie",
      lastName: "Davis",
      departmentIMG: devIMG,
      dateOfBirth: "17/07/1988",
      startDate: "25/08/2020",
    },
    {
      firstName: "Elena",
      lastName: "Miller",
      departmentIMG: sellerIMG,
      dateOfBirth: "10/03/2000",
      startDate: "05/07/2022",
    },
    {
      firstName: "David",
      lastName: "Wilson",
      departmentIMG: technicianIMG,
      dateOfBirth: "22/01/1995",
      startDate: "02/11/2023",
    },
  ]);

  return (
    <UserContext.Provider value={{ list, setList }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

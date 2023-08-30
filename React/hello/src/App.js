import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [

      {
        id:1,
        name: "Caleb",
        role: 'Developer',
        img: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
      },
      {
        name: "Abby",
        role: 'Intern',
        img: 'https://images.pexels.com/photos/5704852/pexels-photo-5704852.jpeg'
      },
      {
        name: "Ann",
        role: 'Manager',
        img: 'https://images.pexels.com/photos/2110858/pexels-photo-2110858.jpeg'
      },
      {
        name: "Rufus",
        role: 'Dev-ops',
        img: 'https://images.pexels.com/photos/4275726/pexels-photo-4275726.jpeg'
      },
      {
        name: "Amanda",
        role: 'Senior Manager',
        img: 'https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg'
      },
      {
        name: "Jeremy",
        role: 'Intern',
        img: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg'
      }

    ]);
  const showEmployees = true;
  return (
    <div className="App ">
      {showEmployees ? (
        <>
          <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);

          }} />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(uuidv4());
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );



            })}
          </div>
        </>)
        :
        <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;

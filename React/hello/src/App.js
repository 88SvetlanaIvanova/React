import './App.css';
import Employee from './components/Employee';

function App() {
  console.log("We are about to list the employees");
  const showEmployees = false;
  return (
    <div className="App">
      { console.log("inside the return")}
      {showEmployees ?
          <>
            <Employee />
            <Employee />
            <Employee />
          </>
        :
        <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;

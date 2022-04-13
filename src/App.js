import Data from './Page/Data/Data';
import Activity from './Page/Activity/Activity';
import Login from './Page/Login/Login';
import Bmi from './Page/BMI/BMI';
import EditActivity from './Page/Activity/EditActivity';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
      <Routes>
        <Route path="/" element={<Login/>}  />
        <Route path="Activity" element={<Activity className="Activity"/> } />
        <Route path="Data" element={<Data /> } />
        <Route path="Bmi" element={<Bmi /> } />
        <Route path="EditActivity/:activityDataId" element={<EditActivity/> } />
      </Routes>
      </div>
    </BrowserRouter>

  
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Axios from "axios";
import { BASE_URL } from "./shared/constants";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";

function App() {
  Axios.defaults.baseURL = `${BASE_URL}/machstatz`;

  Axios.interceptors.request.use((request) => {
    return request;
  });

  const interceptor = (error) => {
    if (error.response) {
      if (error.response.status === 500) {
        // alert("Server error");
        return;
      }
      if (error.response.status === 401) {
        // Reject the current request while the token refreshes
        return Promise.reject(error);
      } else {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  };
  Axios.interceptors.response.use(undefined, interceptor);

  return (
    <div className="App">
      <div className="body">
        <Navbar />
        <div className="mainContent">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;

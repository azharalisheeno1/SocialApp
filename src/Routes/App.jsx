import "./App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import PostListProvider from "../Store/Post-List-Store";
import { Outlet } from "react-router-dom";
function App() {
  
  return (
   <PostListProvider> 
    <div className="app-container">
      <SideBar ></SideBar>
      <div className="App">
        <Header></Header>
        <Outlet/>
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;

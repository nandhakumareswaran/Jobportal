import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "./components/AdminLoginpage";
import Listingcommon from "./components/Listingcommon";
import AdminPostPage from "./components/AdminPostPage";
import UserLoginPage from "./components/UserLoginpage";
import RegisterLogin from "./components/RegisterPage";
import UserApplyPage from "./components/UserApply";
import UserJobList from "./components/UserApplyJob";



function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLoginPage />} />
      <Route path="/register" element={<RegisterLogin />} />
      <Route path="/userlogin" element={<UserLoginPage />} />
      <Route path="/userapplyjobs" element={<UserJobList />} />
    

      <Route path="/apply" element={<UserApplyPage />} />
      <Route path="/listingcommon" element={<Listingcommon />} />
     
      <Route path="/user/:userId" element={<AdminPostPage />} />

      <Route path="/admin/login" element={<AdminLoginPage />} />

      <Route path="/admin/post" element={<AdminPostPage />} />
    </Routes>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Feed from "./components/Feed";
import Connection from "./components/Connection";
import Requests from "./components/Requests";
import Premium from "./components/Premium";
import Chat from "./components/Chat";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            {/* Landing page route */}
            <Route path="/" element={<Landing />} />
            
            {/* Protected routes with Body wrapper */}
            <Route path="/app" element={<Body />}>
              <Route index element={<Feed />} />
              <Route path="profile" element={<Profile />} />
              <Route path="connections" element={<Connection />} />
              <Route path="chat" element={<Connection />} />
              <Route path="requests" element={<Requests />} />
              <Route path="premium" element={<Premium />} />
              <Route path="chat/:targetUserId" element={<Chat />} />
            </Route>
            
            {/* Login route */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

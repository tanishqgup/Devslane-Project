import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthPage from "./pages/Auth.page";
import DashboardPage from "./pages/Dashboard.page";
import LoginPage from "./pages/Login.page";
import RecordingsPage from "./pages/Recordings.page";
import SignupPage from "./pages/Signup.page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
        </Route>
        <Route path={["/login", "/signup"]}>
          <AuthPage />
        </Route>
        <Route path="/recordings">
          <RecordingsPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

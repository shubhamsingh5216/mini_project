import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home1 from "./components/Home1";
import About1 from "./components/About1";
import Services1 from "./components/Services1";
import Payments1 from "./components/Payments1";
import Profile1 from "./components/Profile1";
import Contact1 from "./components/Contact1";
import PaymentOptions1 from "./components/PaymentGateway1";

// Dummy components for each page
function Home() {
  return <Home1 />;
}

function PaymentOptions() {
  return <PaymentOptions1 />;
}

function About() {
  return <About1 />;
}

function Services() {
  return <Services1 />;
}

function Payments() {
  return <Payments1 />;
}

function Profile() {
  return <Profile1 />;
}

function Contact() {
  return <Contact1 />;
}

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar className="w-1/5" />

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <Navbar className="h-16" />

          {/* Routes */}
          <div className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/paymentOptions" element={<PaymentOptions />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

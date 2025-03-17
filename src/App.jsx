import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Test from './Test'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/plays" element={<Plays />} />
            <Route path="/my-tickets" element={<MyTickets />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Ensure these components are correctly defined
const Plays = () => <div>Plays Page</div>;
const MyTickets = () => <div>My Tickets Page</div>;
const Reviews = () => <div>Reviews Page</div>;
const Contact = () => <div>Contact Us Page</div>;

export default App;
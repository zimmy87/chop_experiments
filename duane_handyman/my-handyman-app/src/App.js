import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css'; // Import basic CSS

// --- Page Components ---

function Residential() {
  return (
    <div className="page-content">
      <h2>Residential Services</h2>
      <p>We offer a variety of residential handyman services, including but not limited to:</p>
      <ul>
        <li><strong>Plumbing:</strong> Faucet replacement, leaky faucets & drains, running toilets, toilet removal & installation, garbage disposal install & replacement.</li>
        <li><strong>Electrical:</strong> Outlet & light switch replacement, appliance installation, ceiling fan replacement.</li>
        <li><strong>Carpentry:</strong> Fence repair & replacement, deck repair & replacement, hand rail installation, bathroom & kitchen upgrades, patching drywall, and interior/exterior painting.</li>
        <li><strong>Debris/Junk Removal:</strong> Yard waste, carpet & tackstrip removal, general junk(such as unwanted material, furniture, appliances, etc) removal, crawlspace & attic inspections, rodent inspection & removal.</li>
        <li><strong>Miscellenious:</strong> Assembling furniture, mounting TVs, etc.</li>
      </ul>
    </div>
  );
}

function Gallery() {
  return (
    <div className="page-content">
      <h2>Gallery</h2>
      <p>Here's a glimpse of our completed projects. Imagine your home transformed!</p>
      <div className="gallery-placeholder">
        {/* Create a simple grid layout for placeholders */}
        <div className="gallery-item">Placeholder Image 1</div>
        <div className="gallery-item">Placeholder Image 2</div>
        <div className="gallery-item">Placeholder Image 3</div>
        <div className="gallery-item">Placeholder Image 4</div>
        <div className="gallery-item">Placeholder Image 5</div>
        <div className="gallery-item">Placeholder Image 6</div>
      </div>
       <p><em>(Replace placeholders with actual image components and data later)</em></p>
    </div>
  );
}

function HowWeWork() {
  return (
    <div className="page-content">
      <h2>How We Work</h2>
      <p>
        <strong>Step 1: Initial Contact & Consultation</strong><br />
        Reach out to us via phone, email, or our 'Get an Estimate' form. We'll discuss your project needs, gather essential details about the scope of work, and understand your desired timeline. For more complex jobs, we might schedule a brief visit or request photos to provide an accurate assessment.
      </p>
      <p>
        <strong>Step 2: Estimate & Scheduling</strong><br />
        Based on our initial discussion, we'll provide you with a clear, itemized estimate outlining the costs for labor and materials (if applicable). Once you approve the estimate, we'll work with you to find a convenient date and time slot to schedule the service appointment. We aim for flexibility to fit your busy life.
      </p>
      <p>
        <strong>Step 3: Performing the Work</strong><br />
        Our skilled and courteous handyman will arrive promptly at the scheduled time, equipped with the necessary tools and expertise. We treat your home with respect, work efficiently, maintain a clean workspace, and communicate progress clearly throughout the job. Your satisfaction is our priority.
      </p>
      <p>
        <strong>Step 4: Completion & Follow-up</strong><br />
        Upon completion, we'll walk you through the finished work to ensure it meets your expectations. We'll clean up the work area thoroughly. Payment is typically due upon completion unless otherwise arranged. We value your feedback and may follow up to ensure you're completely satisfied with our service.
      </p>
    </div>
  );
}

function MissionStatement() {
  return (
    <div className="page-content">
      <h2>Our Mission Statement</h2>
      <p>
        <em>
          "To provide reliable, high-quality handyman services to homeowners and businesses in our community. We strive to build lasting relationships with our clients through exceptional craftsmanship, transparent communication, fair pricing, and a commitment to solving problems efficiently and effectively. We aim to be the trusted go-to resource for all repair, maintenance, and improvement needs, treating every property as if it were our own."
        </em>
      </p>
    </div>
  );
}

function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic form submission feedback (replace with actual logic later)
    alert('Thank you for your inquiry! We will get back to you soon.');
    event.target.reset(); // Clear the form
  };

  return (
    <div className="page-content">
      <h2>Contact Us</h2>
      <p>Have a question? Send us a message!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="contact-name">Name:</label>
          <input type="text" id="contact-name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="contact-email">E-mail:</label>
          <input type="email" id="contact-email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="contact-inquiry">Inquiry:</label>
          <textarea id="contact-inquiry" name="inquiry" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

function GetAnEstimate() {
    const handleSubmit = (event) => {
    event.preventDefault();
    // Basic form submission feedback (replace with actual logic later)
    alert('Estimate request submitted! We will review the details and contact you shortly.');
    event.target.reset(); // Clear the form
  };

  return (
    <div className="page-content">
      <h2>Get an Estimate</h2>
      <p>Please provide details about your project so we can give you an accurate estimate.</p>
      <form className="estimate-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="estimate-fullname">Full Name:</label>
          <input type="text" id="estimate-fullname" name="fullname" required />
        </div>
        <div className="form-group">
          <label htmlFor="estimate-email">E-mail:</label>
          <input type="email" id="estimate-email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="estimate-phone">Phone Number:</label>
          <input type="tel" id="estimate-phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="estimate-address">Street Address:</label>
          <input type="text" id="estimate-address" name="address" required />
        </div>
         <div className="form-group inline">
          <label htmlFor="estimate-city">City:</label>
          <input type="text" id="estimate-city" name="city" required />
        </div>
         <div className="form-group inline">
          <label htmlFor="estimate-state">State:</label>
          <input type="text" id="estimate-state" name="state" maxLength="2" required /> {/* MaxLength for abbreviation */}
        </div>
         <div className="form-group inline">
          <label htmlFor="estimate-zip">Zip Code:</label>
          <input type="text" id="estimate-zip" name="zip" inputMode="numeric" pattern="[0-9]{5}" title="Enter a 5-digit zip code" required /> {/* Basic zip validation */}
        </div>
         <div className="form-group full-width">
          <label htmlFor="estimate-project">Tell us about your project:</label>
          <textarea id="estimate-project" name="project" rows="6" required></textarea>
        </div>
        <button type="submit">Submit Estimate Request</button>
      </form>
    </div>
  );
}

// --- Navigation Bar ---

function Navbar() {
  // Using NavLink to automatically add an 'active' class for styling the current page link
  const getNavLinkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><NavLink to="/" className={getNavLinkClass} end>Residential</NavLink></li> {/* 'end' prop ensures it's only active for the exact path */}
        <li><NavLink to="/gallery" className={getNavLinkClass}>Gallery</NavLink></li>
        <li><NavLink to="/how-we-work" className={getNavLinkClass}>How We Work</NavLink></li>
        <li><NavLink to="/mission-statement" className={getNavLinkClass}>Mission Statement</NavLink></li>
        <li><NavLink to="/contact-us" className={getNavLinkClass}>Contact Us</NavLink></li>
        <li><NavLink to="/get-an-estimate" className={getNavLinkClass}>Get an Estimate</NavLink></li>
      </ul>
    </nav>
  );
}

// --- Main App Component (Router Setup) ---

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Your Handyman Service</h1> {/* Optional: Add a site title */}
          <Navbar />
        </header>

        <main className="App-content">
          <Routes>
            <Route path="/" element={<Residential />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/mission-statement" element={<MissionStatement />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/get-an-estimate" element={<GetAnEstimate />} />
            {/* Optional: Add a catch-all 404 route */}
            {/* <Route path="*" element={<div><h2>404 Not Found</h2></div>} /> */}
          </Routes>
        </main>

        <footer className="App-footer">
           <p>© {new Date().getFullYear()} Your Handyman Service. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
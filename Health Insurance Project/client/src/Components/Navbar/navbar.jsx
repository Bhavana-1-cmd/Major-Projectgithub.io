import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import setcurrentUser from "../../actions/currentUser";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUserReducer);

  useEffect(() => {
    dispatch(setcurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);
  return (
    // <div className='navbar-container' style={{minHeight:'50px', borderBottom:'3px solid black'}}>
    //     <div className="navbar">
    //         <Link to="/" className='navbar-item'>Home</Link>
    //         <Link to="/about" className='navbar-item'>About</Link>
    //         <Link to="/" className='navbar-item'>Services</Link>
    //         <Link to="/" className='navbar-item'>Contact</Link>
    //         <Link to="/" className='navbar-item'>Team</Link>

    //         {user === null ?
    //             <Link to="/Auth" className='navbar-item nav-link'>Login</Link>:
    //             <button className='navbar-item nav-link'>Logout</button>
    //         }

    //     </div>

    // </div>
<>
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">
      Health Care
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/services">
          Services
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link
          className="nav-link "
          to="/team"
        >
          Team
        </Link>
        <Link to="/Auth" className='navbar-item nav-link'>Login</Link>:
      </div>
    </div>
  </div>
</nav> */}
<>
  {/* Navbar */}
  <nav className="navbar  fixed navbar-expand-lg navbar-dark shadow-5-strong" style={{color:"black"}}>
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Navbar brand */}
      <Link className="navbar-brand" to="#">
      Health Care
    </Link>
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/services">
          Services
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link
          className="nav-link "
          to="/team"
        >
          Team
        </Link>
        <Link to="/Auth" className='navbar-item nav-link'>Login</Link>
            
    
          
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

</>
  );
};

export default Navbar;

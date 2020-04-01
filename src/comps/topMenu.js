import React from "react";
const TopMenu = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
      <div className="navbar-brand">
        <img src="logo.png" alt="" style={{ height: "55px" }} />
      </div>
      <div
        className="navbar-toggler"
        type="div"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </div>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <div className="nav-link">
              Über Uns <span className="sr-only">(current)</span>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Die Duftmanufaktur</div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Scentral Duftdatenbank
            </div>
          </li>
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Kontakt
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <div className="dropdown-item">eMail</div>
              <div className="dropdown-item">Telefonisch</div>
              <div className="dropdown-item">Online Chat</div>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </div>
        </form>
      </div>
    </nav>
  );
};

export default TopMenu;

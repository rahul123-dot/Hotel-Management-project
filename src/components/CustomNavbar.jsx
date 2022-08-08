import {NavLink as ReactLink} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
const CustomeNavbar=()=>{
      return (
        <div>
          <Navbar 
          color="dark"
          dark
          expand="md"
          fixed=""
          >
            <NavbarBrand tag={ReactLink} to="/">Home</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse  navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink tag={ReactLink} to="/about">ABOUT US</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/ourservices">OUR SERVICES</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/offersavailable">OFFERS AVAILABLE</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/login">
                    LOGIN
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/signup">
                    SIGN UP
                  </NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    MORE
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem  tag={ReactLink} to="/contactus">CONTACT</DropdownItem>
                    <DropdownItem>REVIEW</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem></DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <NavbarText>Simple Text</NavbarText>
            </Collapse>
          </Navbar>
        </div>
      );
    }

export default CustomeNavbar;
import './Navbar.css'
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function Navbar({balance}) {
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' light style={{ backgroundColor: '#124f7a' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand className='navFontColor' href='/'>Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorThird(!showNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorThird} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0 navFontColor'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink className='navFontColor' aria-current='page' href='/'>
                Transactions
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='navFontColor' href='/operations'>Operations</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='navFontColor' href='/breakdown'>Breakdown</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <span className='balance'> Balance:&nbsp;&nbsp; <b className={balance > 500 ? 'navbarDeposit' : 'navbarWithdraw'}>{balance}</b></span>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
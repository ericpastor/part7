import { StyledLink } from '../styledComponents/StyledLink'
import { Navbar, Nav } from 'react-bootstrap'
import { Navigation } from '../styledComponents/StylingDivNav'

export const Menu = () => {
  const padding = {
    paddingRight: 7,
  }
  return (
    <Navigation>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse>
          <Nav>
            <StyledLink style={padding} to="/">
              Blogs
            </StyledLink>

            <StyledLink style={padding} to="/users">
              Users
            </StyledLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Navigation>
  )
}

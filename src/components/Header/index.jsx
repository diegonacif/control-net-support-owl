import { Link } from "react-router-dom";
import { Avatar, HeaderContainer, Navigation } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/procedures">Procedimentos</Link>
        <Link to="/scripts">Scripts</Link>
      </Navigation>
      <Avatar />
    </HeaderContainer>
  )
}

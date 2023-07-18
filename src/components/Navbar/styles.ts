import { AppBar, Toolbar, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const pages = ["Home", "About", "Pages", "Shop", "Projects", "News"];

export const StyledAppBar = styled(AppBar)`
  background-color: white;
  color: #000000;
  box-shadow: none;
  padding: 2rem 4rem;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: #000000;
`;

export const StyledInputBase = styled("input")`
  height: 56px;
  width: 300px;
  border-radius: 36px;
  border: none;
  padding: 0.5rem 1rem;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  color: white;
`;

export const StyledCartIcon = styled(ShoppingCartIcon)`
  color: white;
`;

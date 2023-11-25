import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import styled from 'styled-components';

 const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 50px;
  font-size: 16px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 5px;
  &.active {
  color: blue; 
  }
`;

export const Layout = () => {
    return (
        <Container>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </header>
          
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Container>
    );
};
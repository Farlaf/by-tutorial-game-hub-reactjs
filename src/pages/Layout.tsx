import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "250px 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar />
            </GridItem>
            <Outlet />
        </Grid>
    );
};

export default Layout;
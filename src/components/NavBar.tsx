import { Box, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
    return (
        <HStack padding="10px">
            <Box boxSize="60px">
                <Link to="/">
                    <Image src={logo} />
                </Link>
            </Box>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;

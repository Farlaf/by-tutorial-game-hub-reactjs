import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../entities/Platform";
import usePlatform from "../hooks/usePlatform";
import useGameQueryState from "../store";

const PlatformSelector = () => {
    const { error, data } = usePlatforms();
    const selectedGenreId = useGameQueryState((s) => s.gameQuery.platformId);
    const setSelectedPlatformId = useGameQueryState((s) => s.setPlatformId);
    const selectedPlatform = usePlatform(selectedGenreId);

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || "Platform"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem
                        onClick={() => setSelectedPlatformId(platform.id)}
                        key={platform.id}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;

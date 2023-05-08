import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryState from "../store";

const SortSelector = () => {
    const sortOrder = useGameQueryState((s) => s.gameQuery.sortOrder);
    const setSortOrder = useGameQueryState((s) => s.setSortOrder);

    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "rating", label: "Average rating" },
    ];

    const currentSortOrder = sortOrders.find(
        (order) => order.value === sortOrder
    );

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder?.label || "Relevance"}
            </MenuButton>
            <MenuList>
                {sortOrders.map((item) => (
                    <MenuItem
                        onClick={() => setSortOrder(item.value)}
                        key={item.value}
                    >
                        {item.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;

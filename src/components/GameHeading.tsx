import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryState from "../store";

const GameHeading = () => {
    const selectedGenreId = useGameQueryState((s) => s.gameQuery.genreId);
    const genre = useGenre(selectedGenreId);

    const selectedPlatformId = useGameQueryState((s) => s.gameQuery.platformId);
    const platform = usePlatform(selectedPlatformId);

    const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

    return (
        <Heading as="h1" marginY={2} fontSize="5xl">
            {heading}
        </Heading>
    );
};

export default GameHeading;

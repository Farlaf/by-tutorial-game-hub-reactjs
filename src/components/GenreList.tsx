import {
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
    Button,
    Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    seletedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, seletedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    // if (isLoading) return <Spinner />;

    if (error) return null;

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                textAlign="left"
                                whiteSpace="normal"
                                fontWeight={
                                    genre.id === seletedGenre?.id
                                        ? "bold"
                                        : "normal"
                                }
                                fontSize="lg"
                                variant="link"
                                onClick={() => onSelectGenre(genre)}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;

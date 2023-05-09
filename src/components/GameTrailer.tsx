import useTrailers from "../hooks/useTrailers";

interface Props {
    id: number;
}

const GameTrailers = ({ id }: Props) => {
    const { data, error, isLoading } = useTrailers(id);

    if (isLoading) return null;

    if (error) throw error;

    const video = data?.results[0];
    return video ? (
        <video src={video.data[480]} poster={video.preview} controls>
            {video.name}
        </video>
    ) : null;
};

export default GameTrailers;

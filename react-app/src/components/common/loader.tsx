import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ size }: { size?: string }) => {
  return (
    <ClipLoader
      color="#6e629d"
      loading={true}
      aria-label="Loading Spinner"
      size={size ? size : "23.50px"}
    />
  );
};

export default Loader;

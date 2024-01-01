import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <ClipLoader
      color="#b8cce0"
      loading={true}
      aria-label="Loading Spinner"
      size="23.50px"
    />
  );
};

export default Loader;

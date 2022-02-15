import PropTypes from "prop-types";

import { Oval } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

const Loader = ({ chunk = false }) => {
  return (
    <LoaderContainer chunk={chunk}>
      <Oval type="Oval" color="#00BFFF" height={40} width={40} />
    </LoaderContainer>
  );
};

Loader.propTypes = {
  chunk: PropTypes.bool,
};

export default Loader;

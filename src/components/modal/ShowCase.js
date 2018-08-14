import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { closeModal } from "../../routines";

const ShowCase = ({ modal: { selectedOption, geometrics } }) => (
  <div className="geometric viewer">
    <div className={geometrics[selectedOption]} />
  </div>
);

ShowCase.propTypes = {
  modal: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ closeModal }, dispatch)
});

const mapStateToProps = ({ modal }) => ({
  modal
});

ShowCase.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCase);

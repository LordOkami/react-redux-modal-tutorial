import _ from "lodash/fp";
import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { closeModal } from "../../routines";

const ShowCase = ({ modal: { selectedOption, geometrics, step, colors } }) => (
  <React.Fragment>
    <div className="showcase">
      <div className="geometric viewer">
        <div className={geometrics[selectedOption]} />
      </div>
    </div>
    <div className="steps">
      {_.map(color => (
        <div key={color} className="step" onClick={() => color} />
      ))(colors)}
    </div>
  </React.Fragment>
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

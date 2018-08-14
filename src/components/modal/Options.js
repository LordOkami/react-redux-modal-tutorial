import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectOption } from "../../routines";

const Options = ({ modal: { options, selectedOption }, selectOption }) => (
  <React.Fragment>
    {options &&
      options.map((option, index) => (
        <div
          key={index}
          className={`option ${selectedOption == index && "selected"}`}
          onClick={() => selectOption(index)}
        >
          {option}
        </div>
      ))}
  </React.Fragment>
);

Options.propTypes = {
  modal: PropTypes.object,
  selectOption: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ selectOption }, dispatch)
});

const mapStateToProps = ({ modal }) => ({
  modal
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);

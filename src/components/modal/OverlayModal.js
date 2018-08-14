import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { closeModal } from "../../routines";

import Options from "./Options";
import ShowCase from "./ShowCase";

const OverlayModal = ({ closeModal }) => (
  <div className="overlay">
    <div className="modal">
      <h1 className="title">What do I need to know to create a Bot?</h1>
      <div className="content">
        <div className="menu">
          <Options />
        </div>
        <div className="showcase">
          <ShowCase />
        </div>
      </div>
      <button onClick={closeModal}>Skip tutorial</button>
    </div>
  </div>
);

OverlayModal.propTypes = {
  closeModal: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ closeModal }, dispatch)
});

const mapStateToProps = ({ modal }) => ({
  modal
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverlayModal);

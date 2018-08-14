import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { openModal } from "../../routines";

import OverlayModal from "./OverlayModal";

export const Modal = ({ openModal, modal }) => (
  <React.Fragment>
    <div className="container">
      {console.log(modal)}
      <button className="centered" onClick={openModal}>
        Open Modal
      </button>
    </div>
    {modal.open && <OverlayModal />}
  </React.Fragment>
);

Modal.propTypes = {
  openModal: PropTypes.func,
  modal: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ openModal }, dispatch)
});

const mapStateToProps = ({ modal }) => ({
  modal
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

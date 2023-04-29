import React from 'react'

function AccountSettingsModal(props) {
  const handleCloseClick = () => {
    props.onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Account Settings</h2>
          <button className="close" onClick={handleCloseClick}>
            &times;
          </button>
        </div>
        <div className="modal-body">{props.children}</div>
      </div>
    </div>
  );
}

export default AccountSettingsModal
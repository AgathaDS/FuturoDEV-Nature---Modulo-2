// src/components/Modal.jsx
import React from 'react';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Você tem mais de 18 anos?</p>
        <button onClick={onClose}>Sim</button>
        <button onClick={onClose}>Não</button>
      </div>
    </div>
  );
}

export default Modal;

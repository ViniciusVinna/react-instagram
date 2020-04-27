import React from 'react';

import { Link } from 'react-router-dom';

import './SuccessMessage.scss';

const SuccessMessage = () => (
  <div className="success-message" data-testid="success-message">
    <svg
      className="successAnimation animated"
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 70 70"
    >
      <path
        className="successAnimationResult"
        fill="#ffffff"
        d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
      />
        <circle
          className="successAnimationCircle"
          cx="35"
          cy="35"
          r="24"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          fill="transparent"
        />

        <polyline
          className="successAnimationCheck"
          stroke="#000000"
          strokeWidth="2"
          points="23 34 34 43 47 27"
          fill="transparent"
        />
    </svg>

    <h2 className="success-message__title">Usuário Cadastrado!</h2>

    <div className="success-message__content">
      <p>Visite a página <Link to="/users">users</Link> para visualizar o novo usuário</p>
    </div>
  </div>
);

export default SuccessMessage;

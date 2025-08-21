
import React from 'react';
import '../style/tarotfooter.css';

const TarotFooter = () => {
  return (
    <footer className="tarot-footer">
      <p className="footer-text">
        Este proyecto ha sido desarrollado por la alumna Nicole Guevara como parte del programa de formación de FactoriaF5
      </p>
      <p className="footer-copy">
        © 2025 Arcanum Tarot | + info
      </p>
      <div className="footer-logo">
        <a href="https://factoriaf5.org/" target="_blank" rel="noopener noreferrer">
         <img src="/logo-footer.png" alt="Logo Factoria F5" />

        </a>
      </div>
    </footer>
  );
}

export default TarotFooter;

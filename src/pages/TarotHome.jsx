// src/pages/TarotHome.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCards } from "../services/tarotServices";
import "../style/tarothome.css";

export default function TarotHome() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCards() {
      try {
        const data = await getAllCards();
        setCards(data || []);
      } catch (err) {
        console.error("Error cargando cartas:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCards();
  }, []);

  if (loading) return <p>Cargando cartas...</p>;

return (
  <div className="tarot-container">
    <div className="cards-grid">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card-wrapper"
          onClick={() => navigate(`/card/${card.id}`)}
        >
          <div className="tarot-card-style">
            {/* Imagen de la carta */}
            <img
              src={`/cards/${card.id}.png`} // O png, según tengas
              alt={`Carta ${card.id}`}
              className="card-image"
              onError={(e) => {
                e.target.style.display = "none"; // Oculta si no existe imagen
              }}
            />
            {/* Puedes quitar el número si quieres solo la imagen */}
            {/* <p className="card-id">{card.id}</p> */}
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

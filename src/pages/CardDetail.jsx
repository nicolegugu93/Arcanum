// src/pages/CardDetail.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneCard } from "../services/tarotServices";
import '../style/carddetail.css'

export default function CardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCard() {
      try {
        if (!id) throw new Error("ID no proporcionado");
        const data = await getOneCard(id);
        console.log("Datos recibidos de la API:", data);
        if (!data) throw new Error("Carta no encontrada");
        setCard(data);
      } catch (err) {
        console.error("Error cargando carta:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCard();
  }, [id]);

  if (loading) return <p>Cargando carta...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!card) return <p>No se encontró la carta.</p>;

  return (
    <div className="card-detail">
      <div className="card-columns">
        {/* Arcane Container */}
        <div className="card-container arcane-card">
          <img 
            src={`/cards/${card.id}.png`} 
            alt={card.ArcaneName} 
            className="card-image" 
          />
          <h1 className="card-title">{card.ArcaneName}</h1>
          <p className="card-description">{card.arcaneDescription}</p>
        </div>

        {/* Goddess Container */}
        <div className="card-container goddess-card">
          <img 
            src={`/goddess/${card.id}.png`} 
            alt={card.goddessName} 
            className="card-image" 
          />
          <h2 className="card-title">{card.goddessName}</h2>
          <p className="card-description goddess-description">{card.goddessDescription}</p>
        </div>
      </div>

      <div className="back-btn-container">
        <button onClick={() => navigate(-1)} className="back-btn">⬅ Volver</button>
      </div>
    </div>
  );
}

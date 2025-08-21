import { useEffect, useState } from "react";
import { getAllCards } from "../services/tarotServices"; // ajusta la ruta según tu proyecto


export default function EchaTusCartas() {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  // Llamar al servicio al montar el componente
  useEffect(() => {
    async function fetchCards() {
      const data = await getAllCards();
      setCards(data);
    }
    fetchCards();
  }, []);

  // Función para elegir carta
  const handleSelectCard = (card) => {
    if (selectedCards.length < 3 && !selectedCards.includes(card)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  // Reiniciar la selección
  const resetSelection = () => {
    setSelectedCards([]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Echa tus cartas</h2>

      {/* Si ya eligió 3, mostramos el resultado */}
      {selectedCards.length === 3 ? (
        <div>
          <h3 className="text-xl font-semibold mb-2">Tus cartas elegidas:</h3>
          <div className="grid grid-cols-3 gap-4">
            {selectedCards.map((card) => (
              <div key={card.id} className="border p-4 rounded shadow">
                <p className="font-bold">{card.Arcane}</p>
              </div>
            ))}
          </div>
          <button
            onClick={resetSelection}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Volver a echar
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-lg mb-2">Elige 3 cartas:</h3>
          <div className="grid grid-cols-4 gap-4">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleSelectCard(card)}
                className="border p-4 rounded hover:bg-gray-200"
              >
                {card.Arcane}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

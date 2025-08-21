const URL_API = "https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot";


// Método GET para leer todas las cartas
export async function getAllCards() {
  try {
    const response = await fetch(URL_API); 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener las cartas:", error);
  }
}

// Método GET para obtener una sola carta por ID
export async function getOneCard(id) {
  try {
    const response = await fetch(`${URL_API}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener la carta con ID ${id}:`, error);
  }
}

// Método POST para crear una nueva carta
export async function createCard(cardData) {
  try {
    const response = await fetch(URL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cardData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al crear la carta:", error);
  }
}

// Método PUT para actualizar una carta existente
export async function updateCard(id, updatedData) {
  try {
    const response = await fetch(`${URL_API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al actualizar la carta con ID ${id}:`, error);
  }
}

// Método DELETE para eliminar una carta
export async function deleteCard(id) {
  try {
    const response = await fetch(`${URL_API}/${id}`, {
      method: "DELETE"
    });
    if (response.ok) {
      console.log(`Carta con ID ${id} eliminada correctamente.`);
    } else {
      console.error(`Error al eliminar la carta con ID ${id}`);
    }
  } catch (error) {
    console.error(`Error al eliminar la carta con ID ${id}:`, error);
  }
}

// Método POST para contacto (puedes crear otro endpoint en MockAPI, ej: /contact)
export async function createContact(contactData) {
  try {
    const response = await fetch("https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al enviar el mensaje de contacto:", error);
    throw error;
  }
}

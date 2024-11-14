const URL_API = "http://localhost:3001/api/v1";

// Fonction asynchrone pour récupérer les comptes de l'utilisateur
export async function fetchAccounts(token, userId) {
  const response = await fetch(`${URL_API}/user/${userId}/accounts`, {
    method: "GET", // Méthode GET pour récupérer les comptes
    headers: {
      "Content-Type": "application/json", // Type de contenu attendu
      Accept: "application/json, text/plain, */*", // Acceptation des formats JSON et texte
      Authorization: `Bearer ${token}`, // Token d'authentification
    },
  });
  return await response.json(); // Retourne la réponse sous forme d'objet JSON
}

// Fonction asynchrone pour récupérer les transactions d'un compte spécifique
export async function fetchTransactions(token, accountId) {
  const response = await fetch(
    `${URL_API}/accounts/${accountId}/transactions`,
    {
      method: "GET", // Méthode GET pour récupérer les transactions du compte
      headers: {
        "Content-Type": "application/json", // Type de contenu attendu
        Accept: "application/json, text/plain, */*", // Acceptation des formats JSON et texte
        Authorization: `Bearer ${token}`, // Token d'authentification
      },
    }
  );
  return await response.json(); // Retourne la réponse sous forme d'objet JSON
}

// Fonction asynchrone pour modifier la catégorie d'une transaction spécifique
export async function updateTransactionCategory(
  token,
  transactionId,
  newCategory
) {
  const response = await fetch(
    `${URL_API}/transactions/${transactionId}/category`,
    {
      method: "PATCH", // Méthode PATCH pour modifier la catégorie
      headers: {
        Accept: "application/json, text/plain, */*", // Acceptation des formats JSON et texte
        "Content-type": "application/json", // Spécifie que le corps de la requête est au format JSON
        Authorization: `Bearer ${token}`, // Token d'authentification
      },
      body: JSON.stringify({
        category: newCategory, // Nouveau nom de catégorie envoyé dans le corps de la requête
      }),
    }
  );
  return await response.json(); // Retourne la réponse sous forme d'objet JSON
}

// Fonction asynchrone pour modifier la note d'une transaction spécifique
export async function updateTransactionNote(token, transactionId, newNote) {
  const response = await fetch(
    `${URL_API}/transactions/${transactionId}/note`,
    {
      method: "PATCH", // Méthode PATCH pour modifier la note
      headers: {
        Accept: "application/json, text/plain, */*", // Acceptation des formats JSON et texte
        "Content-type": "application/json", // Spécifie que le corps de la requête est au format JSON
        Authorization: `Bearer ${token}`, // Token d'authentification
      },
      body: JSON.stringify({
        note: newNote, // Nouvelle note envoyée dans le corps de la requête
      }),
    }
  );
  return await response.json(); // Retourne la réponse sous forme d'objet JSON
}

// Fonction asynchrone pour supprimer la note d'une transaction spécifique
export async function deleteTransactionNote(token, transactionId) {
  const response = await fetch(
    `${URL_API}/transactions/${transactionId}/note`,
    {
      method: "DELETE", // Méthode DELETE pour supprimer la note
      headers: {
        Accept: "application/json, text/plain, */*", // Acceptation des formats JSON et texte
        "Content-Type": "application/json", // Type de contenu attendu
        Authorization: `Bearer ${token}`, // Token d'authentification
      },
    }
  );
  return await response.json(); // Retourne la réponse sous forme d'objet JSON
}

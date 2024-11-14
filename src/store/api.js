// Définition de l'URL de base de l'API pour les requêtes réseau
const URL_API = "http://localhost:3001/api/v1";

// Fonction asynchrone pour authentifier l'utilisateur
export async function fetchLogin(props) {
  // Envoi d'une requête POST au serveur pour la connexion de l'utilisateur
  const response = await fetch(`${URL_API}/user/login`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*", // Acceptation des réponses en JSON, texte brut ou autre
      "Content-Type": "application/json", // Envoi des données sous forme JSON
    },
    body: JSON.stringify({
      email: props.email, // Adresse e-mail de l'utilisateur
      password: props.password, // Mot de passe de l'utilisateur
    }),
  });
  // Retourne la réponse en JSON
  return await response.json();
}

// Fonction asynchrone pour récupérer les informations de profil de l'utilisateur
export async function userProfile(token) {
  // Envoi d'une requête POST pour obtenir le profil utilisateur en utilisant le token d'authentification
  const response = await fetch(`${URL_API}/user/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Spécifie le type de contenu pour la requête
      Accept: "application/json", // Accepte une réponse en JSON
      Authorization: `Bearer ${token}`, // Envoi du token d'authentification pour sécuriser la requête
    },
  });
  // Retourne la réponse en JSON contenant les informations de l'utilisateur
  return await response.json();
}

// Fonction asynchrone pour mettre à jour le nom d'utilisateur
export async function userEditProfile(token, username) {
  // Envoi d'une requête PUT pour modifier le nom d'utilisateur en utilisant le token d'authentification
  const response = await fetch(`${URL_API}/user/profile`, {
    method: "PUT",
    headers: {
      Accept: "application/json", // Accepte une réponse en JSON
      "Content-type": "application/json", // Envoi des données sous forme JSON
      Authorization: `Bearer ${token}`, // Utilisation du token d'authentification pour sécuriser la requête
    },
    body: JSON.stringify({
      userName: username, // Nouveau nom d'utilisateur
    }),
  });
  // Retourne la réponse en JSON pour confirmer la mise à jour
  return await response.json();
}

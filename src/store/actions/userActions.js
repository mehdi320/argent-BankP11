// Définition des types d'actions, utilisés pour identifier le type de chaque action dans les reducers
export const SET_TOKEN = "SET_TOKEN"; // Type d'action pour définir le token
export const SET_USER = "SET_USER"; // Type d'action pour définir les informations de l'utilisateur
export const SET_LOGIN = "SET_LOGIN"; // Type d'action pour définir l'état de connexion

// Action pour définir l'état de connexion (true ou false)
export const setLogin = (isLogin) => ({
  type: SET_LOGIN, // Type de l'action
  payload: isLogin, // Charge utile : l'état de connexion
});

// Action pour définir le token d'authentification de l'utilisateur
export const setToken = (token) => ({
  type: SET_TOKEN, // Type de l'action
  payload: token, // Charge utile : le token d'authentification
});

// Action pour définir les informations de l'utilisateur
export const setUser = (user) => ({
  type: SET_USER, // Type de l'action
  payload: user, // Charge utile : les données de l'utilisateur
});

// Importation des types d'actions définis dans userActions
import { SET_LOGIN, SET_TOKEN, SET_USER } from "../actions/userActions";

// Définition de l'état initial pour le reducer utilisateur
const initialState = {
  dataUser: "", // Contiendra les informations de l'utilisateur
  token: null, // Contiendra le token d'authentification de l'utilisateur
  isLogin: false, // Indique si l'utilisateur est connecté (false par défaut)
};

// Définir le reducer utilisateur, qui gère les actions liées aux informations de l'utilisateur
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Si l'action est de type SET_TOKEN
    case SET_TOKEN:
      return {
        ...state, // Conserve les autres propriétés de l'état actuel
        token: action.payload, // Met à jour le token avec la valeur de l'action
      };

    // Si l'action est de type SET_USER
    case SET_USER:
      return {
        ...state, // Conserve les autres propriétés de l'état actuel
        dataUser: action.payload, // Met à jour les données utilisateur
      };

    // Si l'action est de type SET_LOGIN
    case SET_LOGIN:
      return {
        ...state, // Conserve les autres propriétés de l'état actuel
        isLogin: action.payload, // Met à jour l'état de connexion (true ou false)
      };

    // Si l'action n'est d'aucun des types ci-dessus, retourne l'état actuel
    default:
      return state;
  }
};

// Exportation du reducer pour être utilisé dans la configuration du store
export default userReducer;

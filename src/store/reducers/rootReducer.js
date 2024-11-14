// Importation de combineReducers de Redux pour combiner plusieurs reducers
import { combineReducers } from "redux";

// Importation du reducer utilisateur
import userReducer from "./userReducers";

// Combinaison de tous les reducers en un seul pour le store Redux
export default combineReducers({
  // Associe le reducer utilisateur au state "user" dans l'état global
  user: userReducer,
});

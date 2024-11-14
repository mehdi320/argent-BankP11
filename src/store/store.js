// Importation de configureStore depuis Redux Toolkit pour créer le store
import { configureStore } from "@reduxjs/toolkit";

// Importation du reducer principal combiné
import rootReducer from "./reducers/rootReducer";

// Importation des modules de persistance pour sauvegarder le state dans le localStorage
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Utilisation de localStorage comme stockage par défaut

// Configuration pour la persistance des données Redux
const persistConfig = {
  key: "root", // Clé racine pour le state persisté
  storage, // Définir le stockage à utiliser (ici, localStorage)
};

// Application de la configuration de persistance au reducer principal
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store Redux avec Redux Toolkit
const store = configureStore({
  reducer: persistedReducer, // Utilisation du reducer persistant comme reducer principal
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactivation du check de serialisation pour la compatibilité avec la persistance
    }),
  devTools: true, // Activation des outils de développement Redux DevTools
});

// Création d'un persistor pour gérer la persistance du store
const persistor = persistStore(store);

// Exportation du store et du persistor pour être utilisés dans l'application
export { store, persistor };

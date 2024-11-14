// Importation des modules React pour créer des composants et pour rendre l'application sur la page
import React from "react";
import ReactDOM from "react-dom/client";

// Importation des modules et composants nécessaires à Redux
import { Provider } from "react-redux"; // Fournit le store Redux à tous les composants enfant
import { PersistGate } from "redux-persist/integration/react"; // Assure la persistance du store
import { store, persistor } from "./store/store"; // Importation du store et du persistor configurés

// Importation du composant principal de l'application et des styles
import App from "./App.jsx";
import "./style/style.scss";

// Création de la racine React, ciblant l'élément "root" dans le HTML pour rendre l'application
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode> {/* Mode strict pour détecter les problèmes potentiels en développement */}
        {/* Le composant Provider enveloppe l'application et permet à tous les composants enfants d'accéder au store Redux */}
        <Provider store={store}>
            {/* PersistGate attend que le state Redux persistant soit chargé avant d'afficher l'application */}
            <PersistGate loading={null} persistor={persistor}>
                {/* Le composant App représente le contenu de l'application */}
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
// Importation des styles spécifiques au composant NotFound
import "./NotFound.scss";
// Importation du composant Button pour afficher un bouton de retour
import Button from "../button/Button";
// Importation du composant Link de React Router pour gérer la navigation
import { Link } from "react-router-dom";

// Définition du composant NotFound
export default function NotFound() {
    return (
        <div className="error-container bg-dark">
            {/* Titre de l'erreur affichant le code 404 */}
            <h1 className="error-title">404</h1>
            {/* Message d'erreur indiquant que la page n'a pas été trouvée */}
            <p className="error-text">Sorry, we couldn&apos;t find this page.</p>
            {/* Lien permettant de revenir à la page d'accueil */}
            <Link to="/">
                {/* Le bouton "Back to Homepage" redirige l'utilisateur vers la page d'accueil */}
                <Button>Back to Homepage</Button>
            </Link>
        </div>
    );
}

// Importation des dépendances nécessaires
import PropTypes from "prop-types";
import "./Button.scss";

// Composant Button permettant d'afficher un bouton
export default function Button({ children }) {
    return (
        // Wrapper pour le bouton avec la classe 'cta' pour le style
        <div className="transaction-content-wrapper cta">
            {/* Bouton avec du contenu dynamique passé via 'children' */}
            <button className="transaction-button">{children}</button>
        </div>
    );
}

// Définition des PropTypes pour le composant afin de valider les props
Button.propTypes = {
    children: PropTypes.node.isRequired, // 'children' doit être un élément React valide
};

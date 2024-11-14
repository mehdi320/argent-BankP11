// Importation des dépendances nécessaires
import "./EditName.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import { userEditProfile } from "../../store/api";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/actions/userActions";

// Composant EditName permettant d'éditer les informations utilisateur
export default function EditName({ setEdit }) {
    // Initialisation de l'état local pour le nom d'utilisateur
    const [username, getUsernameChange] = useState("");

    // Définition du dispatcher Redux
    const dispatch = useDispatch();

    // Récupération des informations de l'utilisateur depuis le store
    const token = useSelector((state) => state.user.token);
    const userName = useSelector((state) => state.user.dataUser.userName);
    const firstName = useSelector((state) => state.user.dataUser.firstName);
    const lastName = useSelector((state) => state.user.dataUser.lastName);

    // Fonction pour enregistrer les changements d'informations utilisateur
    async function onSave(e) {
        e.preventDefault(); // Empêche le rechargement de la page
        try {
            // Appel à l'API pour mettre à jour le profil utilisateur
            const response = await userEditProfile(token, username);
            console.log(response);
            if (response.status === 200) {
                // Si la mise à jour réussie, mettre à jour le store Redux avec les nouvelles données
                dispatch(setUser(response.body));
                setEdit(false); // Fermer le formulaire d'édition
            }
        } catch (error) {
            console.log(error); // Enregistrer les erreurs dans la console
        }
    }

    // Fonction pour annuler l'édition et revenir à l'état précédent
    function cancel(e) {
        e.preventDefault(); // Empêche le rechargement de la page
        setEdit(false); // Fermer le formulaire d'édition
    }

    return (
        // Formulaire d'édition des informations utilisateur
        <form className="form-edit">
            <h2>Edit user info</h2>

            {/* Champ de saisie pour le nom d'utilisateur */}
            <div className="input-edit">
                <label htmlFor="username">User name :</label>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => getUsernameChange(e.target.value)}
                    required
                    placeholder={userName}
                />
            </div>

            {/* Champ de saisie pour le prénom (désactivé) */}
            <div className="input-edit">
                <label htmlFor="firstname">First name :</label>
                <input type="text" id="firstname" disabled placeholder={firstName} />
            </div>

            {/* Champ de saisie pour le nom de famille (désactivé) */}
            <div className="input-edit">
                <label htmlFor="lastname">Last name :</label>
                <input type="text" id="lastname" disabled placeholder={lastName} />
            </div>

            {/* Boutons d'enregistrement et d'annulation */}
            <div className="btn-edit">
                <button onClick={onSave}>Save</button>
                <button onClick={cancel}>Cancel</button>
            </div>
        </form>
    );
}

// Définition des PropTypes pour le composant
EditName.propTypes = {
    setEdit: PropTypes.func.isRequired,
};

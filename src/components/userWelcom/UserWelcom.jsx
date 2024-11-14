// Importation de useState pour gérer l'état local du composant
import { useState } from "react";
// Importation de useSelector pour accéder à l'état global Redux
import { useSelector } from "react-redux";
// Importation du composant EditName qui permet de modifier le nom d'utilisateur
import EditName from "../editName/EditName";

// Importation des styles spécifiques au composant UserWelcom
import "./UserWelcom.scss";

// Définition du composant UserWelcom
export default function UserWelcom() {
    // Définition de l'état local 'edit' pour savoir si l'utilisateur veut modifier son nom
    const [edit, setEdit] = useState(false);

    // Accès au nom d'utilisateur depuis le store Redux
    const userName = useSelector((state) => state.user.dataUser.userName);

    return (
        <div className="header">
            {/* Si l'utilisateur est en mode édition, afficher le composant EditName */}
            {edit ? (
                <EditName setEdit={setEdit} /> // Le composant EditName permet de changer le nom
            ) : (
                <>
                    {/* Si l'utilisateur n'est pas en mode édition, afficher un message de bienvenue */}
                    <h1>
                        Welcom back
                        <br />
                        {userName}!
                    </h1>
                    {/* Bouton pour activer le mode édition */}
                    <button className="edit-button" onClick={() => setEdit(true)}>
                        Edit Name
                    </button>
                </>
            )}
        </div>
    );
}

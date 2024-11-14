// Importation du composant Transaction pour afficher chaque transaction
import Transaction from "../../components/transaction/Transaction";

// Importation du composant UserWelcom pour afficher le message de bienvenue de l'utilisateur
import UserWelcom from "../../components/userWelcom/UserWelcom";

// Importation de la liste des transactions depuis un fichier constants
import { transaction } from "../../constants/constants";

// Importation des styles pour le composant UserLogin
import "./UserLogin.scss";

// Définition du composant UserLogin
export default function UserLogin() {
    return (
        <main className="bg-dark"> {/* Définition de la couleur de fond principale */}
            <UserWelcom /> {/* Affiche le composant UserWelcom */}
            <h2 className="sr-only">Accounts</h2> {/* Titre pour accessibilité, caché visuellement */}
            {transaction.map((transaction, index) => (
                // Boucle sur chaque transaction et rend un composant Transaction pour chaque entrée
                <Transaction
                    key={index}                 // Clé unique pour chaque élément de la liste
                    title={transaction.title}    // Titre de la transaction
                    amount={transaction.amount}  // Montant de la transaction
                    description={transaction.description} // Description de la transaction
                />
            ))}
        </main>
    );
}

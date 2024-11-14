// Importation du composant Button pour l'utiliser dans la transaction
import Button from "../button/Button";
// Importation des styles spécifiques au composant Transaction
import "./Transaction.scss";

// Définition du composant Transaction
export default function Transaction(children) {
    return (
        <section className="transaction">
            {/* Conteneur principal de la transaction */}
            <div className="transaction-content-wrapper">
                {/* Affichage du titre de la transaction */}
                <h3 className="transaction-title">{children.title}</h3>
                {/* Affichage du montant de la transaction */}
                <p className="transaction-amount">{children.amount}</p>
                {/* Affichage de la description de la transaction */}
                <p className="transaction-amount-description">{children.description}</p>
            </div>
            {/* Affichage d'un bouton pour visualiser les transactions */}
            <Button>View transactions</Button>
        </section>
    );
}

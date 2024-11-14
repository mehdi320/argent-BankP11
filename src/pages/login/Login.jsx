// Importation du composant Form pour le formulaire de connexion
import Form from "../../components/form/Form";

// Importation des styles spécifiques au composant Login
import "./Login.scss";

// Définition du composant Login
export default function Login() {
    return (
        <main className="main bg-dark"> {/* Section principale avec un fond sombre */}
            <section className="sign-in-content"> {/* Section contenant le contenu de connexion */}
                <i className="fa fa-user-circle sign-in-icon"></i> {/* Icône utilisateur */}
                <h1>Sign In</h1> {/* Titre de la page de connexion */}
                <Form /> {/* Rendu du formulaire de connexion */}
            </section>
        </main>
    );
}

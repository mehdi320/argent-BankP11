// Importation des modules nécessaires
import { useState } from "react"; // Pour gérer l'état local
import { fetchLogin, userProfile } from "../../store/api"; // API pour la connexion et récupération du profil utilisateur
import { useDispatch } from "react-redux"; // Pour envoyer des actions Redux
import { setLogin, setToken, setUser } from "../../store/actions/userActions"; // Actions Redux pour gérer l'état de l'utilisateur
import { useNavigate } from "react-router-dom"; // Pour la navigation entre les pages

// Importation du fichier de styles spécifique au formulaire
import "./Form.scss";

export default function Form() {
    // Déclaration des états locaux du formulaire
    const [email, setEmail] = useState(localStorage.getItem("email") || ""); // Email de l'utilisateur, récupéré depuis localStorage si disponible
    const [password, setPassword] = useState(localStorage.getItem("password") || ""); // Mot de passe de l'utilisateur, récupéré depuis localStorage
    const [rememberMe, setRememberMe] = useState(localStorage.getItem("rememberMe") === "true"); // Option "Se souvenir de moi"
    const [errorLoginMessage, setErrorLoginMessage] = useState(false); // Message d'erreur en cas de mauvais identifiants

    // Utilisation des hooks Redux pour dispatcher les actions et naviguer
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fonction de gestion de l'envoi du formulaire
    async function handleSubmit(e) {
        e.preventDefault(); // Empêche le comportement par défaut du formulaire

        try {
            // Tentative de connexion de l'utilisateur via l'API
            const response = await fetchLogin({
                email: email,
                password: password,
            });

            // Si la connexion est réussie (status 200)
            if (response.status === 200) {
                // Mise à jour de l'état global avec les informations de l'utilisateur
                dispatch(setLogin(true));
                dispatch(setToken(response.body.token));

                // Récupération du profil de l'utilisateur avec le token
                const profile = await userProfile(response.body.token);
                const data = await profile.body;
                dispatch(setUser(data));

                // Redirection vers la page utilisateur après connexion
                navigate("/userLogin");

                // Sauvegarde des informations de connexion dans localStorage si l'utilisateur choisit "Se souvenir de moi"
                if (rememberMe) {
                    localStorage.setItem("email", email);
                    localStorage.setItem("password", password);
                    localStorage.setItem("rememberMe", "true");
                } else {
                    localStorage.removeItem("email");
                    localStorage.removeItem("password");
                    localStorage.setItem("rememberMe", "false");
                }
            }

            // Si la connexion échoue (status 400)
            if (response.status === 400) {
                setErrorLoginMessage(true); // Affichage du message d'erreur
                navigate("/login"); // Redirection vers la page de connexion
            }
        } catch (error) {
            console.log(error); // Affichage des erreurs éventuelles dans la console
        }
    }

    // Déclaration du message d'erreur
    let errorMessage = null;
    if (errorLoginMessage) {
        errorMessage = <p style={{ color: "red" }}>Error in Email or password! Please try again</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Champ email */}
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'état local pour l'email
                    required
                />
            </div>
            {/* Champ mot de passe */}
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Mise à jour de l'état local pour le mot de passe
                    required
                />
            </div>
            {/* Option "Se souvenir de moi" */}
            <div className="input-remember">
                <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)} // Mise à jour de l'état local pour l'option "Se souvenir de moi"
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* Bouton de soumission */}
            <button type="submit" className="sign-in-button">
                Sign in
            </button>
            {/* Affichage du message d'erreur si nécessaire */}
            {errorMessage}
        </form>
    );
}

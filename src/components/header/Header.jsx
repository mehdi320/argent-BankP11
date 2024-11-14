// Importation des modules nécessaires
import { Link, useNavigate } from "react-router-dom"; // Navigation et gestion des liens avec React Router
import { useDispatch, useSelector } from "react-redux"; // Pour gérer l'état global avec Redux
import { setLogin, setToken, setUser } from "../../store/actions/userActions"; // Actions Redux pour gérer l'état de l'utilisateur
import Logo from "../logo/Logo"; // Composant Logo pour afficher le logo de l'application

// Importation du fichier de styles spécifique au Header
import "./Header.scss";

// Définition du composant Header
export default function Header() {
    // Utilisation de useSelector pour récupérer l'état global concernant la connexion de l'utilisateur
    const isLogged = useSelector((state) => state.user.isLogin);
    const userName = useSelector((state) => state.user.dataUser.userName);

    // Variable pour contenir les options de connexion/déconnexion
    let logOption = null;

    // Récupération des fonctions dispatch et navigate
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fonction pour se déconnecter
    const logout = () => {
        // Dispatch des actions pour mettre à jour l'état global lors de la déconnexion
        dispatch(setLogin(false));
        dispatch(setToken(null));
        dispatch(setUser("")); // Réinitialisation des informations utilisateur
        // Redirection vers la page d'accueil après la déconnexion
        navigate("/");
    };

    // Si l'utilisateur n'est pas connecté, afficher le lien vers la page de connexion
    if (isLogged === false) {
        logOption = (
            <Link to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
        );
    }

    // Si l'utilisateur est connecté, afficher les options de connexion/déconnexion
    if (isLogged === true) {
        logOption = (
            <div>
                {/* Lien vers la page de l'utilisateur connecté avec son nom */}
                <Link to="/userLogin" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    <span className="main-nav-name">{userName}</span>
                </Link>
                {/* Bouton de déconnexion */}
                <Link to="/">
                    <button className="main-nav-item btn-logout" onClick={logout}>
                        <i className="fa fa-sign-out"></i>
                        Logout
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <header>
            <nav className="main-nav">
                {/* Affichage du logo */}
                <Logo />
                {/* Affichage de l'option de connexion/déconnexion en fonction de l'état de connexion */}
                {logOption}
            </nav>
        </header>
    );
}

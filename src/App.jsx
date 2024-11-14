// Importation des modules de routing de React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importation des différentes pages et composants
import Home from "./pages/home/Home"; // Page d'accueil
import Login from "./pages/login/Login"; // Page de connexion (admin ou autre utilisateur)
import UserLogin from "./pages/userLogin/UserLogin"; // Page de connexion pour les utilisateurs spécifiques
import Header from "./components/header/Header"; // Composant d'en-tête affiché sur toutes les pages
import Footer from "./components/footer/Footer"; // Composant de pied de page affiché sur toutes les pages
import NotFound from "./components/notFound/NotFound"; // Page affichée si la route n'existe pas (404)

function App() {
    return (
        // Router englobe l'application pour permettre la navigation entre les différentes pages
        <Router>
            {/* Structure principale de l'application */}
            <div className="page-content">
                {/* Header est le composant d'en-tête, affiché sur chaque page */}
                <Header />

                {/* Routes définit les différentes routes de l'application */}
                <Routes>
                    {/* Route vers la page d'accueil */}
                    <Route path="/" element={<Home />} />

                    {/* Route vers la page de connexion générale */}
                    <Route path="/login" element={<Login />} />

                    {/* Route vers la page de connexion utilisateur spécifique */}
                    <Route path="/userLogin" element={<UserLogin />} />

                    {/* Route pour toutes les URL non définies, affiche une page "Not Found" */}
                    <Route path="*" element={<NotFound />} />
                </Routes>

                {/* Footer est le composant de pied de page, affiché sur chaque page */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
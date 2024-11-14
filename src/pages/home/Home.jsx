// Importation du composant HeroBanner pour afficher la bannière principale de la page d'accueil
import HeroBanner from "../../components/heroBanner/HeroBanner";

// Importation du composant Features pour afficher chaque fonctionnalité de la page d'accueil
import Features from "../../components/features/Features";

// Importation du tableau de données des fonctionnalités depuis le fichier constants
import { features } from "../../constants/constants";

// Importation des styles spécifiques à la page d'accueil
import "./Home.scss";

// Définition du composant Home
export default function Home() {
    return (
        <main>
            <HeroBanner /> {/* Rendu de la bannière principale */}

            <section className="features"> {/* Section des fonctionnalités */}
                <h2 className="sr-only">Features</h2> {/* Titre pour accessibilité, caché visuellement */}

                {/* Boucle sur le tableau features et rend un composant Features pour chaque élément */}
                {features.map((e, index) => (
                    <Features
                        image={e.image}          // Image de la fonctionnalité
                        alt={e.alt}              // Texte alternatif pour l'image
                        title={e.title}          // Titre de la fonctionnalité
                        description={e.description} // Description de la fonctionnalité
                        key={index}              // Clé unique pour chaque élément de la liste
                    />
                ))}
            </section>
        </main>
    );
}

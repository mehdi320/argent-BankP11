import "./Features.scss";

// Le composant Features reçoit les propriétés de l'élément parent
export default function Features(children) {
    return (
        <div className="feature-item">
            {/* Affiche l'icône de la fonctionnalité avec son texte alternatif */}
            <img className="feature-icon" src={children.image} alt={children.alt} />

            {/* Titre de la fonctionnalité */}
            <h3 className="feature-item-title">{children.title}</h3>

            {/* Description de la fonctionnalité */}
            <p>{children.description}</p>
        </div>
    );
}

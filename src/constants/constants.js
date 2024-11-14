// Importation des images utilisées dans les fonctionnalités et le logo
import iconChat from "../assets/icon-chat.webp";
import iconMoney from "../assets/icon-money.webp";
import iconSecurity from "../assets/icon-security.webp";
import logoArgentBant from "../assets/argentBankLogo.webp";

// Définition d'un tableau de données pour le logo Argent Bank
export const pictures = [
  {
    image: logoArgentBant, // Chemin de l'image du logo
    alt: "Argent Bank Logo", // Texte alternatif pour l'image
  },
];

// Définition d'un tableau de données pour les fonctionnalités de la banque
export const features = [
  {
    image: iconChat, // Chemin de l'image représentant le chat
    alt: "Icon Chat", // Texte alternatif pour l'image
    title: `You are our #1 priority`, // Titre de la fonctionnalité
    description: `Need to talk to a representative? You can get in touch through our 
24/7 chat or through a phone call in less than 5 minutes.`, // Description de la fonctionnalité
  },
  {
    image: iconMoney, // Chemin de l'image représentant les économies
    alt: "Icon Money", // Texte alternatif pour l'image
    title: `More savings means higher rates`, // Titre de la fonctionnalité
    description: `The more you save with us, the higher your interest rate will be!`, // Description de la fonctionnalité
  },
  {
    image: iconSecurity, // Chemin de l'image représentant la sécurité
    alt: "Icon Security", // Texte alternatif pour l'image
    title: `Security you can trust`, // Titre de la fonctionnalité
    description: `We use top of the line encryption to make sure your data and money 
is always safe.`, // Description de la fonctionnalité
  },
];

// Définition d'un tableau de données pour les transactions bancaires
export const transaction = [
  {
    title: `Argent Bank Checking (x8349)`, // Titre de la transaction (compte courant)
    amount: `$2,082.79`, // Montant disponible sur le compte courant
    description: `Available Balance`, // Description du type de solde
  },
  {
    title: `Argent Bank Savings (x6712)`, // Titre de la transaction (compte épargne)
    amount: `$10,928.42`, // Montant disponible sur le compte épargne
    description: `Available Balance`, // Description du type de solde
  },
  {
    title: `Argent Bank Credit Card (x8349)`, // Titre de la transaction (carte de crédit)
    amount: `$184.30`, // Solde actuel sur la carte de crédit
    description: `Current Balance`, // Description du type de solde
  },
];

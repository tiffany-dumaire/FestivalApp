/**
 * Modèle pour le jeu
 */
export interface Game {
    idJeu: number;
    nomJeu: string;
    nbJoueurMin: number;
    nbJoueurMax: number;
    ageMin: number;
    duree: number;
    lienNotice: Text;
    idTypeJeu: number;
    idEditeur: number;
}


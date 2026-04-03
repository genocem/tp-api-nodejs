// utils/calculNote.js

function additionner(a, b) {
    return a + b;
}

/**
 * Vérifie qu'une valeur est une moyenne valide (nombre entre 0 et 20).
 * @returns {boolean}
 */
function isValidMoyenne(valeur) {
    if (typeof valeur !== 'number' || isNaN(valeur)) return false;
    return valeur >= 0 && valeur <= 20;
}

function calculMention(moyenne) {
    if (moyenne >= 16) return 'Excellent';
    if (moyenne >= 14) return 'Bien';
    if (moyenne >= 12) return 'Assez Bien';
    if (moyenne >= 10) return 'Passable';
    return 'Insuffisant';
}

module.exports = { additionner, isValidMoyenne, calculMention };
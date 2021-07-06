import { heros } from '../data/heros';

/**
 * 
 * @param {string} term 
 * @returns 
 */
export const getHerosByFilter = (term = '') => {

    if (term.trim().length === 0) {
        return [];
    }

    const search = term.toLowerCase();

    return heros.filter(h => h.superhero.toLowerCase().includes(search));

};
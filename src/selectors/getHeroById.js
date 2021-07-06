import { heros } from '../data/heros';

export const getHeroById = (id) => {
    return heros.find(h => h.id === id);
};
import { heros } from '../data/heros';

export const getHerosByPublisher = (publisher) => {

    const publishers = ['DC Comics', 'Marvel Comics'];

    if (!publishers.includes(publisher)) {
        throw new Error(`Publisher '${publisher}' wasn't found.`);
    }

    return heros.filter(h => h.publisher === publisher);

};
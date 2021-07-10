let heroImages = () => ({ default: '' });
let loginImage = () => ({ default: '' });

try {
    heroImages = require.context('../assets/heros', true);
    loginImage = require.context('../assets');
} catch (err) { }

export const getHeroImage = image => (heroImages(`./${image}`).default || '.');
export const getLoginImage = () => (loginImage(`./login.png`).default || '.');
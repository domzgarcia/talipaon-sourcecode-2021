import homepageEventSection from './homepageEventSection';
const home = {
    init: () => {
        console.log('[init] ~ home');
    },
    finalize: () => {
        // event section
        console.log('home.js called');
        homepageEventSection();
    }
};
export default home;
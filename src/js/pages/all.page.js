
const common = {
    init: () => {
        console.log('Common');
    },
    finalize: (bootstrap) => { 
        console.log('all.page.js called');
    }
};

export default common;

const YOUR_PAGE = {
    init: () => {
        console.log('[init] ~ YOUR_PAGE');
    },
    finalize: (bootstrap) => {
        const el = document.getElementById('YOUR_PAGE_MODAL_REFERENCE_ID');
        const modal = new bootstrap.Modal(el, {keyboard: false});
        
        $('.--BUTTON-modal-onSave').on('click', () => {
            // NOTE: May create ajax request ...
            modal.hide();
        });
    }
};
export default YOUR_PAGE;
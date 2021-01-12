const searchBySearchQuery = () => {
    let query = document.querySelector('#searchQuery').value;
    window.open(`https://www.youtube.com/results?search_query=${query}`);
};

const onKeypressEvent = (e) => {
    if (e.key === 'Enter') searchBySearchQuery();
};

onClickEventListenerStart = () => {
    document
        .querySelector('#btnSearch')
        .addEventListener('click', searchBySearchQuery);
};

document.addEventListener('DOMContentLoaded', function () {
    onClickEventListenerStart();
    document.addEventListener('keypress', onKeypressEvent);
});

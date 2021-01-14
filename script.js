const searchBySearchQuery = () => {
    let { value: query } = document.querySelector('#searchQuery');
    window.open(`https://www.youtube.com/results?search_query=${query}`);
};

const onKeypressEvent = ({ key }) => {
    if (key === 'Enter') searchBySearchQuery();
};

startOnClickEventListener = () => {
    document
        .querySelector('#btnSearch')
        .addEventListener('click', searchBySearchQuery);
};

document.addEventListener('DOMContentLoaded', function () {
    startOnClickEventListener();
    document.addEventListener('keypress', onKeypressEvent);
});

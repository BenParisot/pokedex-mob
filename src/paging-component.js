const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const currentPage = document.getElementById('current');
const totalPages = document.getElementById('total');

const PER_PAGE = 25;
let currentPageNumber = 1;
previousButton.disabled = currentPageNumber === 1;
currentPage.textContent = currentPageNumber;


export default function loadPaging(totalCount, callback) {
    const totalPageCount = Math.ceil(totalCount / PER_PAGE);
    totalPages.textContent = totalPageCount;
    
    function updatePaging() {
        currentPage.textContent = currentPageNumber;
        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        callback(pagingOptions);
        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;
    } 
    updatePaging();

    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        updatePaging();
    });

    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        updatePaging();
    });
}


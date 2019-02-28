const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const currentPage = document.getElementById('current');
const totalPages = document.getElementById('total');

const PER_PAGE = 25;
let currentPageNumber = 1;
previousButton.disabled = currentPageNumber === 1;
currentPage.textContent = currentPageNumber;


export default function loadPaging(totalCount) {
    const totalPageCount = Math.ceil(totalCount / PER_PAGE);
    totalPages.textContent = totalPageCount;

    nextButton.addEventListener('click', () => {
        //add 1 to current page
        currentPageNumber++;
    
        //set current page text content
        currentPage.textContent = currentPageNumber;
        //make paging options object
        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        console.log(pagingOptions);
        //if current page is total page disable next button
        nextButton.disabled = currentPageNumber === totalPageCount;
        //if current page = 1 disable prev. button
        previousButton.disabled = currentPageNumber === 1;
    });

    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        currentPage.textContent = currentPageNumber;
        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        console.log(pagingOptions);
        nextButton.disabled = currentPageNumber === totalPageCount;
        //if current page = 1 disable prev. button
        previousButton.disabled = currentPageNumber === 1;
    });
}


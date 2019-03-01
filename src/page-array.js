export default function pageArraySplit(array, pagingOptions){
    const page = pagingOptions.page;
    const perPage = pagingOptions.perPage;

    //starting index
    const startingIndex = (page - 1) * perPage;
    //ending index
    const endingIndex = startingIndex + perPage;
    return array.slice(startingIndex, endingIndex);

}
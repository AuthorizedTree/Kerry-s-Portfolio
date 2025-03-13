export const getImageUrl = (path) => {
    //return new URL(`/assets/${path}`, import.meta.url).href;
    /*return `/assets/${path}`;*/
    /*return `/public/assets/${path}`;*/
    return `/src/assets/${path}`;
};
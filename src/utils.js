export const getImageUrl = (path) => {
    //return new URL(`/assets/${path}`, import.meta.url).href;
    /*return `/assets/${path}`;*/
    /*return `/public/assets/${path}`;*/
    const imgUrl = new URL([`../assets/${path}`], import.meta.url).href;
    return imgUrl;
};
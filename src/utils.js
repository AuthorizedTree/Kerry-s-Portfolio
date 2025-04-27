export const getImageUrl = (path) => {
    return new URL([`../assets/${path}`], import.meta.url).href;

    /*
    const images = import.meta.glob('../../assets/nav/*.png', { eager: true });
    const imagePath = `../../assets/nav/${path}`;
    return images[imagePath]?.default;
    */
}
/*
export default function getImageUrl(asset) {
    const assets = import.meta.glob('/assets/${path}', {eager: true});
  
    const getImageUrl = () => {
     if (assets[asset]) {
       return assets[asset].default
     }
    }
  
    return getImageUrl()
}
*/

//export const getImageUrl = (path) => {
    //return new URL(`/assets/${path}`, import.meta.url).href;
    /*return `/assets/${path}`;*/
    /*return `/public/assets/${path}`;*/
    //const path = `/src/assets/${path}`;
    //const modules = import.meta.glob("/assets/*", { eager: true });
    /*const mod = modules[path] as { default: string };*/
    //return mod.default;
    /*
    const imgUrl = new URL([`/assets/${path}`], import.meta.url).href;
    return imgUrl;
    */
//};
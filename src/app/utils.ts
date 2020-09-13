import { Photo } from './models';

export function buildImgSrc(image: Photo, size?: number) {
    const extension = '.jpg';
    let base = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}`;
    if (size) {
        base = `${base}_${size}`;
    }

    return `${base}${extension}`;
}

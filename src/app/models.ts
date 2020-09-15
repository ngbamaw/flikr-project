export interface Photo {
    id: string;
    title: string;
    farm: number;
    secret: number;
    server: number;
    description: { _content: string };
    dateupload: string; // timestamp
    views: string;
    ownername: string;
    longitutde: string;
    latitude: string;
}

export const mockPhoto: Photo = {
    id: '3453',
    title: 'Test photo',
    farm: 1,
    secret: 3334,
    server: 243,
    description: { _content: '' },
    dateupload: '5425454',
    views: '33',
    ownername: 'test',
    longitutde: '44.55',
    latitude: '-22.045',
};

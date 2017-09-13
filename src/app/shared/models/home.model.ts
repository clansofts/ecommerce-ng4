export class HomeModel {
    topSellers: Array<TopSellersModel>;
}

export class TopSellersModel {
    _id: string;
    name: string;
    price: number;
    img: string;
}
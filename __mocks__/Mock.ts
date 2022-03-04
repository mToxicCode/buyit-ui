import {IArticleCard} from "~/types/cardsType";

export default class Mock {
    private static readonly dataSet: any = 
        [
            {name: "Гусь", link: "https://cs8.pikabu.ru/post_img/big/2017/12/16/5/151340587815621584.jpg"},
            {name: "Котик", link: "https://nbnews.com.ua/wp-content/uploads/2020/06/maxresdefault-7.jpg"},
            {name: "Котике", link: "https://static.my-shop.ru/product/3/437/4368197.jpg"},
            // {name: "fsdf", link: "fsdf"},
            // {name: "fsdf", link: "fsdf"},
            // {name: "fsdf", link: "fsdf"},
            // {name: "fsdf", link: "fsdf"},
        ]
    

    public static getArticleCards(cardCount: number): IArticleCard[] {
        let returningValue: IArticleCard[] = [];
        for (let i: number = 0; i < cardCount; i++) {
            let nameLinkPair: any = this.dataSet[i % this.dataSet.length];
            returningValue.push({
                articleId: i,
                priceCurrency: "₽",
                articlePrice: this.getRndInteger(99, 89999),
                articleName: nameLinkPair.name,
                amountInCart: 0,
                imageLink: nameLinkPair.link
            })
        }
        return returningValue;
    }

    private static getRndInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    private static getRndSet(): any {
        let randomNumber = this.getRndInteger(0, this.dataSet.length)
        return this.dataSet[randomNumber];
    }


}

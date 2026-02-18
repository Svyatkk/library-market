export type BooksParam = {
    id: number,
    author: string;
    price: number;
    name: string;
    pageAmount: number;
    publishing: string;
    cover: CoverType;
    language: string;
    popularity: number;
    imgHref: string;
    salarydiscount: boolean,
    timeAdded: string,
    genre: string
    catalog: CatalogEntry[]
    quantityInStorage: number,
    amountInKorzyna: number,
    backgroundImgBook: string
}


export type CatalogSubItem = { name: string };
export type CatalogMainItem = { mainCategory: string; subCategories: CatalogSubItem[] };
export type CatalogEntry = { mainCategory: string; subCategory: string };



export const catalogs: CatalogMainItem[] = [
    {
        mainCategory: "Художня література",
        subCategories: [
            { name: "Сучасна проза" },
            { name: "Класична література" },
            { name: "Фантастика" },
            { name: "Містика і жахи" }
        ]
    },
    {


        mainCategory: "Нонфікшн",
        subCategories: [
            { name: "Історія" },
            { name: "Наука й технології" },
            { name: "Мотивація й саморозвиток" },
            { name: "Мистецтво і культура" }
        ]
    },
    {
        mainCategory: "Розваги, ігри та хобі",
        subCategories: [
            { name: "Настільні ігри" },
            { name: "Карти Таро" },
            { name: "Розмальовки" },
            { name: "Містика і жахи" }
        ]
    },

    {
        mainCategory: "Подарункові видання",
        subCategories: [
            { name: "Класика" },
            { name: "Ілюстровані видання" },
            { name: "Серії книг" },
            { name: "Містика і жахи" }
        ]
    },
    {
        mainCategory: "Література іноземними мовами",
        subCategories: [
            { name: "Художня література" },
            { name: "Нонфікшн" },
            { name: "Дитяча література" },
            { name: "Містика і жахи" }
        ]
    },
];


export enum CoverType {
    Hard = "Тверда",
    Soft = "Мʼяка"
}

export function calcSalary(price: number, amount: number): number {
    return price - (price * amount) / 100
}



export const books: BooksParam[] = [
    {
        id: 1,
        author: "Джордж Орвелл",
        name: "1984",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: CoverType.Hard,
        language: "Українська",
        popularity: 0,
        imgHref: "",
        salarydiscount: true,
        timeAdded: "",
        genre: "Фантастика",
        catalog: [
            { mainCategory: "Художня література", subCategory: "Сучасна проза" }
        ],
        quantityInStorage: 20,
        amountInKorzyna: 0,
        backgroundImgBook: "gray"
    },


    {
        id: 2,
        author: "Джордж Орвелл",
        name: "dif",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: CoverType.Hard,
        language: "Українська",
        popularity: 0,
        imgHref: "",
        salarydiscount: true,
        timeAdded: "",
        genre: "Фантастика",
        catalog: [
            { mainCategory: "Художня література", subCategory: "Фантастика" }
        ],
        quantityInStorage: 20,
        amountInKorzyna: 0,
        backgroundImgBook: "#2A7B9B"


    },

];







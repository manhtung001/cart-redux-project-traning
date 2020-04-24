var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/i/p/iphone-7-plus-128gb-quoc-te-like-new-vang-didongviet_1_1.jpg',
        description : 'do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating : 5
    },
    {
        id : 2,
        name : 'Samsung S8',
        image : 'https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-hh-600x600-600x600.jpg',
        description : 'do samsung sản xuất',
        price : 450,
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        name : 'Oppo F1s',
        image : 'https://cf.shopee.vn/file/6abe287d386204d19485d51d1a8a5244',
        description : 'do china sản xuất',
        price : 40,
        inventory : 20,
        rating : 2
    }
];

const product = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default product;
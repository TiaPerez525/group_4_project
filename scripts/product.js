class Product {
    id;
    imageLink;
    studioName;
    productName;
    price;
    information;
    scale;
    deposit;
    releaseDate;
    note;

    constructor(
        _id,
        _imageLink, 
        _studioName, 
        _productName, 
        _price, 
        _information,
        _scale,
        _deposit,
        _releaseDate,
        _note) 
    {
        this.id = _id;
        this.imageLink = _imageLink;
        this.studioName = _studioName;
        this.productName = _productName;
        this.price = _price;
        this.information = _information;
        this.scale = _scale;
        this.deposit = _deposit;
        this.releaseDate = _releaseDate;
        this.note = _note;
    }
}
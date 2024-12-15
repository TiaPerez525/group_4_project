class Product {
    id;
    studioName;
    productName;
    price;
    information;
    scale;
    deposit;
    releaseDate;
    note;
    showImageLink0;
    showImageLink1;

    constructor(
        _id,
        _studioName, 
        _productName, 
        _price, 
        _information,
        _scale,
        _deposit,
        _releaseDate,
        _note,
        _showImageLink0,
        _showImageLink1) 
    {
        this.id = _id;
        this.studioName = _studioName;
        this.productName = _productName;
        this.price = _price;
        this.information = _information;
        this.scale = _scale;
        this.deposit = _deposit;
        this.releaseDate = _releaseDate;
        this.note = _note;
        this.showImageLink0 = _showImageLink0;
        this.showImageLink1 = _showImageLink1;
    }
}
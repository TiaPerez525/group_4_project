class ViewProduct {
    dataBase;

    Awake() {
        this.dataBase = new DataBase();
        this.dataBase.Awake();
        this.dataBase.AddToFrontLink('../');
        let product = this.dataBase.productList[this.dataBase.displayingProductIndex];
        document.getElementsByClassName('productImage')[0].src = product.imageLink;
        document.getElementsByClassName('productName')[0].innerHTML = product.productName;
        document.getElementsByClassName('studioName')[0].innerHTML = product.studioName;
        let priceString = product.price + 'đ';
        document.getElementsByClassName('price')[0].innerHTML = priceString;
        document.getElementsByClassName('productInformationName')[0].innerHTML = product.information;
        document.getElementsByClassName('productInformationStudioName')[0].innerHTML = product.studioName;
        document.getElementsByClassName('productInformationScale')[0].innerHTML = product.scale;
        document.getElementsByClassName('productInformationPrice')[0].innerHTML = priceString;
        document.getElementsByClassName('productInformationDeposit')[0].innerHTML = product.deposit + 'đ';
        document.getElementsByClassName('productInformationReleaseDate')[0].innerHTML = product.releaseDate;
        document.getElementsByClassName('productInformationNote')[0].innerHTML = product.note;
    }
}

let viewProduct = new ViewProduct();
viewProduct.Awake();

function addToCartButton_onclick() {
    
}
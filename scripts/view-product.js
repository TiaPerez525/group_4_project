function ViewProduct_Awake() {
    DataBase_AddToFrontLink('../');
    var product = DataBase_productList[DataBase_displayingProductIndex];
    document.getElementsByClassName('productImage')[0].src = product.imageLink;
    document.getElementsByClassName('productName')[0].innerHTML = product.productName;
    document.getElementsByClassName('studioName')[0].innerHTML = product.studioName;
    var priceString = product.price + 'đ';
    document.getElementsByClassName('price')[0].innerHTML = priceString;
    document.getElementsByClassName('productInformationName')[0].innerHTML = product.information;
    document.getElementsByClassName('productInformationStudioName')[0].innerHTML = product.studioName;
    document.getElementsByClassName('productInformationScale')[0].innerHTML = product.scale;
    document.getElementsByClassName('productInformationPrice')[0].innerHTML = priceString;
    document.getElementsByClassName('productInformationDeposit')[0].innerHTML = product.deposit + 'đ';
    document.getElementsByClassName('productInformationReleaseDate')[0].innerHTML = product.releaseDate;
    document.getElementsByClassName('productInformationNote')[0].innerHTML = product.note;
}

function addToCartButton_onclick() {
    DataBase_AddBuyingOrder();
}

ViewProduct_Awake();
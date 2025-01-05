class Search {
    dataBase;
    header;
    footer;
    lastProductDisplay;
    productDisplayList = {};
    productDisplayListLength = 0;
    showingProductDisplayList = {};
    showingProductDisplayListLength = 0;

    Awake() {
        this.dataBase = new DataBase();
        this.dataBase.Awake();
        this.header = new Header(false);
        this.header.HandleSetDataBase(this.dataBase);
        let DataBase_productListLength = this.dataBase.GetProductListLength();
        let displayCount = DataBase_productListLength;
        let productDisplayTemplate = document.getElementsByClassName("productDisplay")[0];
        productDisplayTemplate.style.display = 'none';

        for (let i = 0; i < displayCount; i++) {
            let productDisplay = productDisplayTemplate.cloneNode(true);
            this.productDisplayList[this.productDisplayListLength] = productDisplay;
            this.productDisplayListLength++;
            let productDisplayWrapper = document.getElementsByClassName('productDisplayWrapper')[0];
            productDisplayWrapper.appendChild(productDisplay);
            let DataBase_product = this.dataBase.productList[i];
            let imageSrc = DataBase_product.showImageLink0;
            productDisplay.children[0].src = '../' + imageSrc;
            productDisplay.children[1].children[0].innerHTML = DataBase_product.studioName;
            productDisplay.children[1].children[1].innerHTML = DataBase_product.productName;
            productDisplay.children[1].children[2].innerHTML = DataBase_product.price + 'đ';
            productDisplay.setAttribute('onclick', 'search.productDisplay_onclick(' + i + ')');
            productDisplay.setAttribute('onmouseenter', 'productDisplay_onmouseenter(this, ' + i + ')');
            productDisplay.setAttribute('onmouseleave', 'productDisplay_onmouseleave(this, ' + i + ')');
        }

        this.footer = new Footer();
        this.footer.Awake();
    }

    productDisplay_onclick(_index) {
        this.dataBase.HandleSetDisplayingProductIndex(_index);
        window.location.href = 'view-product.html';
    }

    UpdateMargin() {
        this.lastProductDisplay.style.marginRight = 'auto';
        let productDisplayWrapper = document.getElementsByClassName('productDisplayWrapper')[0];
        let wrapperWidth = productDisplayWrapper.getBoundingClientRect().width;
        let productDisplayWidth = 225;
        let maxCount = 5;

        while (productDisplayWidth * maxCount > wrapperWidth) 
            maxCount--;

        let totalMarginWidth =  wrapperWidth - maxCount * productDisplayWidth;
        let marginWidth = totalMarginWidth / (maxCount * 2);
        let productDisplayTop = this.lastProductDisplay.getBoundingClientRect().top;
        let j = this.showingProductDisplayListLength - 1;
        let sameRowCount = 0;

        while (j >= 0 && this.showingProductDisplayList[j].getBoundingClientRect().top == productDisplayTop) {
            sameRowCount++;
            j--;
        }

        let emptyCount = maxCount - sameRowCount;
        this.lastProductDisplay.style.marginRight = emptyCount * productDisplayWidth +  emptyCount * marginWidth * 2 + marginWidth + 'px';
    }

    Update() {
        this.header.Update();
    }

    Search() {
        let input = document.getElementById('searchInput');
        
        if (this.showingProductDisplayListLength > 0) {
            this.lastProductDisplay.style.marginRight = 'auto';
            this.lastProductDisplay = null;

            for (let i = 0; i < this.showingProductDisplayListLength; i++) 
                this.showingProductDisplayList[i].style.display = 'none';
    
            this.showingProductDisplayListLength = 0;
        }

        let inputValueLength = input.value.length;

        if (inputValueLength > 0) {
            for (let i = 0; i < this.dataBase.GetProductListLength(); i++) {
                let productData = this.dataBase.productList[i];
                let inputValue = input.value.toUpperCase();
                let k = 0;
                let productName = productData.productName.toUpperCase();
                let found = true;
                
                for (let j = 0; j < inputValueLength; j++) {
                    if (k == this.productDisplayListLength) {
                        found = false;
                        break;
                    }
                    else {
                        let matched = false;

                        while (k < productName.length) {
                            if (inputValue[j] != productName[k]) 
                                k++;
                            else {
                                k++;
                                matched = true;
                                break;
                            }
                        }

                        if (!matched) {
                            found = false;
                            break;
                        }
                    }
                }

                if (found) {
                    let productDisplay = this.productDisplayList[i];
                    productDisplay.style.display = 'inline-block';
                    this.showingProductDisplayList[this.showingProductDisplayListLength] = productDisplay;
                    this.showingProductDisplayListLength++;
                    this.lastProductDisplay = productDisplay;
                }
            }
        }

        this.TryUpdateMarginWhenAnyProductDisplayIsShown();
    }

    TryUpdateMarginWhenAnyProductDisplayIsShown() {
        if (this.showingProductDisplayListLength > 0)
            this.UpdateMargin();
    }
}

let search = new Search();
search.Awake();
setInterval(() => {
    search.Update();
}, 100);

function body_onresize() {
    search.TryUpdateMarginWhenAnyProductDisplayIsShown();
    search.footer.UpdatePosition();
}

function searchButton_onclick() {
    search.Search();
    search.footer.UpdatePosition();
}

function productDisplay_onmouseenter(_element, _productIndex) {
    _element.children[0].src = '../' + search.dataBase.productList[_productIndex].showImageLink1;
}

function productDisplay_onmouseleave(_element, _productIndex) {
    _element.children[0].src = '../' + search.dataBase.productList[_productIndex].showImageLink0;
}
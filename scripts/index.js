class Index {
    dataBase;
    header;
    productDisplayWrapperArray;
    productDisplayWrapperArrayLength = 3;
    productDisplayWidth = 225;
    lastWindowWidth = 0;

    Awake() {
        this.dataBase = new DataBase();
        this.dataBase.Awake();
        this.header = new Header(true);
        this.header.HandleSetDataBase(this.dataBase);
        this.productDisplayWrapperArray = document.getElementsByClassName('productDisplayWrapper');
        let productDisplayWrapperArray = this.productDisplayWrapperArray;
        let productDisplayWrapperArrayLength = this.productDisplayWrapperArrayLength;
        let productDisplayTemplate;

        for (let i = 0; i < productDisplayWrapperArrayLength; i++) {
            productDisplayTemplate = document.getElementsByClassName("productDisplay")[i];
            productDisplayTemplate.style.display = 'none';
        }

        for (let i = 0; i < productDisplayWrapperArrayLength; i++) {
            let displayCount = 10;
            let productIndexRandomList = {};
            let productListLength = 0;

            for (let key in this.dataBase.productList) {
                productIndexRandomList[key] = key;
                productListLength++;
            }

            let shuffleCount = 100;

            for (let k = 0; k < shuffleCount; k++) {
                let index0 = this.GetRandomIndex(productListLength);
                let index1 = this.GetRandomIndex(productListLength);
                let c = productIndexRandomList[index0];
                productIndexRandomList[index0] = productIndexRandomList[index1];
                productIndexRandomList[index1] = c;
            }

            for (let j = 0; j < displayCount; j++) {
                let productDisplay = productDisplayTemplate.cloneNode(true);
                productDisplayWrapperArray[i].appendChild(productDisplay);
                productDisplay.style.display = 'inline-block';
                let productIndex = productIndexRandomList[j]; 
                let product = this.dataBase.productList[productIndex];
                productDisplay.children[0].src = product.showImageLink0;
                productDisplay.children[1].children[0].innerHTML = product.studioName;
                productDisplay.children[1].children[1].innerHTML = product.productName;
                productDisplay.children[1].children[2].innerHTML = product.price + 'đ';
                productDisplay.setAttribute('onclick', 'productDisplay_onclick(' + productIndex + ')');
                productDisplay.setAttribute('onmouseenter', 'productDisplay_onmouseenter(this, ' + productIndex + ')');
                productDisplay.setAttribute('onmouseleave', 'productDisplay_onmouseleave(this, ' + productIndex + ')');
            }
        }

        this.UpdateSize();
    }

    Update() {
        this.header.Update();
    }

    GetRandomIndex(_productListLength) {
        return Math.floor(Math.random() * (_productListLength - 1));
    }

    UpdateSize() {
        let windowWidth = window.innerWidth;

        if (this.lastWindowWidth != windowWidth) {
            this.lastWindowWidth = windowWidth;    
            let count = 0;

            count = Math.floor(windowWidth / this.productDisplayWidth);
            if (count == 0)
                count = 1;

            count = count*2;
            let maxProductDisplayInWrapperCount = 10;

            for (var i = 0; i < this.productDisplayWrapperArrayLength; i++) {
                for (let j = 0; j < maxProductDisplayInWrapperCount; j++) {
                    let style = this.productDisplayWrapperArray[i].children[j + 1].style;

                    if (j < count) 
                        style.display = 'block';
                    else 
                        style.display = 'none';
                }
            }
        }
    }
}

let index = new Index();
index.Awake();
setInterval(() => {
    index.Update();
}, 100);

function body_onresize() {
    index.UpdateSize();
}

function productDisplay_onclick(_index) {
    index.dataBase.HandleSetDisplayingProductIndex(_index);
    window.location.href = 'pages/view-product.html';
}

function productDisplay_onmouseenter(_element, _productIndex) {
    _element.children[0].src = index.dataBase.productList[_productIndex].showImageLink1;
}

function productDisplay_onmouseleave(_element, _productIndex) {
    _element.children[0].src = index.dataBase.productList[_productIndex].showImageLink0;
}
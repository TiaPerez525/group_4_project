class Index {
    dataBase;
    productDisplayWrapperArray;
    productDisplayWrapperArrayLength = 3;
    productDisplayWidth = 225;
    lastWindowWidth = 0;

    Awake() {
        this.dataBase = new DataBase();
        this.productDisplayWrapperArray = document.getElementsByClassName('productDisplayWrapper');
        let productDisplayWrapperArray = this.productDisplayWrapperArray;
        let productDisplayWrapperArrayLength = this.productDisplayWrapperArrayLength;
        let productDisplayTemplate;

        for (let i = 0; i < productDisplayWrapperArrayLength; i++) {
            productDisplayTemplate = document.getElementsByClassName("productDisplay")[i];
            productDisplayTemplate.style.display = 'none';
        }

        for (let i = 0; i < productDisplayWrapperArrayLength; i++) {
            let displayCount = 5;
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
                let imageSrc = product.imageLink;
                productDisplay.children[0].src = imageSrc;
                productDisplay.children[1].children[0].innerHTML = product.studioName;
                productDisplay.children[1].children[1].innerHTML = product.productName;
                productDisplay.children[1].children[2].innerHTML = product.price + 'đ';
                productDisplay.setAttribute('onclick', 'productDisplay_onclick(' + productIndex + ')');
            }
        }

        this.UpdateSize();
    }

    Update() {
        
    }

    GetRandomIndex(_productListLength) {
        return Math.floor(Math.random() * (_productListLength - 1));
    }

    UpdateSize() {
        let windowWidth = window.innerWidth;

        if (this.lastWindowWidth != windowWidth) {
            this.lastWindowWidth = windowWidth;    
            let count = 0;
            let totalWidth = 0;
            let productWidth = this.productDisplayWidth + 10;

            while (totalWidth + productWidth <= windowWidth)  {
                count++;
                totalWidth += productWidth;
            }

            let maxProductDisplayInRowCount = 5;

            for (var i = 0; i < this.productDisplayWrapperArrayLength; i++) {
                for (let j = 0; j < maxProductDisplayInRowCount; j++) {
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

function body_onresize() {
    index.UpdateSize();
}

function productDisplay_onclick(_index) {
    DataBase_HandleSetDisplayingProductIndex(_index);
    window.location.href = 'pages/view-product.html';
}
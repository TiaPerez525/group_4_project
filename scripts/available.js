class Available {
    dataBase;
    lastProductDisplay;
    displayCount;

    Awake() {
        this.dataBase = new DataBase();
        this.dataBase.Awake();
        let DataBase_productListLength = Object.keys(this.dataBase.productList).length;
        this.displayCount = DataBase_productListLength;
        let displayCount = this.displayCount;
        let productDisplayTemplate = document.getElementsByClassName("productDisplay")[0];
        productDisplayTemplate.style.display = 'none';

        for (let i = 0; i < displayCount; i++) {
            let productDisplay = productDisplayTemplate.cloneNode(true);
            let productDisplayWrapper = document.getElementsByClassName('productDisplayWrapper')[0];
            productDisplayWrapper.appendChild(productDisplay);
            let productDisplayStyle = productDisplay.style;
            productDisplayStyle.display = 'inline-block';
            let product = this.dataBase.productList[i];
            let imageSrc = product.imageLink;
            productDisplay.children[0].src = '../' + imageSrc;
            productDisplay.children[1].children[0].innerHTML = product.studioName;
            productDisplay.children[1].children[1].innerHTML = product.productName;
            productDisplay.children[1].children[2].innerHTML = product.price + 'đ';
            productDisplay.setAttribute('onclick', 'available.productDisplay_onclick(' + i + ')');

            if (i == displayCount - 1) {
                this.lastProductDisplay = productDisplay;
                this.UpdateMargin(productDisplay);
            }
        }
    }

    productDisplay_onclick(_index) {
        this.dataBase.HandleSetDisplayingProductIndex(_index);
        window.location.href = 'view-product.html';
    }

    UpdateMargin(_productDisplay) {
        let productDisplayWrapper = document.getElementsByClassName('productDisplayWrapper')[0];
        let wrapperWidth = productDisplayWrapper.getBoundingClientRect().width;
        let productDisplayWidth = 225;
        let maxCount = 5;

        while (productDisplayWidth * maxCount > wrapperWidth) 
            maxCount--;

        let totalMarginWidth =  wrapperWidth - maxCount * productDisplayWidth;
        let marginWidth = totalMarginWidth / (maxCount * 2);
        let productDisplayTop = _productDisplay.getBoundingClientRect().top;
        let j = this.displayCount - 1;
        let sameRowCount = 0;

        while (productDisplayWrapper.children[j + 1].getBoundingClientRect().top == productDisplayTop) {
            sameRowCount++;
            j--;
        }

        let emptyCount = maxCount - sameRowCount;
        _productDisplay.style.marginRight = emptyCount * productDisplayWidth +  emptyCount * marginWidth * 2 + marginWidth + 'px';
    }

    Update() {
        
    }

    body_onresize() {
        this.lastProductDisplay.style.marginRight = 'auto';
        this.UpdateMargin(this.lastProductDisplay);
    }
}

let available = new Available();
available.Awake();

function body_onresize() {
   available.body_onresize();
}
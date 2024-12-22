class ViewProduct {
    dataBase;
    footer;
    productImageElementArray;
    currentImageIndex;

    Awake() {
        header.viewProduct = this;
        this.dataBase = new DataBase();
        this.dataBase.Awake();
        let product = this.dataBase.productList[this.dataBase.displayingProductIndex];
        this.currentImageIndex = 0;
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

        let imageLinkArray = product.imageLinkArray;
        let productImageTemplate = document.getElementById('productImage');
        this.productImageElementArray = [];
        let imageLinkArrayLength = imageLinkArray.length;

        for (let i = 0; i < imageLinkArrayLength; i++) {
            let productImageElement = productImageTemplate.cloneNode(true);
            document.getElementById('productImageWrapper').insertBefore(productImageElement, document
                .getElementById('viewImageMenu'));
            this.productImageElementArray[i] = productImageElement;
            productImageElement.style.display = 'block';
            productImageElement.src = '../' + imageLinkArray[i];
            productImageElement.setAttribute('onload', 'productImage_onload(this, ' + i + ')');
        }

        this.UpdateViewImageIndexText();
        this.footer = new Footer();
        this.footer.Awake();
    }

    Update() {
        this.UpdateAllImageElementVisual();
    }

    UpdateAllImageElementVisual() {
        for (var i = 0; i < viewProduct.productImageElementArray.length; i++) {
            let image = viewProduct.productImageElementArray[i];
            let style = image.style;
            style.height = 'auto';
            style.width = '100%';
            viewProduct.UpdateImageElementVisual(image, i);
        }
    }

    UpdateViewImageIndexText() {
        document.getElementById('viewImageIndexText').innerHTML = (this.currentImageIndex + 1) + '/' + this.productImageElementArray.length;
    }

    SetViewImageMenuOpacity(_opacity) {
        document.getElementById('viewImageMenu').style.opacity = _opacity;
    }

    GetImageWrapperElement() {
        return document.getElementById('productImageWrapper');
    }

    GetImageWrapperElementWidth() {
        return parseFloat(viewProduct.GetImageWrapperElement().getBoundingClientRect().width);
    }

    UpdateImageElementVisual(_element, _index) {
        let elementRect = _element.getBoundingClientRect();
        let wrapperRect = viewProduct.GetImageWrapperElement().getBoundingClientRect();
        let style = _element.style;
        let wrapperRectWidth = wrapperRect.width;
        let elementRectHeight = elementRect.height;
        let wrapperRectHeight = wrapperRect.height;
        style.left = '0px';
        style.top = '0px';
        
        if (elementRectHeight > wrapperRectHeight) {
            let ratio = elementRect.width/elementRectHeight;
            let width = wrapperRectHeight*ratio;
            style.width = width + 'px';
            style.left = (wrapperRectWidth - width)/2 + 'px';
        }
        else if (elementRectHeight < wrapperRectHeight) 
            style.top = (wrapperRectHeight - elementRectHeight)/2 + 'px';
        
        style.left = (parseFloat(style.left) + parseFloat((_index - this.currentImageIndex)*wrapperRectWidth)) + 'px';
    }

    HideImages() {
        this.GetImageWrapperElement().style.opacity = '0';
    }

    ShowImages() {
        this.GetImageWrapperElement().style.opacity = '1';
    }
}

let viewProduct = new ViewProduct();
viewProduct.Awake();
setInterval(() => {
    viewProduct.Update();
}, 100);

function body_onresize() {
    viewProduct.footer.UpdatePosition();
}

function productImageWrapper_onenter() {
    viewProduct.SetViewImageMenuOpacity(1);
}

function productImageWrapper_onexit() {
    viewProduct.SetViewImageMenuOpacity(0);
}

function previousImageButton_onclick() {
    viewProduct.currentImageIndex--;
    let productImageElementArray = viewProduct.productImageElementArray;
    let productImageElementArrayLength = productImageElementArray.length;
    let imageWrapperWidth = viewProduct.GetImageWrapperElementWidth();

    if (viewProduct.currentImageIndex == -1) {
        viewProduct.currentImageIndex = productImageElementArrayLength - 1;
        let left = 0;

        for (let i = productImageElementArrayLength - 1; i >= 0; i--) {
            let image = productImageElementArray[i];
            let style = image.style;
            style.left = left + 'px';
            let imageWidth = image.getBoundingClientRect().width;
            
            if (imageWidth < imageWrapperWidth) 
                style.left = (left + (imageWrapperWidth - imageWidth)/2) + 'px';

            left -= imageWrapperWidth;
        }
    }
    else {
        for (let i = 0; i < productImageElementArrayLength; i++) {
            let style = viewProduct.productImageElementArray[i].style;
            let left = parseFloat(style.left);
            style.left = (left + imageWrapperWidth) + 'px';
        }
    }

    viewProduct.UpdateViewImageIndexText();
}

function nextImageButton_onclick() {
    viewProduct.currentImageIndex++;
    let productImageElementArray = viewProduct.productImageElementArray;
    let productImageElementArrayLength = productImageElementArray.length;
    let imageWrapperWidth = viewProduct.GetImageWrapperElementWidth();

    if (viewProduct.currentImageIndex == productImageElementArrayLength) {
        viewProduct.currentImageIndex = 0;

        for (let i = 0; i < productImageElementArrayLength; i++) {
            let image = productImageElementArray[i];
            let style = image.style;
            style.left = i*imageWrapperWidth + 'px';
            let imageWidth = image.getBoundingClientRect().width;
            
            if (imageWidth < imageWrapperWidth) 
                style.left = (parseFloat(style.left) + (imageWrapperWidth - imageWidth)/2) + 'px';
        }
    }
    else {
        for (let i = 0; i < productImageElementArrayLength; i++) {
            let style = productImageElementArray[i].style;
            let left = parseFloat(style.left);
            style.left = (left - imageWrapperWidth) + 'px';
        }
    }

    viewProduct.UpdateViewImageIndexText();
}

function productImage_onload(_element, _index) {
    viewProduct.UpdateImageElementVisual(_element, _index);
}
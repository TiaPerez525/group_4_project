class Header {
    changingIntroductionTextList = {
        currentIndex:0,
        maxIndex:2,
        0:'NZ Toys là nơi chuyên cung cấp mô hình chính hãng trên toàn thế giới',
        1:'International Shipping - Giao hàng toàn cầu',
        2:'Nhận tìm kiếm, đặt hàng theo yêu cầu',
    }

    ACCOUNT_MENU_MIN_WIDTH = 405;
    SHOPPING_CART_MENU_WIN_WIDTH = 455;
    mobileNavLinkMenuIsShown = false;
    shoppingCartMenuIsShown = false;
    accountMenuIsShown = false;
    mobile_headerAccountMenuIsShown = false;
    mobileHeaderShoppingCartMenuIsShown = false;

    Awake() {
        setInterval(() => {
            this.Update();
        }, 100);
    }

    Update() {
        let windowWidth = window.innerWidth;
    
        if (windowWidth > 775 && this.mobileNavLinkMenuIsShown) {
            this.CloseMobileHeaderNavLinkMenu();
        }
    
        if (this.accountMenuIsShown && this.WillShowMobileAccountMenu()) {
            this.HideHeaderAccountMenu();
            this.ShowMobileHeaderAcountMenu();
        }
    
        if (this.mobile_headerAccountMenuIsShown && !this.WillShowMobileAccountMenu()) {
            this.ShowHeaderAccountMenu();
            this.HideMobileHeaderAcountMenu();
        }
    
        if (this.shoppingCartMenuIsShown && this.WillShowMobileShoppingCartMenu()) {
            this.HideShoppingCarMenu();
            this.ShowMobileHeaderShoppingCartMenu();
        }
    
        if (this.mobileHeaderShoppingCartMenuIsShown && !this.WillShowMobileShoppingCartMenu()) {
            this.ShowShoppingCarMenu();
            this.HideMobileheaderShoppingCartMenu();
        }
    }

    WillShowMobileShoppingCartMenu() {
        return window.innerWidth <= this.SHOPPING_CART_MENU_WIN_WIDTH;
    }

    HideMobileheaderShoppingCartMenu() {
        this.GetMobileShoppingCartMenu().style.display = 'none';
        this.mobileHeaderShoppingCartMenuIsShown = false;
    }

    GetMobileShoppingCartMenu() {
        return document.getElementsByClassName('mobile_headerShoppingCartMenu')[0];
    }

    ShowMobileHeaderShoppingCartMenu() {
        this.GetMobileShoppingCartMenu().style.display = 'block';
        this.mobileHeaderShoppingCartMenuIsShown = true;
    }

    WillShowMobileAccountMenu() {
        return window.innerWidth <= this.ACCOUNT_MENU_MIN_WIDTH;
    }
    
    ShowMobileHeaderAcountMenu() {
        document.getElementsByClassName('mobile_headerAccountMenu')[0].style.display = 'block';
        this.mobile_headerAccountMenuIsShown = true;
    }
    
    HideMobileHeaderAcountMenu() {
        document.getElementsByClassName('mobile_headerAccountMenu')[0].style.display = 'none';
        this.mobile_headerAccountMenuIsShown = false;
    }

    HideShoppingCarMenu() {
        this.GetShoppingCartMenu().style.display = 'none';
        this.shoppingCartMenuIsShown = false;
    }

    ShowShoppingCarMenu() {
        this.GetShoppingCartMenu().style.display = 'block';
        this.shoppingCartMenuIsShown = true;
    }
    
    GetShoppingCartMenu() {
        return document.getElementsByClassName('headerShoppingCartMenu')[0];
    }

    OpenMobileHeaderNavLinkMenu() {
        this.GetMobileHeaderNavLinkMenu().style.display = ('flex');
        this.mobileNavLinkMenuIsShown = true;
    }
    
    GetMobileHeaderNavLinkMenu() {
        return document.getElementsByClassName('mobile_headerNavLinkMenu')[0];
    }

    CloseMobileHeaderNavLinkMenu() {
        this.GetMobileHeaderNavLinkMenu().style.display = ('none');
        this.mobileNavLinkMenuIsShown = false;
    }

    HideHeaderAccountMenu() {
        this.GetHeaderAccountMenu().style.display = 'none';
        this.accountMenuIsShown = false;
    }
    
    ShowHeaderAccountMenu() {
        this.GetHeaderAccountMenu().style.display = 'block';
        this.accountMenuIsShown = true;
    }
    
    GetHeaderAccountMenu() {
        return document.getElementsByClassName('headerAccountMenu')[0];
    }

    LoadSearchPage(_isIndexPage) {
        if (_isIndexPage) 
            window.location.href = 'pages/search.html';
        else 
            window.location.href = 'search.html';
    }

    OpenWebsite(_href) {
        window.location.href = _href;
    }
}

let header = new Header();
header.Awake();

function leftChangingIntroductionButton_onclick() {
    header.changingIntroductionTextList.currentIndex--;

    if (header.changingIntroductionTextList.currentIndex < 0) 
        header.changingIntroductionTextList.currentIndex = header.changingIntroductionTextList.maxIndex;

    document.getElementById('changingIntroductionText').innerHTML = 
        header.changingIntroductionTextList[header.changingIntroductionTextList.currentIndex];
}

function rightChangingIntroductionButton_onclick() {
    header.changingIntroductionTextList.currentIndex++;
    
    if (header.changingIntroductionTextList.currentIndex > header.changingIntroductionTextList.maxIndex) 
        header.changingIntroductionTextList.currentIndex = 0;

    document.getElementById('changingIntroductionText').innerHTML = 
        header.changingIntroductionTextList[header.changingIntroductionTextList.currentIndex];
}

function logoImage_onclick(_willGoUpOneLevel) {
    let indexPageDictionary = 'index.html';

    if (_willGoUpOneLevel) 
        indexPageDictionary = '../' + indexPageDictionary;

    window.location.href = indexPageDictionary;
}

function headerNavLink_onmousehover(index) {
    document.getElementsByClassName('headerNavLinkHighlightBar')[index].style.backgroundColor = 'black';
}

function headerNavLink_onmouseleave(index) {
    document.getElementsByClassName('headerNavLinkHighlightBar')[index].style.backgroundColor = 'white';
}

function headerNavLink_onclick(_webPageUrl) {
    header.OpenWebsite(_webPageUrl);
}

function headerShoppingCartButtonClickZone_onclick() {
    if (header.shoppingCartMenuIsShown) {
        header.HideShoppingCarMenu();
    }
    else {
        if (header.accountMenuIsShown) 
            header.HideHeaderAccountMenu();

        if (header.WillShowMobileShoppingCartMenu())
            header.ShowMobileHeaderShoppingCartMenu();
        else 
            header.ShowShoppingCarMenu()
    }
}

function mobile_openHeaderNavLinkMenuButton_onclick() {
    header.OpenMobileHeaderNavLinkMenu();
}

function mobile_headerNavLinkMenuCloseButton_onclick() {
    header.CloseMobileHeaderNavLinkMenu();
}

function headerAccountButtonClickZone_onclick() {
    if (header.accountMenuIsShown) {
        header.HideHeaderAccountMenu();
    }
    else {
        if (header.shoppingCartMenuIsShown) 
            header.HideShoppingCarMenu();

        if (header.WillShowMobileAccountMenu()) 
            header.ShowMobileHeaderAcountMenu();
        else 
            header.ShowHeaderAccountMenu();
    }
}

function headerSearchButton_onclick(_isIndexPage) {
    header.LoadSearchPage(_isIndexPage);
}

function mobile_headerSearchBar_onclick(_isIndexPage) {
    header.LoadSearchPage(_isIndexPage);
}

function mobile_headerAccountMenuFlexWrapper_onclick() {
    header.HideMobileHeaderAcountMenu();
}

function mobile_headerShoppingCartMenuCloseButton_onclick() {
    header.HideMobileheaderShoppingCartMenu();
}

function headerShoppingCartMenuViewShoppingCartButton_onclick(_calledInIndexPage) {
    if (_calledInIndexPage)
        window.location.href = 'pages/view-cart.html';
    else
        window.location.href = 'view-cart.html';
}

function mobile_headerShoppingCartMenuViewShoppingCartButton_onclick(_calledInIndexPage) {
    if (_calledInIndexPage)
        window.location.href = 'pages/view-cart.html';
    else
        window.location.href = 'view-cart.html';
}
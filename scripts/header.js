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
    viewProduct;
    dataBase;
    isInIndexPage;

    constructor(_isInIndexPage) {
        let _loginButton = document.getElementById('headerAccountMenuLoginButton');

        _loginButton.addEventListener('click', (_loginButton) => {
            this.Login('headerAccountMenuEmailInput', 'headerAccountMenuPasswordInput', _loginButton);
        });

        let _mobileLoginButton = document.getElementById('mobileHeaderLoginButton');

        _mobileLoginButton.addEventListener('click', (_mobileLoginButton) => {
            this.Login('mobileHeaderEmailInput', 'mobileHeaderPasswordInput', _mobileLoginButton);
        });

        this.AddClickEventListener('profileLogOutTextButton', () => {
            this.LogOut();
        });

        this.AddClickEventListener('mobileProfileLogOutTextButton', () => {
            this.LogOut();
        });

        this.AddClickEventListener('leftChangingIntroductionButton', () => {
            this.changingIntroductionTextList.currentIndex--;
        
            if (this.changingIntroductionTextList.currentIndex < 0) 
                this.changingIntroductionTextList.currentIndex = this.changingIntroductionTextList.maxIndex;
        
            document.getElementById('changingIntroductionText').innerHTML = 
                this.changingIntroductionTextList[this.changingIntroductionTextList.currentIndex];
        });

        this.AddClickEventListener('rightChangingIntroductionButton', () => {
            this.changingIntroductionTextList.currentIndex++;
            
            if (this.changingIntroductionTextList.currentIndex > this.changingIntroductionTextList.maxIndex) 
                this.changingIntroductionTextList.currentIndex = 0;
        
            document.getElementById('changingIntroductionText').innerHTML = 
                this.changingIntroductionTextList[this.changingIntroductionTextList.currentIndex];
        });

        this.isInIndexPage = _isInIndexPage;
    
        this.AddClickEventListener('logoImage', () => {
            let indexPageDictionary = 'index.html';
        
            if (!this.isInIndexPage)
                indexPageDictionary = '../' + indexPageDictionary;
        
            window.location.href = indexPageDictionary;
        });
        
        let navLinkList = document.getElementsByClassName('headerNavLink');
        let navLinkHighLighBarList = document.getElementsByClassName('headerNavLinkHighlightBar');

        let navLinkWebpageUrlList = [
            'contact.html',
            'available.html',
            'faqs.html'
        ];

        for (let i = 0; i < navLinkHighLighBarList.length; i++) {
            let navLink = navLinkList[i];
            let navLinkHighLighBar = navLinkHighLighBarList[i];

            navLink.addEventListener('mouseover', () => {
                navLinkHighLighBar.style.backgroundColor = 'black';
            });

            navLink.addEventListener('mouseleave', () => {
                navLinkHighLighBar.style.backgroundColor = 'white';
            });

            navLink.addEventListener('click', () => {
                let webpageUrl = navLinkWebpageUrlList[i];

                if (this.isInIndexPage) 
                    webpageUrl = 'pages/' + webpageUrl;

                this.OpenWebpage(webpageUrl);
            });

            if (i == 2) {
                navLink.addEventListener('mouseover', () => {
                    document.getElementById('header_faqDropMenu').style.height = '120%';
                });
    
                navLink.addEventListener('mouseleave', () => {
                    document.getElementById('header_faqDropMenu').style.height = '0%';
                });
            }
        }

        this.AddMouseOverEventListener('header_faqDropMenu', () => {
            document.getElementById('header_faqDropMenu').style.height = '120%';
        });

        this.AddMouseLeaveEventListener('header_faqDropMenu', () => {
            document.getElementById('header_faqDropMenu').style.height = '0%';
        });

        this.AddClickEventListener('headerShoppingCartButtonClickZone', () => {
            if (this.shoppingCartMenuIsShown) {
                this.HideShoppingCarMenu();
            }
            else {
                if (this.accountMenuIsShown) 
                    this.HideHeaderAccountMenu();
        
                if (this.WillShowMobileShoppingCartMenu())
                    this.ShowMobileHeaderShoppingCartMenu();
                else 
                    this.ShowShoppingCarMenu()
            }
        });

        this.AddClickEventListener('mobile_openHeaderNavLinkMenuButton', () => {
            this.OpenMobileHeaderNavLinkMenu();
        });

        this.AddClickEventListener('mobile_headerNavLinkMenuCloseButton', () => {
            this.BeginCloseMobileHeaderNavLinkMenu();
        });

        this.AddClickEventListener('headerAccountButtonClickZone', () => {
            if (this.accountMenuIsShown) {
                this.HideHeaderAccountMenu();
            }
            else {
                if (this.shoppingCartMenuIsShown) 
                    this.HideShoppingCarMenu();
        
                if (this.WillShowMobileAccountMenu()) 
                    this.ShowMobileHeaderAcountMenu();
                else 
                    this.ShowHeaderAccountMenu();
            }
        });

        this.AddClickEventListener('headerSearchButton', () => { 
            this.LoadSearchPage(this.isInIndexPage);
        });

        this.AddClickEventListener('mobile_headerSearchButton', () => { 
            this.LoadSearchPage(this.isInIndexPage);
        });

        this.AddClickEventListener('mobile_headerAccountMenuFlexWrapper', () => { 
            this.HideMobileHeaderAcountMenu();
        });

        this.AddClickEventListener('mobile_headerAccountMenuFlexWrapper', () => { 
            this.HideMobileHeaderAcountMenu();
        });
        
        this.AddClickEventListener('mobile_headerShoppingCartMenuCloseButton', () => { 
            this.HideMobileheaderShoppingCartMenu();
        });
        
        this.AddClickEventListener('headerShoppingCartMenuViewShoppingCartButton', () => { 
            if (this.isInIndexPage)
                window.location.href = 'pages/view-cart.html';
            else
                window.location.href = 'view-cart.html';
        });

        this.AddClickEventListener('mobile_headerShoppingCartMenuViewShoppingCartButton', () => { 
            if (this.isInIndexPage)
                window.location.href = 'pages/view-cart.html';
            else
                window.location.href = 'view-cart.html';
        });
    }

    AddMouseOverEventListener(_elementId, _action) {
        this.GetElementById(_elementId).addEventListener('mouseover', _action);
    }

    AddMouseLeaveEventListener(_elementId, _action) {
        this.GetElementById(_elementId).addEventListener('mouseleave', _action);
    }

    AddClickEventListener(_elementId, _action) {
        this.GetElementById(_elementId).addEventListener('click', _action);
    }

    GetElementById(_id) {
        return document.getElementById(_id);
    }

    LogOut() {
        this.dataBase.HandleSetLoggedInAccountIndex(-1);
        this.SwitchToLoginMenu();

        let clearTextInputNames = [
            'headerAccountMenuEmailInput',
            'headerAccountMenuPasswordInput',
            'mobileHeaderEmailInput',
            'mobileHeaderPasswordInput'
        ]

        for (var i = 0; i < clearTextInputNames.length; i++) 
            document.getElementById(clearTextInputNames[i]).value = '';
    }

    Login(_emailInputName, _passwordInputName, _loginButton) {
        let email = this.GetInputValue(_emailInputName);

        if (email == '')
            return;

        let password = this.GetInputValue(_passwordInputName);

        if (password == '')
            return;

        _loginButton.preventDefault();
        let accountListLength = this.dataBase.accountListLength;

        if (accountListLength > 0) 
            for (var i = 0; i < accountListLength; i++) {
                let account = this.dataBase.accountList[i];

                if (account.email == email) {
                    if (account.password == password) {
                        this.dataBase.HandleSetLoggedInAccountIndex(i);
                        this.SwitchToProfileMenu();
                        break;
                    }
                    else 
                        alert('Sai mật khẩu!');
                }
                else {
                    if (i == accountListLength - 1) 
                        alert('Email chưa được sử dụng để đăng ký tài khoản');
                }
            }
        else 
            alert('Email chưa được sử dụng để đăng ký tài khoản');
    }

    SwitchToLoginMenu() {
        document.getElementById('headerLoginMenu').style.display = 'block';
        document.getElementById('mobileHeaderLoginMenu').style.display = 'block';
        document.getElementById('profileMenu').style.display = 'none';
        document.getElementById('mobileHeaderProfileMenu').style.display = 'none';
        
    }

    SwitchToProfileMenu() {
        document.getElementById('headerLoginMenu').style.display = 'none';
        document.getElementById('mobileHeaderLoginMenu').style.display = 'none';
        document.getElementById('profileMenu').style.display = 'block';
        document.getElementById('mobileHeaderProfileMenu').style.display = 'block';
    }

    GetInputValue(_inputElementName) {
        return document.getElementById(_inputElementName).value;
    }

    Update() {
        let windowWidth = window.innerWidth;
    
        if (windowWidth > 775 && this.mobileNavLinkMenuIsShown) {
            this.BeginCloseMobileHeaderNavLinkMenu();
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
        let mobileHeaderNavLink = this.GetMobileHeaderNavLinkMenu();
        mobileHeaderNavLink.style.width = '100%';
        mobileHeaderNavLink.children[0].classList.add('mobile_headerNavLinkMenuFlexWrapper-slide_in')
        mobileHeaderNavLink.children[1].classList.add('mobile_headerNavLinkMenuCloseButton-show');
        this.mobileNavLinkMenuIsShown = true;
    }
    
    GetMobileHeaderNavLinkMenu() {
        return document.getElementsByClassName('mobile_headerNavLinkMenu')[0];
    }

    BeginCloseMobileHeaderNavLinkMenu() {
        let mobileHeaderNavLink = this.GetMobileHeaderNavLinkMenu();
        mobileHeaderNavLink.children[0].classList.remove('mobile_headerNavLinkMenuFlexWrapper-slide_in')
        mobileHeaderNavLink.children[1].classList.remove('mobile_headerNavLinkMenuCloseButton-show');
        
        setTimeout(() => {
            this.EndCloseMobileHeaderNavLinkMenu();
        }, 200);
    }

    EndCloseMobileHeaderNavLinkMenu() {
        this.GetMobileHeaderNavLinkMenu().style.width = '0px';
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

    OpenWebpage(_href) {
        window.location.href = _href;
    }

    HandleSetDataBase(_dataBase) {
        this.dataBase = _dataBase;
        let loggedInAccountIndex = this.dataBase.loggedInAccountIndex;

        if (loggedInAccountIndex != -1) {
            this.SwitchToProfileMenu();
            let account = this.dataBase.accountList[loggedInAccountIndex];
            document.getElementById('profileNameText').innerHTML = account.firstName + ' ' + account.lastName;
            document.getElementById('profileGCoinText').innerHTML = 'GCoin: ' + account.gCoin;
        }
    }
}
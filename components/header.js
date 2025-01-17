class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<header>
    <div class="changingIntroductionTextWrapper changingIntroductionTextWrapper_background-color">
        <button id="leftChangingIntroductionButton" class="leftChangingIntroductionButton leftChangingIntroductionButton_color changingIntroductionTextWrapper_background-color"><</button>
        <div id="changingIntroductionText" class="changingIntroductionText">NZ Toys là nơi chuyên cung cấp mô hình chính hãng trên toàn thế giới</div>
        <button id="rightChangingIntroductionButton" class="rightChangingIntroductionButton leftChangingIntroductionButton leftChangingIntroductionButton_color changingIntroductionTextWrapper_background-color">></button>
    </div>
    <nav class="headerNav">
        <button id="mobile_openHeaderNavLinkMenuButton" class="mobile_openHeaderNavLinkMenuButton">
            <img class="mobile_openHeaderNavLinkMenuButtonImage" src="images/hambuger-icon.jpg" alt="" width="25px">
        </button>
        <img id="logoImage" class="logoImage" src="images/shop-logo.webp" alt="shopLogo" width="200px">
        <div class="headerNavLink" href="">
            <div class="headerNavLinkText" href="">Liên hệ</div>
            <div class="headerNavLinkHighlightBar"></div>
        </div>
        <div class="headerNavLink" href="">
            <div class="headerNavLinkText" href="">Hàng có sẵn</div>
            <div class="headerNavLinkHighlightBar"></div>
        </div>
        <div id="header_faqsNavLink" class="headerNavLink" href="">
            <div class="headerNavLinkText" href="">FAQs</div>
            <div class="headerNavLinkHighlightBar"></div>
        </div>
        <div class="headerUserNavFlexWrapper">
            <div id="headerSearchButton" class="headerSearchButton">
                <img class="headerSearchButtonIcon" src="images/search-icon.webp" alt="" width="25px" height="30px">
                <div class="headerSearchButtonText">Tìm kiếm</div>
            </div>
            <button id="mobile_headerSearchButton" class="mobile_headerSearchButton">
                <img class="mobile_headerSearchBarImage" src="images/search-icon.webp" alt="" width="25px">
            </button>
            <div class="headerAccountButton">
                <img class="headerAccountButtonIcon" src="images/account-icon.png" alt="" width="25px" height="30px">
                <div class="headerAccountButtonText">Tài khoản</div>
                <button id="headerAccountButtonClickZone" class="headerAccountButtonClickZone"></button>
                <div class="headerAccountMenu"> 
                    <div id="headerLoginMenu" class="headerAccountMenu_div0">
                        <div class="headerAccountMenuText">ĐĂNG NHẬP TÀI KHOẢN</div>
                        <div class="headerAccountMenuInstructiontext">Nhập email và mật khẩu của bạn:</div>
                        <hr class="headerAccountMenuLine">
                        <form class="headerAccountMenuLoginForm" action="#">
                            <input id="headerAccountMenuEmailInput" class="headerAccountMenuEmailInput" type="email" placeholder="Email" required>
                            <input id="headerAccountMenuPasswordInput" class="headerAccountMenuPasswordInput" type="text" placeholder="Mật khẩu" required>
                            <div class="headerAccountMenuRuleText">Trang web này được bảo vệ bởi reCAPTCHA cũng như <a class="mobile_headerAccountMenuRuleLink" href="">Chính sách quyền riêng tư</a> và <a class="mobile_headerAccountMenuRuleLink" href="">Điều khoản dịch vụ của Google</a>.</div>
                            <button id="headerAccountMenuLoginButton" class="headerAccountMenuLoginButtonButton">ĐĂNG NHẬP</button>
                        </form>
                        <div class="headerAccountMenuRegisterText">Khách hàng mới? <a href="pages/register.html" class="headerAccountMenuRegisterLink">Tạo tài khoản</a></div>
                        <div class="headerAccountMenuRecoverPasswordText">Quên mật khẩu? <a href="pages/recover-password.html" class="headerAccountMenuRecoverPasswordLink">Khôi phục mật khẩu</a></div>
                    </div>
                    <div id="profileMenu" class="headerAccountMenu_div1">
                        <div class="headerAccountMenu_div1_div0">Thông tin tài khoản</div>
                        <hr class="headerAccountMenu_div1_hr0"></hr>
                        <div id="profileNameText" class="headerAccountMenu_div1_div1">Name</div>
                        <div id="profileGCoinText" class="headerAccountMenu_div1_div2 headerAccountMenu_div1_div1">GCoin: 0</div>
                        <div id="profileLogOutTextButton" class="headerAccountMenu_div1_div3 headerAccountMenu_div1_div2 headerAccountMenu_div1_div1">Đăng xuất</div>
                    </div>
                </div>
            </div>
            <div class="headerShoppingCartButton">
                <img class="headerShoppingCartButtonIcon" src="images/shopping-cart-icon.jpg" alt="" width="25px" height="30px">
                <div class="headerShoppingCartButtonText">Giỏ hàng</div>
                <button id="headerShoppingCartButtonClickZone" class="headerShoppingCartButtonClickZone"></button>
                <div class="headerShoppingCartMenu"> 
                    <div class="headerShoppingCartMenuText">GIỎ HÀNG</div>
                    <hr class="headerShoppingCartMenuLine">
                    <img class="headerShoppingCartMenuIcon" src="images/shopping-cart-icon.jpg" alt="" width="75px" height="75px">
                    <div class="headerShoppingCartMenuNoProductText">Hiện chưa có sản phẩm</div>
                    <hr class="headerShoppingCartMenuLine">
                    <div class="headerShoppingCartMenuTotalPrice">
                        <div class="headerShoppingCartMenuTotalPriceLabelText">Tổng tiền</div>
                        <div class="headerShoppingCartMenuTotalPriceNumberText">0đ</div>
                    </div>
                    <button id="headerShoppingCartMenuViewShoppingCartButton" class="headerShoppingCartMenuViewShoppingCartButton">Xem giỏ hàng</button>
                </div>
            </div>
        </div>
        <div id="header_faqDropMenu" class="headerNav_div0">
            <a href="pages/chinh-sach-mua-hang.html" class="headerNav_div0_a0">Chính sách mua hàng</a>
            <a href="pages/chinh-sach-doi-tra.html" class="headerNav_div0_a1 headerNav_div0_a0">Chính sách đổi trả</a>
            <a href="pages/faqs.html" class="headerNav_div0_a2 headerNav_div0_a0 headerNav_div0_a1">FAQs</a>
        </div>
    </nav>
    <div class="mobile_headerNavLinkMenu">
        <div class="mobile_headerNavLinkMenuFlexWrapper">
            <a class="mobile_headerNavLinkMenuLink" href="pages/contact.html">Liên hệ</a>
            <a class="mobile_headerNavLinkMenuLink" href="pages/available.html">Hàng có sẵn</a>
            <a class="mobile_headerNavLinkMenuLink" href="pages/faqs.html">FAQs</a>
            <a class="mobile_headerNavLinkMenuLink" href="pages/chinh-sach-mua-hang.html">Chính sách mua hàng</a>
            <a class="mobile_headerNavLinkMenuLink" href="pages/chinh-sach-doi-tra.html">Chính sách đổi trả</a>
        </div>
        <button id="mobile_headerNavLinkMenuCloseButton" class="mobile_headerNavLinkMenuCloseButton">x</button>
    </div>
    <div class="mobile_headerAccountMenu"> 
        <div id="mobile_headerAccountMenuFlexWrapper" class="mobile_headerAccountMenuFlexWrapper">
            <button class="mobile_headerAccountMenuCloseButton">x</button>
        </div>
        <div id="mobileHeaderLoginMenu" class="mobile_headerAccountMenu_div0">
            <div class="mobile_headerAccountMenuText">ĐĂNG NHẬP TÀI KHOẢN</div>
            <div class="mobile_headerAccountMenuInstructiontext">Nhập email và mật khẩu của bạn:</div>
            <hr class="mobile_headerAccountMenuLine">
            <form class="mobile_headerAccountMenuLoginForm">
                <input id="mobileHeaderEmailInput" class="mobile_headerAccountMenuEmailInput" type="email" placeholder="Email" required>
                <input id="mobileHeaderPasswordInput" class="mobile_headerAccountMenuPasswordInput" type="text" placeholder="Mật khẩu" required>
                <div class="mobile_headerAccountMenuRuleText">Trang web này được bảo vệ bởi reCAPTCHA cũng như <a class="mobile_headerAccountMenuRuleLink" href="">Chính sách quyền riêng tư</a> và <a class="mobile_headerAccountMenuRuleLink" href="">Điều khoản dịch vụ của Google</a>.</div>
                <button id="mobileHeaderLoginButton" class="mobile_headerAccountMenuLoginButtonButton">ĐĂNG NHẬP</button>
            </form>
            <div class="mobile_headerAccountMenuRegisterText">Khách hàng mới? <a href="pages/register.html" class="mobile_headerAccountMenuRegisterLink">Tạo tài khoản</a></div>
            <div class="mobile_headerAccountMenuRecoverPasswordText">Quên mật khẩu? <a href="pages/recover-password.html" class="mobile_headerAccountMenuRecoverPasswordLink">Khôi phục mật khẩu</a></div>
        </div>
        <div id="mobileHeaderProfileMenu" class="mobile_headerAccountMenu_div1">
            <div class="headerAccountMenu_div1_div0">Thông tin tài khoản</div>
            <hr class="headerAccountMenu_div1_hr0"></hr>
            <div id="mobileProfileNameText" class="headerAccountMenu_div1_div1">Name</div>
            <div id="mobileProfileGCoinText" class="headerAccountMenu_div1_div2 headerAccountMenu_div1_div1">GCoin: 0</div>
            <div id="mobileProfileLogOutTextButton" class="headerAccountMenu_div1_div3 headerAccountMenu_div1_div2 headerAccountMenu_div1_div1">Đăng xuất</div>
        </div>
    </div>
    <div class="mobile_headerShoppingCartMenu"> 
        <div class="mobile_headerShoppingCartMenuFlexWrapper"><button id="mobile_headerShoppingCartMenuCloseButton" class="mobile_headerShoppingCartMenuCloseButton">x</button></div>
        <div class="mobile_headerShoppingCartMenuText">GIỎ HÀNG</div>
        <hr class="mobile_headerShoppingCartMenuLine">
        <img class="mobile_headerShoppingCartMenuIcon" src="images/shopping-cart-icon.jpg" alt="" width="75px" height="75px">
        <div class="mobile_headerShoppingCartMenuNoProductText">Hiện chưa có sản phẩm</div>
        <hr class="mobile_headerShoppingCartMenuLine">
        <div class="mobile_headerShoppingCartMenuTotalPrice">
            <div class="mobile_headerShoppingCartMenuTotalPriceLabelText">Tổng tiền</div>
            <div class="mobile_headerShoppingCartMenuTotalPriceNumberText">0đ</div>
        </div>
        <button id="mobile_headerShoppingCartMenuViewShoppingCartButton" class="mobile_headerShoppingCartMenuViewShoppingCartButton">Xem giỏ hàng</button>
    </div>
</header>`;
    }
}

customElements.define('header-component', HeaderComponent);
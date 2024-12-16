class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<header>
    <div class="changingIntroductionTextWrapper changingIntroductionTextWrapper_background-color">
        <button class="leftChangingIntroductionButton leftChangingIntroductionButton_color changingIntroductionTextWrapper_background-color" onclick="leftChangingIntroductionButton_onclick()"><</button>
        <div id="changingIntroductionText" class="changingIntroductionText">NZ Toys là nơi chuyên cung cấp mô hình chính hãng trên toàn thế giới</div>
        <button class="rightChangingIntroductionButton leftChangingIntroductionButton leftChangingIntroductionButton_color changingIntroductionTextWrapper_background-color" onclick="rightChangingIntroductionButton_onclick()">></button>
    </div>
    <nav class="headerNav">
        <button class="mobile_openHeaderNavLinkMenuButton">
            <img class="mobile_openHeaderNavLinkMenuButtonImage" src="images/hambuger-icon.jpg" alt="" width="25px" onclick="mobile_openHeaderNavLinkMenuButton_onclick()">
        </button>
        <img id="logoImage" class="logoImage" src="images/shop-logo.webp" alt="shopLogo" width="200px" onclick="logoImage_onclick(false)">
        <div class="headerNavLink" href="" onmouseover="headerNavLink_onmousehover(0)" onmouseleave="headerNavLink_onmouseleave(0)" onclick="headerNavLink_onclick('pages/contact.html')">
            <div class="headerNavLinkText" href="">Liên hệ</div>
            <div class="headerNavLinkHighlightBar"></div>
        </div>
        <div class="headerNavLink" href="" onmouseover="headerNavLink_onmousehover(1)" onmouseleave="headerNavLink_onmouseleave(1)" onclick="headerNavLink_onclick('pages/available.html')">
            <div class="headerNavLinkText" href="">Hàng có sẵn</div>
            <div class="headerNavLinkHighlightBar"></div>
        </div>
        <div id="header_faqsNavLink" class="headerNavLink" href="" onmouseover="header_faqsNavLink_onmousehover()" onmouseleave="header_faqsNavLink_onmouseleave()" onclick="headerNavLink_onclick('pages/faqs.html')">
            <div class="headerNavLinkText" href="">FAQs</div>
            <div class="headerNavLinkHighlightBar"></div>
        </div>
        <div class="headerUserNavFlexWrapper">
            <div class="headerSearchButton" onclick="headerSearchButton_onclick(true)">
                <img class="headerSearchButtonIcon" src="images/search-icon.webp" alt="" width="25px" height="30px">
                <div class="headerSearchButtonText">Tìm kiếm</div>
            </div>
            <button class="mobile_headerSearchButton" onclick="mobile_headerSearchBar_onclick(true)">
                <img class="mobile_headerSearchBarImage" src="images/search-icon.webp" alt="" width="25px">
            </button>
            <div class="headerAccountButton">
                <img class="headerAccountButtonIcon" src="images/account-icon.png" alt="" width="25px" height="30px">
                <div class="headerAccountButtonText">Tài khoản</div>
                <button class="headerAccountButtonClickZone" onclick="headerAccountButtonClickZone_onclick()"></button>
                <div class="headerAccountMenu"> 
                    <div class="headerAccountMenuText">ĐĂNG NHẬP TÀI KHOẢN</div>
                    <div class="headerAccountMenuInstructiontext">Nhập email và mật khẩu của bạn:</div>
                    <hr class="headerAccountMenuLine">
                    <form class="headerAccountMenuLoginForm">
                        <input class="headerAccountMenuEmailInput" type="email" placeholder="Email">
                        <input class="headerAccountMenuPasswordInput" type="password" placeholder="Mật khẩu">
                        <div class="headerAccountMenuRuleText">Trang web này được bảo vệ bởi reCAPTCHA cũng như <a class="mobile_headerAccountMenuRuleLink" href="">Chính sách quyền riêng tư</a> và <a class="mobile_headerAccountMenuRuleLink" href="">Điều khoản dịch vụ của Google</a>.</div>
                        <button class="headerAccountMenuLoginButtonButton">ĐĂNG NHẬP</button>
                    </form>
                    <div class="headerAccountMenuRegisterText">Khách hàng mới? <a href="pages/register.html" class="headerAccountMenuRegisterLink">Tạo tài khoản</a></div>
                    <div class="headerAccountMenuRecoverPasswordText">Quên mật khẩu? <a href="pages/recover-password.html" class="headerAccountMenuRecoverPasswordLink">Khôi phục mật khẩu</a></div>
                </div>
            </div>
            <div class="headerShoppingCartButton">
                <img class="headerShoppingCartButtonIcon" src="images/shopping-cart-icon.jpg" alt="" width="25px" height="30px">
                <div class="headerShoppingCartButtonText">Giỏ hàng</div>
                <button class="headerShoppingCartButtonClickZone" onclick="headerShoppingCartButtonClickZone_onclick()"></button>
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
                    <button class="headerShoppingCartMenuViewShoppingCartButton" onclick="headerShoppingCartMenuViewShoppingCartButton_onclick(true)">Xem giỏ hàng</button>
                </div>
            </div>
        </div>
        <div id="header_faqDropMenu" class="headerNav_div0" onmouseenter="header_faqDropMenu_onmouseenter()" onmouseleave="header_faqDropMenu_onmouseleave()">
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
        <button class="mobile_headerNavLinkMenuCloseButton"onclick="mobile_headerNavLinkMenuCloseButton_onclick()">x</button>
    </div>
    <div class="mobile_headerAccountMenu"> 
        <div class="mobile_headerAccountMenuFlexWrapper" onclick="mobile_headerAccountMenuFlexWrapper_onclick()">
            <button class="mobile_headerAccountMenuCloseButton">x</button>
        </div>
        <div class="mobile_headerAccountMenuText">ĐĂNG NHẬP TÀI KHOẢN</div>
        <div class="mobile_headerAccountMenuInstructiontext">Nhập email và mật khẩu của bạn:</div>
        <hr class="mobile_headerAccountMenuLine">
        <form class="mobile_headerAccountMenuLoginForm">
            <input class="mobile_headerAccountMenuEmailInput" type="email" placeholder="Email">
            <input class="mobile_headerAccountMenuPasswordInput" type="password" placeholder="Mật khẩu">
            <div class="mobile_headerAccountMenuRuleText">Trang web này được bảo vệ bởi reCAPTCHA cũng như <a class="mobile_headerAccountMenuRuleLink" href="">Chính sách quyền riêng tư</a> và <a class="mobile_headerAccountMenuRuleLink" href="">Điều khoản dịch vụ của Google</a>.</div>
            <button class="mobile_headerAccountMenuLoginButtonButton">ĐĂNG NHẬP</button>
        </form>
        <div class="mobile_headerAccountMenuRegisterText">Khách hàng mới? <a href="pages/register.html" class="mobile_headerAccountMenuRegisterLink">Tạo tài khoản</a></div>
        <div class="mobile_headerAccountMenuRecoverPasswordText">Quên mật khẩu? <a href="pages/recover-password.html" class="mobile_headerAccountMenuRecoverPasswordLink">Khôi phục mật khẩu</a></div>
    </div>
    <div class="mobile_headerShoppingCartMenu"> 
        <div class="mobile_headerShoppingCartMenuFlexWrapper"><button class="mobile_headerShoppingCartMenuCloseButton" onclick="mobile_headerShoppingCartMenuCloseButton_onclick()">x</button></div>
        <div class="mobile_headerShoppingCartMenuText">GIỎ HÀNG</div>
        <hr class="mobile_headerShoppingCartMenuLine">
        <img class="mobile_headerShoppingCartMenuIcon" src="images/shopping-cart-icon.jpg" alt="" width="75px" height="75px">
        <div class="mobile_headerShoppingCartMenuNoProductText">Hiện chưa có sản phẩm</div>
        <hr class="mobile_headerShoppingCartMenuLine">
        <div class="mobile_headerShoppingCartMenuTotalPrice">
            <div class="mobile_headerShoppingCartMenuTotalPriceLabelText">Tổng tiền</div>
            <div class="mobile_headerShoppingCartMenuTotalPriceNumberText">0đ</div>
        </div>
        <button class="mobile_headerShoppingCartMenuViewShoppingCartButton" onclick="mobile_headerShoppingCartMenuViewShoppingCartButton_onclick(true)">Xem giỏ hàng</button>
    </div>
</header>`;
    }
}

customElements.define('header-component', HeaderComponent);
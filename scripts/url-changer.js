let URLChanger_srcNameList = {
    0: 'logoImage',
    1: 'headerSearchButtonIcon',
    2: 'headerAccountButtonIcon',
    3: 'headerShoppingCartButtonIcon',
    4: 'headerShoppingCartMenuIcon',
    5: 'mobile_headerShoppingCartMenuIcon',
    6: 'mobile_openHeaderNavLinkMenuButtonImage',
    7: 'mobile_headerSearchBarImage',
    8: 'footerContactInformationsImage',
};

for (var key in URLChanger_srcNameList) {
    let element = document.getElementsByClassName(URLChanger_srcNameList[key])[0];
    element.setAttribute('src', '../' + element.getAttribute('src'));
}

document.getElementsByClassName('logoImage')[0].setAttribute('onclick', 'logoImage_onclick(true)');
document.getElementsByClassName('headerNavLink')[0].setAttribute('onclick', 'headerNavLink_onclick("contact.html")');
document.getElementsByClassName('headerNavLink')[1].setAttribute('onclick', 'headerNavLink_onclick("available.html")');
document.getElementsByClassName('headerNavLink')[2].setAttribute('onclick', 'headerNavLink_onclick("faqs.html")');
document.getElementsByClassName('headerSearchButton')[0].setAttribute('onclick', 'headerSearchButton_onclick(false)');
document.getElementsByClassName('mobile_headerSearchButton')[0].setAttribute('onclick', 'mobile_headerSearchBar_onclick(false)');
document.getElementsByClassName('headerShoppingCartMenuViewShoppingCartButton')[0].setAttribute('onclick', 'headerShoppingCartMenuViewShoppingCartButton_onclick(false)');
document.getElementsByClassName('mobile_headerShoppingCartMenuViewShoppingCartButton')[0].setAttribute('onclick', 'mobile_headerShoppingCartMenuViewShoppingCartButton_onclick(false)');
document.getElementsByClassName('li')[0].setAttribute('onclick', "footer_Li_onclick('../pages/chinh-sach-mua-hang.html')");
document.getElementsByClassName('li')[1].setAttribute('onclick', "footer_Li_onclick('../pages/chinh-sach-doi-tra.html')");
document.getElementsByClassName('li')[2].setAttribute('onclick', "footer_Li_onclick('../pages/contact.html')");
document.getElementsByClassName('li')[3].setAttribute('onclick', "footer_Li_onclick('../pages/search.html')");
document.getElementsByClassName('mobile_headerNavLinkMenuLink')[0].setAttribute('href', 'contact.html');
document.getElementsByClassName('mobile_headerNavLinkMenuLink')[1].setAttribute('href', 'available.html');
document.getElementsByClassName('mobile_headerNavLinkMenuLink')[2].setAttribute('href', 'faqs.html');
document.getElementsByClassName('mobile_headerNavLinkMenuLink')[3].setAttribute('href', 'chinh-sach-mua-hang.html');
document.getElementsByClassName('mobile_headerNavLinkMenuLink')[4].setAttribute('href', 'chinh-sach-doi-tra.html');
document.getElementsByClassName('headerAccountMenuRegisterLink')[0].setAttribute('href', '../pages/register.html');
document.getElementsByClassName('headerAccountMenuRecoverPasswordLink')[0].setAttribute('href', '../pages/recover-password.html');
document.getElementsByClassName('mobile_headerAccountMenuRegisterLink')[0].setAttribute('href', '../pages/register.html');
document.getElementsByClassName('mobile_headerAccountMenuRecoverPasswordLink')[0].setAttribute('href', '../pages/recover-password.html');
document.getElementsByClassName('headerNav_div0_a0')[0].setAttribute('href', 'chinh-sach-mua-hang.html');
document.getElementsByClassName('headerNav_div0_a1')[0].setAttribute('href', 'chinh-sach-doi-tra.html');
document.getElementsByClassName('headerNav_div0_a2')[0].setAttribute('href', 'faqs.html');
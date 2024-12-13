let footer = new Footer();
footer.Awake();

function body_onresize() {
    footer.UpdatePosition();
}

function sendButton_onclick() {
    RecoverPassword_LoadIndexPage();
}

function RecoverPassword_LoadIndexPage() {
    window.location.href = '../index.html';
}

function cancelButton_onclick() {
    RecoverPassword_LoadIndexPage();
}
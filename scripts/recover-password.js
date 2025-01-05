let dataBase = new DataBase();
dataBase.Awake();
let header = new Header(false);
header.HandleSetDataBase(dataBase);
let footer = new Footer();
footer.Awake();

setInterval(() => {
    header.Update();
}, 100);

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
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
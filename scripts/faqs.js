class ChinhSachDoiTra {
    dataBase;
    header;
    footer;

    Awake() {
        this.dataBase = new DataBase();
        this.dataBase.Awake();
        this.header = new Header(false);
        this.header.HandleSetDataBase(this.dataBase);
        this.footer = new Footer();
        this.footer.Awake();
    }

    Update() {
        this.header.Update();
    }
}

let chinhSachDoiTra = new ChinhSachDoiTra();
chinhSachDoiTra.Awake();
setInterval(() => {
    chinhSachDoiTra.Update();
}, 100);

function body_onresize() {
    chinhSachDoiTra.footer.UpdatePosition();
}
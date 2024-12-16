let footer = new Footer();
footer.Awake();

function body_onresize() {
    footer.UpdatePosition();
}
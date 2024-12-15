class Footer {
    Awake() {
        this.UpdatePosition();
    }

    UpdatePosition() {
        let footer = document.getElementsByClassName('footer')[0];
        let style = footer.style;
        style.marginTop = '50px';
        let bodyHeight = document.body.clientHeight;
        let windowHeight = window.innerHeight;

        if (bodyHeight < windowHeight)
            style.marginTop = (windowHeight - bodyHeight + 50) + 'px';
    }
}

function footer_Li_onclick(_url) {
    window.location.href = _url;
}
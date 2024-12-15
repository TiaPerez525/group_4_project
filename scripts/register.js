let footer = new Footer();
footer.Awake();

function body_onresize() {
    footer.UpdatePosition();
}

function maleCheckBox_onchange(_checkbox) {
    if (_checkbox.checked) {
        let femaleCheckBox = document.getElementById('female-check-box');

        if (femaleCheckBox.checked) 
            femaleCheckBox.checked = false;
    }
    else 
        _checkbox.checked = true;
}

function femaleCheckBox_onchange(_checkbox) {
    if (_checkbox.checked) {
        let maleCheckBox = document.getElementById('male-check-box');
    
        if (maleCheckBox.checked) 
            maleCheckBox.checked = false;
    }
    else 
        _checkbox.checked = true;
}

function registerButton_onclick() {
    window.location.href = '../index.html';
}
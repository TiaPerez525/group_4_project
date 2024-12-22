class Register {
    footer;
    dataBase;

    Awake() {
        this.footer = new Footer();
        this.footer.Awake();
        document.getElementById('maleCheckBox').checked = true;
        this.dataBase = new DataBase();
        this.dataBase.Awake();
    }
}

let register = new Register();
register.Awake();

function body_onresize() {
    register.footer.UpdatePosition();
}

function maleCheckBox_onchange(_checkbox) {
    if (_checkbox.checked) {
        let femaleCheckBox = document.getElementById('femaleCheckBox');

        if (femaleCheckBox.checked) 
            femaleCheckBox.checked = false;
    }
    else 
        _checkbox.checked = true;
}

function femaleCheckBox_onchange(_checkbox) {
    if (_checkbox.checked) {
        let maleCheckBox = document.getElementById('maleCheckBox');
    
        if (maleCheckBox.checked) 
            maleCheckBox.checked = false;
    }
    else 
        _checkbox.checked = true;
}

function registerButton_onclick() {
    let textInputIdArray = [
        'firstNameInput',
        'lastNameInput',
        'birthDayInput',
        'emailInput',
        'passwordInput'
    ];

    let textInputIdArrayLength = 5;
    let textInputValueArray = [5];

    for (let i = 0; i < textInputIdArrayLength; i++) {
        let inputElement = document.getElementById(textInputIdArray[i]);
        let textInputValue = inputElement.value;

        if (textInputValue.length == 0)
            return;

        textInputValueArray[i] = textInputValue;
    }

    let email = textInputValueArray[3];
    event.preventDefault();     // Allow the next line to work

    for (var i = 0; i < register.dataBase.accountListLength; i++) 
        if (register.dataBase.accountList[i].email == email) {
            alert('Email ' + email + ' đã được sử dụng cho một tài khoản khác!');
            return;
        }
        
    let account = new Account(textInputValueArray[0], textInputValueArray[1], 
    email, textInputValueArray[4]);
    register.dataBase.AddAccount(account);
    window.location.href = '../index.html';
}

function removeRedBorder(_this) {
    _this.style.border = 'none';
}
class users {
    constructor(firstName, family, birthDay) {
        (this.firstName = firstName), (this.lastName = family), (this.birthDay = birthDay);
    }

    listMaker() {
        document.querySelector(`.list`).innerHTML += `<div class="user">
        <div class="block"> ${this.firstName}</div>
        <div class="block"> ${this.lastName}</div>
        <div class="block"> ${this.birthDay}</div>
    </div>`;
    }
}

let insertUser = function () {
    const userName = document.querySelector(`#name`).value;
    const userLastName = document.querySelector(`#last-name`).value;
    const userBirthDay = document.querySelector(`#birthDay`).value;
    let u = new users(userName, userLastName, userBirthDay);
    console.log(u.listMaker());
};

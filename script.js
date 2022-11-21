document.querySelector("#modalStart").addEventListener("click", function () {
    document.querySelector(".modalBlock").insertAdjacentHTML('beforeend', `
    <div class="modal-wrapper del">
        <div class="modal del">
            <div class="modal-close del">X</div>
            <label for="name" class="modal-input-name del">Введите имя</label>
            <input type="text" name="name" class="modal-input del">
            <label for="password" class="modal-input-name del">Введите пароль</label>
            <input type="password" name="password" class="modal-input del">
            <button class="modal-button del">Авторизация</button>
        </div>
    </div>
    `)
    document.querySelector(".modal-close").addEventListener("click", function(){
        document.querySelectorAll(".del").forEach(item => item.remove())
    })
    document.querySelector(".modal-wrapper").addEventListener("click", function(event){
        if(event.target == event.currentTarget){
            document.querySelectorAll(".del").forEach(item => item.remove())
        }
    })
    document.addEventListener("keyup", function (event){
        if(event.key == "Escape"){
            document.querySelectorAll(".del").forEach(item => item.remove())
        }
    })
})
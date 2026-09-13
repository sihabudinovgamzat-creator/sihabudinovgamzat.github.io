/* ==================================================
   AURELIA
   ОСНОВНОЙ JAVASCRIPT
================================================== */


/* ==================================================
   ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
================================================== */

const $ = selector =>
    document.querySelector(selector);


const $$ = selector =>
    [...document.querySelectorAll(selector)];


/* ==================================================
   МЕНЮ РЕСТОРАНА
================================================== */

const menu = [

    /* ================= ЗАКУСКИ ================= */

    {
        cat: "Закуски",
        name: "Тартар из лосося",
        desc: "Лосось, авокадо, цитрус, икра",
        price: "1 900 ₽"
    },

    {
        cat: "Закуски",
        name: "Карпаччо из говядины",
        desc: "Пармезан, трюфельное масло, руккола",
        price: "2 100 ₽"
    },

    {
        cat: "Закуски",
        name: "Буррата с томатами",
        desc: "Буррата, томаты, базилик, оливковое масло",
        price: "1 650 ₽"
    },

    {
        cat: "Закуски",
        name: "Тунец Bluefin",
        desc: "Тунец, кунжут, понзу, авокадо",
        price: "2 400 ₽"
    },

    {
        cat: "Закуски",
        name: "Креветки с цитрусом",
        desc: "Тигровые креветки, грейпфрут, лайм",
        price: "2 200 ₽"
    },

    {
        cat: "Закуски",
        name: "Фуа-гра с бриошью",
        desc: "Фуа-гра, бриошь, ягодный соус",
        price: "2 900 ₽"
    },

    {
        cat: "Закуски",
        name: "Осьминог на гриле",
        desc: "Осьминог, молодой картофель, соус ромеско",
        price: "2 700 ₽"
    },

    {
        cat: "Закуски",
        name: "Устрицы Fine de Claire",
        desc: "Устрицы, лимон, соус миньонет",
        price: "2 600 ₽"
    },


    /* ================= ОСНОВНЫЕ ================= */

    {
        cat: "Основные",
        name: "Филе миньон AURELIA",
        desc: "Говядина, соус демиглас, картофельный крем",
        price: "4 800 ₽"
    },

    {
        cat: "Основные",
        name: "Лосось на гриле",
        desc: "Спаржа, лимонный соус, красная икра",
        price: "3 200 ₽"
    },

    {
        cat: "Основные",
        name: "Ризотто с белыми грибами",
        desc: "Пармезан, трюфель, лесные грибы",
        price: "2 700 ₽"
    },

    {
        cat: "Основные",
        name: "Утиная грудка",
        desc: "Утка, вишнёвый соус, сельдерей, молодой картофель",
        price: "3 600 ₽"
    },

    {
        cat: "Основные",
        name: "Дорадо с травами",
        desc: "Дорадо, лимон, фенхель, зелёное масло",
        price: "3 400 ₽"
    },

    {
        cat: "Основные",
        name: "Стейк Рибай",
        desc: "Премиальная говядина, перечный соус, овощи гриль",
        price: "5 900 ₽"
    },

    {
        cat: "Основные",
        name: "Чёрная треска",
        desc: "Треска, мисо, брокколи, соус юдзу",
        price: "3 800 ₽"
    },

    {
        cat: "Основные",
        name: "Паста с лобстером",
        desc: "Лобстер, тальятелле, томаты, сливочный соус",
        price: "4 500 ₽"
    },

    {
        cat: "Основные",
        name: "Телячьи щёчки",
        desc: "Томлёная телятина, крем из сельдерея, демиглас",
        price: "3 900 ₽"
    },


    /* ================= ДЕСЕРТЫ ================= */

    {
        cat: "Десерты",
        name: "Золотой медовик",
        desc: "Мёд, сливочный крем, карамель",
        price: "1 200 ₽"
    },

    {
        cat: "Десерты",
        name: "Шоколадный фондан",
        desc: "Тёмный шоколад, ванильное мороженое",
        price: "1 350 ₽"
    },

    {
        cat: "Десерты",
        name: "Павлова AURELIA",
        desc: "Меренга, ванильный крем, свежие ягоды",
        price: "1 300 ₽"
    },

    {
        cat: "Десерты",
        name: "Тирамису Signature",
        desc: "Маскарпоне, эспрессо, какао",
        price: "1 250 ₽"
    },

    {
        cat: "Десерты",
        name: "Лимонный тарт",
        desc: "Лимонный крем, меренга, ваниль",
        price: "1 150 ₽"
    },

    {
        cat: "Десерты",
        name: "Фисташковый десерт",
        desc: "Фисташка, белый шоколад, малина",
        price: "1 450 ₽"
    },


    /* ================= НАПИТКИ ================= */

    {
        cat: "Напитки",
        name: "AURELIA Signature",
        desc: "Авторский безалкогольный коктейль",
        price: "850 ₽"
    },

    {
        cat: "Напитки",
        name: "Espresso Martini",
        desc: "Кофе, ваниль, какао",
        price: "1 100 ₽"
    },

    {
        cat: "Напитки",
        name: "Berry Noir",
        desc: "Ягоды, розмарин, цитрус, тоник",
        price: "900 ₽"
    },

    {
        cat: "Напитки",
        name: "Golden Citrus",
        desc: "Апельсин, маракуйя, ваниль",
        price: "850 ₽"
    },

    {
        cat: "Напитки",
        name: "Cold Brew AURELIA",
        desc: "Холодный кофе, ваниль, сливочная пена",
        price: "750 ₽"
    },

    {
        cat: "Напитки",
        name: "Matcha Latte",
        desc: "Японская матча, молоко, ваниль",
        price: "700 ₽"
    },

    {
        cat: "Напитки",
        name: "Домашний лимонад",
        desc: "Лимон, мята, цитрус, сироп бузины",
        price: "650 ₽"
    }

];


/* ==================================================
   КОМАНДА
================================================== */

const team = [

{
    cat: "Руководство",
    name: "Александр Волков",
    role: "Управляющий рестораном",
    rating: "5.0",
    count: 128
},

{
    cat: "Руководство",
    name: "Екатерина Соколова",
    role: "Заместитель управляющего",
    rating: "4.9",
    count: 96
},

{
    cat: "Руководство",
    name: "Ирина Белова",
    role: "Администратор",
    rating: "4.9",
    count: 84
},

{
    cat: "Зал",
    name: "София Белова",
    role: "Хостес",
    rating: "4.9",
    count: 92
},

{
    cat: "Зал",
    name: "Мария Лебедева",
    role: "Старший официант",
    rating: "4.9",
    count: 87
},

{
    cat: "Зал",
    name: "Илья Романов",
    role: "Официант",
    rating: "4.8",
    count: 74
},

{
    cat: "Зал",
    name: "Максим Орлов",
    role: "Бармен",
    rating: "4.9",
    count: 81
},

{
    cat: "Зал",
    name: "Полина Смирнова",
    role: "Бариста",
    rating: "5.0",
    count: 103
},

{
    cat: "Зал",
    name: "Артём Крылов",
    role: "Кассир",
    rating: "4.8",
    count: 69
},

{
    cat: "Кухня",
    name: "Елена Морозова",
    role: "Шеф-повар",
    rating: "5.0",
    count: 214
},

{
    cat: "Кухня",
    name: "Даниил Орлов",
    role: "Су-шеф",
    rating: "4.9",
    count: 106
},

{
    cat: "Кухня",
    name: "Виктор Громов",
    role: "Старший повар",
    rating: "4.9",
    count: 98
},

{
    cat: "Кухня",
    name: "Николай Власов",
    role: "Повар горячего цеха",
    rating: "4.8",
    count: 91
},

{
    cat: "Кухня",
    name: "Алина Фёдорова",
    role: "Повар холодного цеха",
    rating: "4.9",
    count: 88
},

{
    cat: "Кухня",
    name: "Ксения Романова",
    role: "Кондитер",
    rating: "5.0",
    count: 117
},

{
    cat: "Кухня",
    name: "Роман Волков",
    role: "Пиццайоло",
    rating: "4.9",
    count: 79
},

{
    cat: "Кухня",
    name: "Андрей Мельников",
    role: "Заготовщик",
    rating: "4.8",
    count: 63
},

{
    cat: "Кухня",
    name: "Сергей Никитин",
    role: "Кухонный работник",
    rating: "4.8",
    count: 58
},

{
    cat: "Кухня",
    name: "Олег Петров",
    role: "Посудомойщик",
    rating: "4.9",
    count: 72
},

{
    cat: "Обслуживание",
    name: "Алексей Воронов",
    role: "Кладовщик",
    rating: "4.8",
    count: 61
},

{
    cat: "Обслуживание",
    name: "Наталья Орлова",
    role: "Закупщик",
    rating: "4.9",
    count: 76
},

{
    cat: "Обслуживание",
    name: "Татьяна Сергеева",
    role: "Уборщик",
    rating: "4.9",
    count: 85
},

{
    cat: "Обслуживание",
    name: "Дмитрий Козлов",
    role: "Курьер",
    rating: "4.8",
    count: 67
},

{
    cat: "Обслуживание",
    name: "Михаил Егоров",
    role: "Технический сотрудник",
    rating: "4.9",
    count: 54
}

];



/* ==================================================
   ФИЛЬТРЫ
================================================== */

function makeFilters(container, values, callback) {

    container.innerHTML = values.map((value, index) => {

        return `
            <button
                class="filter ${index === 0 ? "active" : ""}"
                data-value="${value}">

                ${value}

            </button>
        `;

    }).join("");


    container.addEventListener("click", event => {

        if (!event.target.classList.contains("filter")) {
            return;
        }


        $$(".filter", container)
            .forEach(button =>
                button.classList.remove("active")
            );


        event.target.classList.add("active");


        callback(
            event.target.dataset.value
        );

    });

}


/* ==================================================
   ОТРИСОВКА МЕНЮ
================================================== */

function renderMenu(filter = "Все") {

    const list =
        filter === "Все"
            ? menu
            : menu.filter(item =>
                item.cat === filter
            );


    $("#menuGrid").innerHTML =

        list.map(item => {

            return `

                <article class="card">

                    <div class="image-placeholder card-img">

                        ФОТО БЛЮДА

                        <small>
                            AURELIA
                        </small>

                    </div>


                    <div class="card-body">

                        <p class="eyebrow">
                            ${item.cat}
                        </p>


                        <h3>
                            ${item.name}
                        </h3>


                        <p>
                            ${item.desc}
                        </p>


                        <div class="card-meta">

                            <span class="price">
                                ${item.price}
                            </span>


                            <button
                                class="details-btn"
                                data-menu="${menu.indexOf(item)}">

                                Подробнее →

                            </button>

                        </div>

                    </div>

                </article>

            `;

        }).join("");

}


makeFilters(
    $("#menuFilters"),
    [
        "Все",
        "Закуски",
        "Основные",
        "Десерты",
        "Напитки"
    ],
    renderMenu
);


renderMenu();


/* ==================================================
   КОМАНДА
================================================== */

function renderTeam(filter = "Все") {

    const list =
        filter === "Все"
            ? team
            : team.filter(item =>
                item.cat === filter
            );


    $("#teamGrid").innerHTML =

        list.map(item => {

            return `

                <article class="card team-card">

                    <div class="image-placeholder card-img">

                        ФОТО СОТРУДНИКА

                        <small>
                            ${item.role}
                        </small>

                    </div>


                    <div class="card-body">

                        <p class="team-role">
                            ${item.cat}
                        </p>


                        <h3>
                            ${item.name}
                        </h3>


                        <p>
                            ${item.role}
                        </p>


                        <div class="card-meta">

                            <span class="stars">

                                ★★★★★

                                <small>
                                    ${item.rating}
                                    (${item.count})
                                </small>

                            </span>


                            <button
                                class="details-btn"
                                data-team="${team.indexOf(item)}">

                                Отзывы →

                            </button>

                        </div>

                    </div>

                </article>

            `;

        }).join("");

}


makeFilters(
    $("#teamFilters"),
    [
        "Все",
        "Руководство",
        "Зал",
        "Кухня",
        "Обслуживание"
    ],
    renderTeam
);


renderTeam();


/* ==================================================
   MODAL
================================================== */

function openModal(content) {

    $("#modalContent").innerHTML =
        content;

    $("#modal").classList.add("open");

}


function closeModal() {

    $("#modal")
        .classList
        .remove("open");

}


$("#modalClose")
    .onclick = closeModal;


$("#modal").onclick = event => {

    if (event.target.id === "modal") {
        closeModal();
    }

};


/* ==================================================
   ЗВЁЗДЫ
================================================== */

function stars(number) {

    return (
        "★".repeat(number) +
        "☆".repeat(5 - number)
    );

}


/* ==================================================
   КЛИКИ ПО КАРТОЧКАМ
================================================== */

document.addEventListener(
    "click",
    event => {


        /* ---------- БЛЮДО ---------- */

        if (event.target.dataset.menu) {

            const item =
                menu[
                    event.target.dataset.menu
                ];


            openModal(`

                <p class="eyebrow">
                    ${item.cat}
                </p>

                <h2>
                    ${item.name}
                </h2>

                <p>
                    ${item.desc}
                </p>

                <h3 style="color:#c9a45c">
                    ${item.price}
                </h3>

                <p>
                    Здесь можно добавить
                    полный состав блюда,
                    вес, калорийность
                    и аллергены.
                </p>

            `);

        }


        /* ---------- СОТРУДНИК ---------- */

        if (event.target.dataset.team) {

            const person =
                team[
                    event.target.dataset.team
                ];


            openModal(`

                <p class="eyebrow">
                    ${person.role}
                </p>

                <h2>
                    ${person.name}
                </h2>

                <p>
                    ${stars(
                        Math.round(
                            Number(person.rating)
                        )
                    )}

                    ${person.rating}
                </p>


                <div class="modal-review">

                    <strong>
                        Анна • 5/5
                    </strong>

                    <p>
                        Очень внимательный
                        и профессиональный сервис.
                    </p>

                </div>


                <div class="modal-review">

                    <strong>
                        Михаил • 5/5
                    </strong>

                    <p>
                        Спасибо за прекрасный
                        вечер и рекомендации.
                    </p>

                </div>

            `);

        }


        /* ---------- СОБЫТИЕ ---------- */

        if (event.target.dataset.event) {

            openModal(`

                <p class="eyebrow">
                    EVENT
                </p>

                <h2>
                    ${event.target.dataset.event}
                </h2>

                <p>
                    Здесь можно разместить
                    полное описание события,
                    программу, стоимость участия
                    и количество доступных мест.
                </p>

                <a
                    href="#booking"
                    class="btn btn-gold"
                    onclick="closeModal()">

                    Забронировать

                </a>

            `);

        }


        /* ---------- СЕРТИФИКАТ ---------- */

        if (
            event.target.classList
                .contains("certificate-btn")
        ) {

            openModal(`

                <p class="eyebrow">
                    GIFT CERTIFICATE
                </p>

                <h2>
                    Сертификат
                    ${event.target.dataset.value}
                </h2>

                <p>
                    Здесь можно сделать
                    полноценное оформление
                    и оплату сертификата.
                </p>

                <button
                    class="btn btn-gold"
                    onclick="closeModal()">

                    Продолжить

                </button>

            `);

        }

    }
);


/* ==================================================
   КАРТА СТОЛОВ
================================================== */

const tableMap =
    $("#tableMap");


const tables =
    [1,2,3,4,5,6,7,8,9];


// Сейчас эти столы считаются занятыми
const reservedTables =
    [3,7];


let selectedTable =
    null;


tableMap.innerHTML =

    tables.map(number => {

        const reserved =
            reservedTables
                .includes(number);


        return `

            <button

                class="
                    table
                    t${number}
                    ${reserved ? "reserved" : ""}
                "

                data-table="${number}"

                ${reserved ? "disabled" : ""}>

                Стол ${number}

            </button>

        `;

    }).join("");


$$(".table").forEach(table => {

    table.onclick = () => {

        if (table.disabled) {
            return;
        }


        $$(".table")
            .forEach(item =>
                item.classList.remove(
                    "selected"
                )
            );


        table.classList.add(
            "selected"
        );


        selectedTable =
            table.dataset.table;


        updateSummary();
    };
});
/* ==================================================
   ВХОД В АККАУНТ
================================================== */

$("#loginBtn").onclick = () => {

    openModal(`

        <p class="eyebrow">
            AURELIA
        </p>

        <h2>
            Вход в аккаунт
        </h2>

        <p>
            Войдите, чтобы управлять бронированиями
            и пользоваться привилегиями AURELIA CLUB.
        </p>

        <div class="auth-form">

            <input
                type="email"
                id="loginEmail"
                placeholder="Ваш email"
                required>

            <input
                type="password"
                id="loginPassword"
                placeholder="Пароль"
                required>

            <button
                class="btn btn-gold"
                type="button"
                id="loginSubmit">

                Войти

            </button>

        </div>

    `);

    setTimeout(() => {

        const loginSubmit = $("#loginSubmit");

        if (loginSubmit) {

            loginSubmit.onclick = () => {

                const email =
                    $("#loginEmail").value.trim();

                const password =
                    $("#loginPassword").value.trim();

                if (!email || !password) {

                    alert("Введите email и пароль.");

                    return;
                }

                closeModal();

                openModal(`

                    <p class="eyebrow">
                        AURELIA
                    </p>

                    <h2>
                        Добро пожаловать
                    </h2>

                    <p>
                        Вы успешно вошли в аккаунт.
                    </p>

                `);

            };

        }

    }, 50);

};
/* ==================================================
   AURELIA CLUB
================================================== */

let selectedClubLevel = null;

$$(".club-card").forEach(card => {

    card.addEventListener("click", () => {

        $$(".club-card").forEach(item => {
            item.classList.remove("club-selected");
        });

        card.classList.add("club-selected");

        selectedClubLevel =
            card.querySelector("h3").textContent.trim();

    });

});


$("#clubBtn").onclick = () => {

    if (!selectedClubLevel) {

        openModal(`
            <p class="eyebrow">AURELIA CLUB</p>

            <h2>Выберите уровень</h2>

            <p>
                Сначала выберите уровень AURELIA CLUB.
            </p>
        `);

        return;
    }

    openModal(`

        <p class="eyebrow">
            AURELIA CLUB
        </p>

        <h2>
            ${selectedClubLevel}
        </h2>

        <p>
            Вы выбрали уровень
            <strong>${selectedClubLevel}</strong>.
        </p>

        <input
            type="email"
            id="clubEmail"
            placeholder="Ваш email">

        <br>
        <br>

        <button
            class="btn btn-gold"
            id="clubJoinConfirm"
            type="button">

            Вступить в AURELIA CLUB

        </button>

    `);

    const button = $("#clubJoinConfirm");

    if (button) {

        button.onclick = () => {

            const email =
                $("#clubEmail").value.trim();

            if (!email) {

                alert("Введите email.");

                return;
            }

            closeModal();

            openModal(`

                <p class="eyebrow">
                    AURELIA CLUB
                </p>

                <h2>
                    Добро пожаловать!
                </h2>

                <p>
                    Вы выбрали уровень
                    <strong>${selectedClubLevel}</strong>.
                </p>

                <p>
                    На ${email} будет отправлена
                    информация о вашем участии.
                </p>

            `);

        };

    }

};
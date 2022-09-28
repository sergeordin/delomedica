const img = document.querySelector('.quiz__content-img img')
const steps = document.querySelectorAll('.quiz__content-step')
const wrapper = document.querySelector('.quiz__wrapper')
const btn = document.querySelector('.quiz__content-btn-next')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.innerHTML = `
    <div class="quiz__content-question">
                            <div class="quiz__content-num">2</div>
                            Укажите вид необходимой услуги
                            (Можно выбрать несколько вариантов)
                        </div>
                        <div class="quiz__content-answer">
                            <div class="checkbox-col-1">
                                <p><input type="checkbox" class="checkbox">Предварительный/периодический медицинский
                                    осмотр
                                </p>
                                <p><input type="checkbox" class="checkbox">Выездной медицинский осмотр (профосмотр)
                                </p>
                                <p><input type="checkbox" class="checkbox">Личные медицинские книжки (ЛМК)
                                </p>
                                <p><input type="checkbox" class="checkbox">Психиатрическое освидетельствование
                                </p>
                                <p><input type="checkbox" class="checkbox">Предрейсовые/послерейсовые профосмотры
                                </p>
                                <p><input type="checkbox" class="checkbox">Предсменные/послесменные профосмотры
                                </p>
                            </div>
                            <div class="checkbox-col-2">
                                <p><input type="checkbox" class="checkbox">Организация здравпункта на предприятии
                                </p>
                                <p><input type="checkbox" class="checkbox">Диспансеризация
                                </p>
                                <p><input type="checkbox" class="checkbox">Вакцинация
                                </p>
                                <p><input type="checkbox" class="checkbox">Помощь в организации аттестации рабочих мест
                                    (СОУТ)
                                </p>
                                <p><input type="checkbox" class="checkbox">Тендерный отдел
                                </p>
                                <p><input type="checkbox" class="checkbox">Я не знаю, нужна помощь в подборе
                                </p>
                            </div>

                        </div>
                    </div>`;
    img.src = 'img/quiz/quest2.png';
})
console.log(steps)
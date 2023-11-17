<template>
  <div id="app">
    <form @submit.prevent="submitForm" class="form">
      <template v-if="!success">
        <div class="form__group">
          <label for="name" class="form__label">Имя*</label>
          <input
            name="name"
            type="text"
            v-model.trim="name"
            :class="{
              invalid:
                ($v.name.$dirty && !$v.name.required) ||
                ($v.name.$dirty && !$v.name.minLength),
            }"
            @blur="$v.name.$touch"
            class="form__input"
          />
          <template v-if="$v.name.$error">
            <p class="form__error" v-if="!$v.name.required">Введите имя</p>
            <p class="form__error" v-else>Введите более двух символов</p>
          </template>
        </div>
        <div class="form__group">
          <label for="surname" class="form__label">Фамилия*</label>
          <input
            name="surname"
            type="text"
            v-model.trim="surname"
            :class="{
              invalid:
                ($v.surname.$dirty && !$v.surname.required) ||
                ($v.surname.$dirty && !$v.surname.minLength),
            }"
            @blur="$v.surname.$touch"
            class="form__input"
          />
          <template v-if="$v.surname.$error">
            <p class="form__error" v-if="!$v.surname.required">
              Введите фамилию
            </p>
            <p class="form__error" v-else>Введите более двух символов</p>
          </template>
        </div>
        <div class="form__group">
          <label for="patronymic" class="form__label">Отчество</label>
          <input
            name="patronymic"
            type="text"
            v-model.trim="patronymic"
            class="form__input"
          />
        </div>
        <div class="form__group">
          <label for="birthDate" class="form__label">Дата рождения*</label>
          <input
            name="birthDate"
            type="date"
            v-model.trim="birthDate"
            :class="{
              invalid: $v.birthDate.$dirty && !$v.birthDate.required,
            }"
            @blur="$v.birthDate.$touch"
            class="form__input"
          />
          <template v-if="$v.birthDate.$error">
            <p class="form__error" v-if="!$v.birthDate.required">
              Введите дату рождения
            </p>
          </template>
        </div>
        <div class="form__group">
          <label for="phone" class="form__label">Телефон*</label>
          <input
            name="phone"
            type="phone"
            v-model.trim="phone"
            :class="{
              invalid:
                ($v.phone.$dirty && !$v.phone.required) ||
                ($v.phone.$dirty && !$v.phone.minLength) ||
                ($v.phone.$dirty && !$v.phone.numeric),
            }"
            @blur="$v.phone.$touch"
            class="form__input"
          />
          <template v-if="$v.phone.$error">
            <p class="form__error" v-if="!$v.phone.required">Введите телефон</p>
            <p class="form__error" v-else>Введите корректный телефон</p>
          </template>
        </div>
        <div class="form__group">
          <label for="sex" class="form__label">Пол</label>
          <input
            name="sex"
            type="text"
            v-model.trim="sex"
            class="form__input"
          />
        </div>
        <div class="form__group">
          <label for="clientType" class="form__label">Группа клиентов*</label>
          <select
            class="form__multiselect"
            :class="{
              invalid: $v.clientType.$dirty && !$v.clientType.required,
            }"
            v-model="clientType"
            name="clientType"
            multiple
            @blur="$v.clientType.$touch"
          >
            <option value="vip">VIP</option>
            <option value="problem">Проблемные</option>
            <option value="omc">ОМС</option>
          </select>
          <template v-if="$v.clientType.$error">
            <p class="form__error" v-if="!$v.clientType.required">
              Выберите группу
            </p>
          </template>
        </div>
        <div class="form__group">
          <label for="doctor" class="form__label">Лечащий врач</label>
          <div class="form__placeholder" v-if="!doctor">Выберите врача:</div>
          <select
            class="form__multiselect"
            v-model="doctor"
            name="doctor"
            placeholder="Выберите врача"
          >
            <option value="ivanov">Иванов</option>
            <option value="zaharov">Захаров</option>
            <option value="chernisheva">Чернышева</option>
          </select>
        </div>
        <div class="form__group-sms">
          <label for="sms" class="form__label">Не отправлять СМС</label>
          <input
            name="sms"
            type="checkbox"
            v-model.trim="sms"
            class="form__input"
          />
        </div>

        <h2 class="form__title">Адрес</h2>

        <div class="form__group">
          <label for="index" class="form__label">Индекс</label>
          <input
            name="index"
            type="text"
            v-model.trim="index"
            class="form__input"
          />
        </div>
        <div class="form__group">
          <label for="country" class="form__label">Страна</label>
          <input
            name="country"
            type="text"
            v-model.trim="country"
            class="form__input"
          />
        </div>
        <div class="form__group">
          <label for="region" class="form__label">Область</label>
          <input
            name="region"
            type="text"
            v-model.trim="region"
            class="form__input"
          />
        </div>
        <div class="form__group">
          <label for="city" class="form__label">Город*</label>
          <input
            name="city"
            type="text"
            v-model.trim="city"
            :class="{
              invalid:
                ($v.city.$dirty && !$v.city.required) ||
                ($v.city.$dirty && !$v.city.minLength),
            }"
            @blur="$v.city.$touch"
            class="form__input"
          />
          <template v-if="$v.city.$error">
            <p class="form__error" v-if="!$v.city.required">Введите город</p>
            <p class="form__error" v-else>Введите более двух символов</p>
          </template>
        </div>
        <div class="form__group">
          <label for="street" class="form__label">Улица</label>
          <input
            name="street"
            type="text"
            v-model.trim="street"
            class="form__input"
          />
        </div>
        <div class="form__group">
          <label for="house" class="form__label">Дом</label>
          <input
            name="house"
            type="text"
            v-model.trim="house"
            class="form__input"
          />
        </div>

        <h2 class="form__title">Паспорт</h2>

        <div class="form__group">
          <label for="documentType" class="form__label">Тип документа*</label>
          <div class="form__placeholder" v-if="!documentType">
            Выберите документ:
          </div>
          <select
            class="form__multiselect"
            :class="{
              invalid: $v.documentType.$dirty && !$v.documentType.required,
            }"
            @blur="$v.documentType.$touch"
            v-model="documentType"
            name="documentType"
            placeholder="Выберите врача"
          >
            <option value="ivanov">Паспорт</option>
            <option value="zaharov">Свидетельство о рождении</option>
            <option value="chernisheva">Вод. удостоверение</option>
          </select>
          <template v-if="$v.documentType.$error">
            <p class="form__error" v-if="!$v.documentType.required">
              Выберите документ
            </p>
          </template>
        </div>
        <div class="form__group">
          <label for="series" class="form__label">Серия</label>
          <input
            name="series"
            type="text"
            v-model.trim="series"
            class="form__input"
          />
        </div>
        <div class="form__group">
          <label for="number" class="form__label">Номер</label>
          <input
            name="number"
            type="text"
            v-model.trim="number"
            class="form__input"
          />
        </div>
        <div class="form__group">
          <label for="issuedBy" class="form__label">Кем выдан</label>
          <input
            name="issuedBy"
            type="text"
            v-model.trim="issuedBy"
            class="form__input"
          />
        </div>
        <div class="form__group">
          <label for="issuedDate" class="form__label">Дата выдачи*</label>
          <input
            name="issuedDate"
            type="date"
            v-model.trim="issuedDate"
            :class="{
              invalid: $v.issuedDate.$dirty && !$v.issuedDate.required,
            }"
            @blur="$v.issuedDate.$touch"
            class="form__input"
          />
          <template v-if="$v.issuedDate.$error">
            <p class="form__error" v-if="!$v.issuedDate.required">
              Введите дату выдачи
            </p>
          </template>
        </div>
        <button class="form__button">Отправить</button>
      </template>
      <div class="success" v-else>Новый клиент успешно создан</div>
    </form>
  </div>
</template>

<script>
import "@/assets/css/reset.css";
import { required, minLength, numeric } from "vuelidate/lib/validators";

export default {
  name: "form-test",
  data() {
    return {
      success: false,

      name: "",
      surname: "",
      patronymic: "",
      birthDate: "",
      phone: "",
      sex: "",
      clientType: [],
      doctor: "",
      sms: false,

      index: "",
      country: "",
      region: "",
      city: "",
      street: "",
      house: "",

      documentType: "",
      series: "",
      number: "",
      issuedBy: "",
      issuedDate: "",
    };
  },
  validations: {
    name: { required, minLength: minLength(2) },
    surname: { required, minLength: minLength(2) },
    birthDate: { required },
    phone: { required, minLength: minLength(10), numeric },
    clientType: { required },
    city: { required, minLength: minLength(2) },
    documentType: { required },
    issuedDate: { required },
  },
  methods: {
    async submitForm() {
      console.log(this.$v);
      this.$v.$touch();
      const isformCorrect = await this.$v.$invalid;

      if (!isformCorrect) {
        this.success = true;
      } else {
        alert("Введите все поля");
      }
    },
  },
};
</script>

<style lang="sass">
*
  box-sizing: border-box
#app
  padding: 0 10px
body
  color: #fff
  margin: 0
  background-color: #1c304d
.success
  text-align: center
.form
  display: flex
  align-items: center
  flex-direction: column
  margin: 0 auto
  width: 100%
  max-width: 700px
  padding: 30px 40px
  background-color: #061224
  border-radius: 5px
  margin-top: 100px
  &__title
    font-size: 20px
    margin-right: auto
    margin-left: 10px
    padding: 30px 0
  &__input
    border-radius: 5px
    border: 1px solid #fff
    outline: none
    padding: 12px 10px
  &__label
    margin-bottom: 3px
  &__placeholder
    pointer-events: none
    color: black
    position: absolute
    top: 28px
    left: 10px
  &__group
    position: relative
    display: flex
    flex-direction: column
    margin-bottom: 10px
    width: 100%
    &-sms
      margin-left: 5px
      margin-right: auto
      flex-direction: row
      & .form__label
        margin-bottom: 0
  &__button
    border: none
    border-radius: 10px
    padding: 10px 20px
    background-color: #fff
    align-self: flex-start
    margin-top: 20px
    cursor: pointer
  &__multiselect
    border-radius: 5px
    border: 1px solid #fff
    outline: none
    padding: 7px 10px
    overflow: hidden
    & option
      margin: 4px 0
  &__error
    margin: 0
    margin-top: 2px
    color: red
.invalid
  border: 2px solid red
</style>

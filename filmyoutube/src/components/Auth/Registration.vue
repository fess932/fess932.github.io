<template lang="pug">
  .content-wrapper
    section
      .container
        .auth
          .auth__banner
            img(src="https://i.ytimg.com/vi/UfQf0p7jNvo/maxresdefault.jpg")
          .auth__form
            span.ui-title-2 Регистрация
            form(@submit.prevent="onSubmit")
              .form-item(:class="{ 'errorInput': $v.email.$error }")
                input(
                  type="email"
                  placeholder="Email"
                  v-model="email"
                  :class="{ 'error': $v.email.$error }"
                  @change="$v.email.$touch()"
                )
                .error(v-if="!$v.email.required") Поле необходимо
                .error(v-if="!$v.email.email") Почта неправильна

              .form-item(:class="{ 'errorInput': $v.password.$error }")
                input(
                  type="password"
                  placeholder="Password"
                  v-model="password"
                  :class="{ 'error': $v.password.$error }"
                  @change="$v.password.$touch()"
                )
                .error(v-if="!$v.password.required") Нужен пароль.
                .error(v-if="!$v.password.minLength")
                  | У пароля должно быть хотя бы {{ $v.password.$params.minLength.min }} букв.


              .form-item(:class="{ 'errorInput': $v.repeatPassword.$error }")
                input(
                  type="password"
                  placeholder="Repeat your password"
                  v-model="repeatPassword"
                  :class="{ 'error': $v.repeatPassword.$error }"
                  @change="$v.repeatPassword.$touch()"
                )
                .error(v-if="!$v.repeatPassword.sameAsPassword") Пароли должны совпадать.
              .buttons-list
                button.button.button-primary(
                  type="submit"
                ) 
                  span(v-if="loading") Загрузка...
                  span(v-else) Регистрация
                .buttons-list.buttons-list--info
                  p.typo__p(v-if="submitStatus === 'OK'") Thanks for your submission!
                  p.typo__p(v-if="submitStatus === 'ERROR'") Please fill the form correctly.
                  p.typo__p(v-else) {{ submitStatus }}
                  //- p.typo__p(v-if="submitStatus === 'PENDING'") Sending...

                .buttons-list.buttons-list--info
                  span Do you have account?
                    router-link(to="/login")   Enter here

</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      submitStatus: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
          .then(()=>{
            console.log('REGISTER')
            this.submitStatus = 'OK'
            this.$router.push('/')
          })
          .catch(err=>{
            this.submitStatus = err.message
          })
        // do your submit logic here
        // this.submitStatus = 'PENDING'
        // setTimeout(() => {
        //   this.submitStatus = 'OK'
        // }, 500)
      }
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  }
}
</script>

<style lang="stylus" scoped>
.auth
  display flex
.auth__banner,
.auth__form
  width 50%

.form-item
  .error
    display none
    margin-bottom 8px
    font-size 13.4px
    color #fc5c65
  &.errorInput
    .error
      display block

input
  &.error
    border-color #fc5c65

.buttons-list
  text-align right
  margin-bottom 20px
  &.buttons-list--info
    text-align center
    &:last-child
      margin-bottom 0

a
  color #444ce0


</style>

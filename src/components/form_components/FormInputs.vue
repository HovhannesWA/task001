<template>
  <form @submit.prevent="onSubmit">
    <div class="error" v-if="$v.email.$dirty && !$v.email.required">Field is required</div>
    <div class="error" v-if="!$v.email.email">Must be currect email</div>
    <p>
      <input
        type="text"
        placeholder="Email"
        v-model.trim="$v.email.$model"
      />
    </p>

    <div class="error" v-if="$v.password.$dirty && !$v.password.required">Field is required</div>
    <div class="error" v-else-if="!$v.password.minLength">
      minimum 4 letters
    </div>
    <div class="error" v-else-if="!$v.password.regHasBigLetter">
      at least one uppercase character
    </div>
    <div class="error" v-else-if="!$v.password.regHasNUmber">
      at least one digit
    </div>
    <p>
      <input
        type="password"
        placeholder="Password"        
        v-model.trim="$v.password.$model"
      />
    </p>

    <div class="error" v-if="$v.repeatPassword.$dirty && !$v.repeatPassword.required">
      Field is required
    </div>
    <div class="error" v-else-if="$v.repeatPassword.$dirty && !$v.repeatPassword.samePassword">
      passwords must be same
    </div>
    <p>
      <input
        type="password"
        placeholder="Repeat Password"
        v-model.trim="$v.repeatPassword.$model"
      />
    </p>

    <div class="buttons_container">
      <button :class="{ bounce: invalidSubmit }" :disabled="invalidSubmit">
        Send
      </button>
    </div>
  </form>
</template>

<script>
import {
  required,
  minLength,
  email,
  helpers,
  sameAs,
} from "vuelidate/lib/validators";

// const regEmail = helpers.regex("regex", /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
const regHasNUmber = helpers.regex("regex", /[0-9]/);
const regHasBigLetter = helpers.regex("regex", /[A-Z]/);

export default {
  name: "FormInputs",

  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      invalidSubmit: false,
    };
  },
  validations: {
    email: {
      required,
      // regEmail,
      email
    },
    password: {
      required,
      minLength: minLength(4),
      regHasNUmber,
      regHasBigLetter,
    },
    repeatPassword: {
      required,
      samePassword: sameAs("password"),
    },
    validationAll: ["email"],
  },

  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.invalidSubmit = true;
        setTimeout(() => {
          this.invalidSubmit = false;
        }, 500);
      } else {
        event.target.submit();
      }
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}
p {
  width: 80%;
}

input {
  width: 100%;
  height: 50px;
  padding-left: 25px;
  color: #2e8b57;
  border: 2px solid #2e8b57;
  font-size: 2rem;
}

.error {
  color: red;
  width: 80%;
  padding: 10px;
  margin-bottom: -15px;
}

.pass-error {
  display: flex;
  flex-direction: row;
}

.buttons_container {
  width: 80%;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  font-size: 1.5rem;
  background-color: #19b9e7;
  color: #fff;
  margin-bottom: 10px;
  margin-right: 20px;
  cursor: pointer;
  border-radius: 5px;
}

.bounce {
  animation: bounce 0.5s;
  background-color: red;
}

@keyframes a {
  from {
    color: red;
  }
  to {
    color: green;
  }
}

@keyframes bounce {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>
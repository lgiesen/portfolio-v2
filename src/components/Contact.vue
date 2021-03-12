<template lang="pug">
v-dialog.mx-auto(width="80vw" height=" 80vh")
  v-card
    v-card-title
      h2.secondary--text Contact
    v-card-subtitle.text-start 
      h1.primary--text.display-1(primary) Contact Me
      h4.secondary--text Secondary Text - Subtite
    v-card-text
      v-form(
        ref="form"
        @submit.prevent="submit")
        v-row
          v-col
            v-text-field(
              required
              v-model="name"
              :counter="20"
              :error-messages="nameErrors"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
              label="Name*"
              prepend-icon="mdi-account")
          v-col
            v-text-field(
              required
              v-model="email"
              :error-messages="emailErrors"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
              label="Email*" 
              prepend-icon="mdi-email")
        v-row
          v-col
            v-text-field(
              required
              v-model="subject"
              :error-messages="subjectErrors"
              @input="$v.subject.$touch()"
              @blur="$v.subject.$touch()"
              label="Subject*" 
              prepend-icon="mdi-email")
        v-row 
          v-col 
            v-text-field(
              required
              v-model="message"
              :error-messages="messageErrors"
              @input="$v.message.$touch()"
              @blur="$v.message.$touch()"
              label="Message*" 
              prepend-icon="mdi-email")
        v-divider
        v-card-actions
          v-btn(
            @click="$router.push('/')"
            color="primary"
            ) Go Back
          v-spacer
          v-btn(
            color="secondary"
            @click="clear"
            ) Reset Form
          v-spacer
          v-btn(
            type="submit"
            color="success"
            ) Register
        
      p Dropdown: job offer, interaction, other &rarr; user may choose
      p modern background: blurred image
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";

export default {
  name: "Playground",
  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(3), maxLength: maxLength(20) },
    email: { required, email },
    subject: { required, minLength: minLength(6) },
    message: { required, minLength: minLength(20) }
  },
  data: () => ({
    name: null,
    email: null,
    subject: null,
    message: null
  }),
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.first_name.$dirty) return errors;
      !this.$v.first_name.minLength &&
        errors.push("First name must be at least 3 characters long");
      !this.$v.first_name.maxLength &&
        errors.push("First name must be at most 15 characters long");
      !this.$v.first_name.required && errors.push("First name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },
  methods: {
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style lang="scss" scoped></style>

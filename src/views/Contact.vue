<template lang="pug">
v-container.ma-12.mx-auto(persistant width="80vw" height=" 80vh")
  v-card
    v-card-title
      h2.display-1 Contact Me
    v-card-subtitle 
      h4.primary--text Subtitle
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
              prepend-icon="mdi-message")
        v-row 
          v-col 
            v-text-field(
              required
              v-model="message"
              :error-messages="messageErrors"
              @input="$v.message.$touch()"
              @blur="$v.message.$touch()"
              label="Message*" 
              prepend-icon="mdi-text")
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
  name: "Contact",
  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(3), maxLength: maxLength(20) },
    email: { required, email },
    subject: { required, minLength: minLength(6), maxLength: maxLength(150) },
    message: { required, minLength: minLength(20), maxLength: maxLength(2000) }
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
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength &&
        errors.push("Your name must be at least 3 characters long");
      !this.$v.name.maxLength &&
        errors.push("Your name should not exceed 20 characters");
      !this.$v.name.required && errors.push("Your name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Your e-mail must be valid");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    subjectErrors() {
      const errors = [];
      if (!this.$v.subject.$dirty) return errors;
      !this.$v.subject.minLength &&
        errors.push("The subject must be at least 6 characters long");
      !this.$v.subject.maxLength &&
        errors.push("The subject should not exceed 150 characters");
      !this.$v.subject.required && errors.push("The subject is required.");
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.minLength &&
        errors.push("The message must be at least 20 characters long");
      !this.$v.message.maxLength &&
        errors.push("The message should not exceed 2000 characters");
      !this.$v.message.required && errors.push("The message is required.");
      return errors;
    }
  },
  methods: {
    clear() {
      this.$refs.form.reset();
    },
    submit() {}
  }
};
</script>

<style lang="scss" scoped></style>

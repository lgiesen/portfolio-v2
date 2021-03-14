<template lang="pug">
v-container.ma-12.mx-auto(persistant width="80vw" height=" 80vh")
  v-card
    v-img(:src="imageURL[0].url"
      gradient="rgba(255,255,255,.8), rgba(255,255,255,.8)")
      div.foregroundCard
        v-card-title
          h2.display-1 Contact Me
        v-card-subtitle 
          h4 I'd be happy to hear from you! You can also contact me via 
            a(href="mailto:leo.richard.giesen@gmail.com") mail
            | .
        v-card-text
          v-form#form(ref="form"
            @submit.prevent="submit")
            v-row
              v-col
                v-text-field#name(required
                  name="name" label="Name*"
                  v-model="name" 
                  :counter="20"
                  :error-messages="nameErrors"
                  @input="$v.name.$touch()" @blur="$v.name.$touch()"
                  prepend-icon="mdi-account")
              v-col
                v-text-field#email(required
                  name="email" label="Email*" 
                  v-model="email"
                  :error-messages="emailErrors"
                  @input="$v.email.$touch()" @blur="$v.email.$touch()"
                  prepend-icon="mdi-email")
            v-row
              v-col
                v-text-field#subject(required
                  name="subject" label="Subject*" 
                  v-model="subject"
                  :error-messages="subjectErrors"
                  @input="$v.subject.$touch()" @blur="$v.subject.$touch()"
                  prepend-icon="mdi-message")
            v-row 
              v-col 
                v-textarea#message(required
                  name="message" label="Message*" 
                  v-model="message"
                  :error-messages="messageErrors"
                  @input="$v.message.$touch()" @blur="$v.message.$touch()"
                  prepend-icon="mdi-text")
            v-divider
            v-card-actions
              v-btn(
                color="primary"
                @click="clear")
                v-icon.mr-2 mdi-close-circle-outline
                | Clear
              v-spacer
              v-btn(color="secondary")
                v-icon.mr-2 mdi-send
                input#button(
                  type="submit"
                  value="Send Email")
  v-dialog(v-model="successDialogMail")
    v-card
      v-img(
        min-width="70vw"
        height="50vh"
        :src="imageURL[1].url")
        v-card-title.foregroundCard
          h2.display-1.mx-auto.secondary--text Sent sucessfully!
</template>
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
></script>
<script>
emailjs.init("user_75cp2FduRtFFNEXJNEWrH");
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(3), maxLength: maxLength(20) },
    email: { required, email },
    subject: { required, minLength: minLength(6), maxLength: maxLength(150) },
    message: { required, minLength: minLength(5), maxLength: maxLength(2000) }
  },
  data: () => ({
    name: "",
    email: "",
    subject: "",
    message: "",
    successDialogMail: false,
    imageURL: [
      {
        title: "contactForm",
        url:
          "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      },
      {
        title: "sucessEmail",
        url:
          "https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3074&q=80"
      }
    ]
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
        errors.push("The message must be at least 5 characters long");
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
    submit() {
      try {
        const btn = document.getElementById("button");

        document
          .getElementById("form")
          .addEventListener("submit", function(event) {
            event.preventDefault();

            btn.value = "Sending...";

            const serviceID = "default_service";
            const templateID = "email_template";
            // console.log("this");
            // console.log(this);
            emailjs.sendForm(serviceID, templateID, this).then(
              () => {
                btn.value = "Send Email";
              },
              err => {
                btn.value = "Send Email";
                alert(JSON.stringify(err));
              }
            );
          });
        this.successDialogMail = true;
      } catch (error) {
        console.log(error);
      }
      // this.clear();
    }
  }
};
</script>

<style lang="scss" scoped>
#backgroundCard {
  // Set background image
  background: border-box center/cover
    url("https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  // Add blur
  filter: blur(5px);
  -webkit-filter: blur(5px);
  // Adjust so that it is a background
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.foregroundCard {
  width: 100%;
  height: 100%;
}
#successDialogMail {
  // Set background image
  // background: border-box center/cover
  //   url("https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80");
  // Add blur
  filter: blur(5px);
  -webkit-filter: blur(5px);
  // Adjust so that it is a background
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
</style>

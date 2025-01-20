<template>
  <div class="app">
      <h1>Vue 1</h1>
      <div v-if="!isAuthenticated">
          <div class="phone-input">
              <input type="tel" v-model="phoneNumber" placeholder="Enter phone number" :disabled="isCodeSent" />
              <button @click="sendCode" :disabled="isCodeSent">
                  Send Code
              </button>
          </div>

          <div  class="otp-input">
              <input type="text" v-model="verificationCode" placeholder="Enter OTP" ref="otpInput" />
              <button @click="verifyCode">Verify</button>
          </div>
      </div>

      <div>
          <h2>Welcome!</h2>
          <button @click="signOut">Sign Out</button>
      </div>
      {{ win }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const phoneNumber = ref('');
const verificationCode = ref('');
const isCodeSent = ref(false);
const isAuthenticated = ref(false);
const confirmationResult = ref();
const otpInput = ref(null);

const win = window?.location?.host;

// Ініціалізація reCAPTCHA
onMounted(() => {

});

// Відправка коду підтвердження
const sendCode = async () => {
  //   try {

  isCodeSent.value = true;

  // Налаштування WebOTP API
  if ('OTPCredential' in window) {

      console.log(window.OTPCredential);

      const abortController = new AbortController();

      //   try {
      const content = navigator.credentials.get({
          otp: { transport: ['sms'] },
          signal: abortController.signal
      }).then((otp) => {
          
          console.log('content ' + otp.code);
      }).catch((err) => {
          console.error('WebOTP Error:', err);
      })

      confirmationResult.value = content;
      confirmationResult.value.then((ot) => {
          console.log('then ' + ot);
      }).catch((err) => {
          console.error('OTP Error:', err);
      })
      console.log('con ' + confirmationResult.value);


      // verificationCode.value = otp.code;
      await verifyCode();
      //   } catch (err) {
      //     console.error('WebOTP Error:', err);
      //   }
  }
  //   } catch (error) {
  //     console.error('Error sending code:', error);
  //     alert(error.message);
  //   }
};

// Перевірка OTP коду
const verifyCode = async () => {

  console.log(verificationCode.value);

  //   try {
  // await confirmationResult.value.confirm(verificationCode.value);
  isAuthenticated.value = true;
  //   } catch (error) {
  //     console.error('Error verifying code:', error);
  //     alert(error.message);
  //   }
};

// Вихід з системи
const signOut = () => {
  verificationCode.value = '123654';
  //   try {
  //     await firebaseSignOut(auth);
  //     isAuthenticated.value = false;
  //     isCodeSent.value = false;
  //     phoneNumber.value = '';
  //     verificationCode.value = '';
  //   } catch (error) {
  //     console.error('Error signing out:', error);
  //     alert(error.message);
  //   }
};
</script>
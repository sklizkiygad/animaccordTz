<template>
  <div class="main-wrapper">
  <div class="classic-buttons-wrapper">
    <h1>CLASSIC BUTTONS</h1>
    <ButtonComponent type-of-button="classic" text-of-button="отправить письмо" color-type-of-button="primary"/>
    <ButtonComponent type-of-button="classic" text-of-button="отправить письмо" color-type-of-button="secondary"/>
    <ButtonComponent type-of-button="classic" text-of-button="отправить письмо" color-type-of-button="warning"/>
    <ButtonComponent type-of-button="classic" text-of-button="отправить письмо" color-type-of-button="disabled"/>
    <ButtonComponent type-of-button="classic" text-of-button="отправить письмо" color-type-of-button="info"/>
    <ButtonComponent type-of-button="classic" text-of-button="отправить письмо" color-type-of-button="danger"/>
    <ButtonComponent type-of-button="classic" text-of-button="отправить письмо" color-type-of-button="action"/>
  </div>

    <div class="button-timer-wrapper">
      <h1>BUTTON TIMER</h1>
      <ButtonComponent type-of-button="timer" text-of-button="повторное письмо" timer-of-button="300" />

    </div>

    <div class="button-timer-wrapper">
      <h1>BUTTON MULTI SIZED</h1>
      <ButtonComponent type-of-button="multi-sized" text-of-button="/img/pic1.png" color-type-of-button="primary"/>
      <ButtonComponent type-of-button="multi-sized" text-of-button="/img/pic2.png" color-type-of-button="secondary"/>
      <ButtonComponent type-of-button="multi-sized" text-of-button="/img/pic3.png" color-type-of-button="primary"/>
      <ButtonComponent type-of-button="multi-sized" text-of-button="/img/pic4.png" color-type-of-button="warning"/>
      <ButtonComponent type-of-button="multi-sized" text-of-button="/img/pic5.png" color-type-of-button="info"/>
      <ButtonComponent type-of-button="multi-sized" text-of-button="/img/pic6.png" color-type-of-button="danger"/>
      <ButtonComponent type-of-button="multi-sized" text-of-button="/img/pic7.png" color-type-of-button="action"/>
      <ButtonComponent type-of-button="multi-sized" text-of-button="/img/pic8.png" color-type-of-button="primary"/>
    </div>

    <div class="button-timer-wrapper">
      <h1>BUTTON LINK</h1>
      <ButtonComponent type-of-button="link-button" text-of-button="Напомнить pin-код" link-address="https://youtu.be/dQw4w9WgXcQ"/>

    </div>





  </div>

</template>

<script>
  import ButtonComponent from "@/components/ButtonComponent";
export default {

  name: 'App',
  components: {
    ButtonComponent
  }
}
</script>

<style>
@import "assets/css/style.css";
</style>

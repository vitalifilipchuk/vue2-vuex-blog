<template>
    <div 
        class="popup" 
        :class="{ open: popupActive}" 
        @click.self="$emit('closePopup')"
    >
        <div class="popup__body">
            <div class="popup__inner">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import RegistrationForm from '../components/RegistrationForm'

export default {
    name: 'RegisterPopup',
    components: {
        RegistrationForm
    },
    props: {
        popupActive: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
.popup {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    transition: .3s all;
    z-index: -1;
    visibility: hidden;
    opacity: 0;
    overflow-y: auto;
}

.popup.open {
    z-index: 350;
    opacity: 1;
    visibility: visible;
}

.popup__body {
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 540px;
}

.popup__inner {
    width: 100%;
    box-sizing: border-box;
    position: relative;
}

.popup__content {
    padding: 54px 20px 32px;
    border-radius: 10px;
    background-color: #fff;
}

.popup__close {
    position: absolute;
    right: 0px;
    top: 0px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    transition: .3s all;
    z-index: 3;
}
</style>
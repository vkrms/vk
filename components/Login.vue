<script setup>
import { ref, onMounted } from 'vue';
import * as VKID from '@vkid/sdk';

const app = '52236268'
const redirectUrl = 'https://vk-thing.vercel.app/'

VKID.Config.init({
    app, // Идентификатор приложения.
    redirectUrl, // Адрес для перехода после авторизации.
    // state: 'dj29fnsadjsd82', // Произвольная строка состояния приложения.
    // codeVerifier: 'FGH767Gd65', // Верификатор в виде случайной строки. Обеспечивает защиту передаваемых данных.
    // scope: 'email phone' // Список прав доступа, которые нужны приложению.
    // mode: VKID.ConfigAuthMode.InNewTab // По умолчанию авторизация открывается в новой вкладке.
});

// Создание экземпляра кнопки.
const oneTap = new VKID.OneTap();
const containerRef = ref(null);

const handleError = (error) => {
    console.error('Error:', error);
};

onMounted(() => {
    const container = containerRef.value;

    if (container) {
        oneTap.render({ container: container, scheme: VKID.Scheme.LIGHT, lang: VKID.Languages.RUS })
            .on(VKID.WidgetEvents.ERROR, handleError);
    } else {
        console.error('Container is not defined');
    }
});
</script>

<template>
    <div ref="containerRef" id="VkIdSdkOneTap"></div>
</template>
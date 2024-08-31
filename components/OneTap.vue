<script setup>
import { ref, onMounted } from 'vue';
import * as VKID from '@vkid/sdk';

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
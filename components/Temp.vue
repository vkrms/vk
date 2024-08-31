<template>    
    <ClientOnly>
        <div>
            <h1>Hello from Custom Component B!</h1>
        </div>    
    </ClientOnly>
</template>

<script setup>
    import { onMounted } from 'vue';

    onMounted(() => {
        console.log('sup!')
    })
</script>
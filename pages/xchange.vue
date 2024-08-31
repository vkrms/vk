<template>
    <div>
        <h1>Welcome to the Xchange page!</h1>
        <!-- Your page content goes here -->
    </div>
</template>

<script setup>
    console.log('Im xchanged!')
    import * as VKID from '@vkid/sdk';
    import queryString from 'query-string';

    const parsed = queryString.parse(location.search);
    console.log({ parsed });
    const { code, device_id } = parsed;


    onMounted(() => {
        console.log('Xchange page mounted');
        VKID.Auth.exchangeCode(code, device_id).then((response) => {
            console.log({ response });
        })        
    });

</script>

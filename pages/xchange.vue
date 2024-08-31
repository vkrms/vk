<template>
    <div>
        <h1>Welcome to the Xchange page!</h1>
        <!-- Your page content goes here -->
    </div>
</template>

<script setup>
    console.log('Im xchanged!')
    import * as VKID from '@vkid/sdk';

    console.log(location.search);
    //=> '?foo=bar'

    const parsed = queryString.parse(location.search);
    console.log({ parsed });
    //=> {foo: 'bar'}

    // const code = 'vk2.a.ioYGPwUHPrEGUgeXkM8FbknHXJyDyAYKfSQf7QW6C23ieHuiCNl80HW3WwXi24bVYdYsHanzfBzggFI0TSNfzDikh0odbrODYcDywue_tpgxT9OJ73oQyIe9MrMo1iAUaVsp2_hvoGgUX8n2BGJHxZMC7S4aZdH1YPAjQIxwqYChpg78C-qBdY-mBCiyjvCWeTFP0D6ae_WuYsJWugO6Aw';

    // const device_id = 'GSR25aAzDO0Ewh0Tb51zdf7_oZNZXuNoDSi4fzssTcHPFyc5fNqp4BpyR0qfrzLzYzsq3LtqOWY7C73Q7ZZ-7g';


    onMounted(() => {
        console.log('Xchange page mounted');
        // VKID.Auth.exchangeCode(code, device_id).then((response) => {
        //     console.log({ response });
        // })        
    });

</script>

<template>
    <div>
        <h1>Hello, I'm index page!</h1>
    </div>
</template>

<script>
    import queryString from 'query-string';
    console.log('Im bobbed!')


    console.log(location.search);
    //=> '?foo=bar'

    const parsed = queryString.parse(location.search);
    console.log({parsed});
    //=> {foo: 'bar'}

</script>
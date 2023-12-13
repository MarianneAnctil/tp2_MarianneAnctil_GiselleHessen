

<script>
export default{

props: {
    product: {
        type: Object,
    
    }
},
}

</script>


<template>
    <h2>{{product.name}}</h2>
<img :src="product.url" width="200" style="float:right" />
<h3>{{product.description}}</h3>
<p>Prix: {{product.price}}$ </p>
<p>Prix fixe: {{product.fixedPrice}} </p>
<p>Discontinué: {{product.discontinued}} </p>
<p>Date de modification:  {{product.modifiedDate}} </p>
</template>

<script setup>
import { defineProps } from "vue"; 
const props = defineProps(['item', 'collapsed']);

</script>

<template>
<router-link :to= props.item.permalink  >
    <div class="item">
        <div class="item__icon">
            <font-awesome-icon :icon="['fa-solid', props.item.icon]" size="2x" />
        </div>
        <!-- solo mostrar que no collapsed -->
        <div class="item__title" v-if="!collapsed">
            {{ props.item.title }}
        </div>
    </div>
</router-link>

</template>

<style scoped>

a {
    text-decoration: none;
    display: block;
    margin: 0px;
    width: 50%;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 15px;
    padding-right: 10px;
}
.item:hover .item__title{
    color: black;
    background-color: #3498db;
}



.item {
    display: flex;
    align-items: center;
    padding: 10px 5px ;
    gap: 10px;
}

.item__icon {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 5px;
    color: black;
}

.item__title {
    padding: 5px 16px;
    border-radius: var(--redondeo);

}


</style>

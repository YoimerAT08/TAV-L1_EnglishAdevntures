<script setup>

import { ref } from 'vue';
import MenuItem from './components/MenuItem.vue';
import menuItems from './components/menuItems';


// booleano para contraer o expandir menú
let collapsed = ref(true);

</script>

<template>
    <!-- clase menu, y si es verdadero collapsed va a aplicar clase collapsed, sino expanded -->
        <aside :class="['menu', collapsed ? 'collapsed' : 'expanded']">

            <div class="header">
                <button class="menu-button" @click.prevent="collapsed = !collapsed">
                    <font-awesome-icon icon="fa-solid fa-bars" size="2x"/>
                </button>
            </div>

            <div class="profile" v-if="!collapsed">
                <img class="profile__img" src="./assets/profile.svg" :alt=menuItems.profile.img>
                <!-- cuando este expandido (no collapsed) se va a mostrar name -->
                <div class="profile__name"> <a href="#" @click.prevent="menuItems.profile.onClick"> {{ menuItems.profile.name }} </a> </div>
            </div>

            <div class="menu__item" >

                <ul>
                    <MenuItem v-for="item in menuItems.items" :key="item.id" :item="item" :collapsed="collapsed" />
                </ul>

            </div>

        </aside>
        <router-view></router-view>
        <div class="apagar" v-if="!collapsed">
            <a href="">
            <button class="btn_A"></button>
            </a>
        </div>
</template>
<style scoped>

.menu {
    background-color: #D9D9D9;
    border-radius: 20px;
    height: 83%;
    transition: .5s;
    position: fixed;
    left: 58px;
    top: 100px;
}

.collapsed {
    width: 11rem;
    height: 44rem;
    /* height: 4.4rem; */
}

.expanded {
    width: 23rem;
    height: 52rem;
}

.header {
    margin: 0 auto;
    display: flex;
    justify-content:center;
    padding-left: 5px;
}

.menu-button {
    height: 4.4rem;
    border: none;
    position: relative;
    background-color: transparent;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: -5px;
    margin-right: 0;
    display: block;
    pointer-events: auto;
}

.profile {
    display: flex;
    padding: 5px;
    padding-left: 35px;
    gap: 15px;
    align-items: center;
}

.profile__img {
    width: 3.3rem;
    align-items: start;
}

.profile__name {
    text-align: center;
    border-radius: var(--redondeo);
    width: 40%;
}

.profile__name a {
    text-decoration: none;
    text-transform: capitalize;
}
.profile__name:hover{
    background-color: #3498db;
}

.menu__item {
    width: 50%;
    height: 80%;
    margin-top: 5px;
    margin-right: 5px;
    margin-left: 10px;
}

.menu__item ul {
    width: 100%;
    list-style: none;
    position: absolute;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
}
.apagar{
    display: flex;
    background-color: transparent;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 40px;
    height: 40px;
    left: 140px;
    top: 480px;
}
.apagar a{
    width: 100%;
    height: 100%;
}
.btn_A{
    width: 100%;
    height: 100%;
    border-radius: 50px;
    border: none;
    background-image: url(./components/SubComp/power-off-solid.svg);
    background-color: transparent;
    transition: 0.1s;
    }
.btn_A:hover{
    transform: scale(0.8);
    background-color: #f54c4c;
}
.btn_A:active{
    background-color: #3498db;
}
</style>
/* Esto sería una solicitud, un json, etc */

export default {
    profile: {
        name: 'Profile',
        img: '../assets/profile.svg',
        onClick() {
            console.log('Hola desde onClick() de profile');
        }
    },
    items: [{
            id: 0,
            title: 'Home',
            permalink: '/',
            // <font-awesome-icon icon="fa-solid fa-house-user" />
            icon: 'fa-house-user',
            onClick() {
                console.log('Home');
            }
        },
        {
            id: 1,
            title: 'Listening',
            permalink: '/listening',
            // <font-awesome-icon icon="fa-regular fa-screwdriver-wrench" />
            icon: 'fa-headphones',
            onClick() {
                console.log('Listening');
            }
        },
        {
            id: 2,
            title: 'Speaking',
            permalink: '/speaking',
            // <font-awesome-icon icon="fa-solid fa-fire" />
            icon: 'fa-comment',
            onClick() {
                console.log('Speaking');
            }
        },
        {
            id: 3,
            title: 'Reading',
            permalink: '/reading',
            // <font-awesome-icon icon="fa-solid fa-info" />
            icon: 'fa-eye',
            onClick() {
                console.log('Reading');
            }
        },
        {
            id: 4,
            title: 'Writing',
            permalink: '/writing',
            // <font-awesome-icon icon="fa-solid fa-info" />
            icon: 'fa-book',
            onClick() {
                console.log('Writing');
            }
        },
        {
            id: 5,
            title: 'Help',
            permalink: '/help',
            // <font-awesome-icon icon="fa-solid fa-info" />
            icon: 'fa-info',
            onClick() {
                console.log('Help');
            }
        }
    ]
}
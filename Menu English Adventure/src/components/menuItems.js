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
            // <font-awesome-icon icon="fa-solid fa-house-user" />
            icon: 'fa-house-user',
            onClick() {
                console.log('Home');
            }
        },
        {
            id: 1,
            title: 'Listening',
            // <font-awesome-icon icon="fa-regular fa-screwdriver-wrench" />
            icon: './public/1.ico',
            onClick() {
                console.log('Listening');
            }
        },
        {
            id: 2,
            title: 'Speaking',
            // <font-awesome-icon icon="fa-solid fa-fire" />
            icon: 'fa-firel',
            onClick() {
                console.log('Speaking');
            }
        },
        {
            id: 3,
            title: 'Reading',
            // <font-awesome-icon icon="fa-solid fa-info" />
            icon: 'fa-infol',
            onClick() {
                console.log('Reading');
            }
        },
        {
            id: 4,
            title: 'Writing',
            // <font-awesome-icon icon="fa-solid fa-info" />
            icon: 'fa-info/S',
            onClick() {
                console.log('Writing');
            }
        },
        {
            id: 5,
            title: 'Help',
            // <font-awesome-icon icon="fa-solid fa-info" />
            icon: 'fa-sharp fa-solid fa-comment',
            onClick() {
                console.log('Help');
            }
        }
    ]
}
Vue.component('friend-component', {
    props: ['friend'],
    filters: {
        fullName(value) {
            return `${value.last}, ${value.first}`;
        },
        ageInOneYear(age) {
            return age + 1;
        }
    },
    methods: {
        decrementAge(friend) {
            friend.age = friend.age - 1;
        },
        incrementAge(friend) {
            friend.age = friend.age + 1;
        }
    },
    template: `
    <div>
    <h4>{{friend | fullName}}</h4>
    <h5>{{friend.age}}</h5>
    <button v-on:click="decrementAge(friend)">-</button>
    <button v-on:click="incrementAge(friend)">+</button>
    <input v-model="friend.first"/>
    <input v-model="friend.last"/>
    </div>
    `
});
const app = new Vue({
    el: "#app",
    data: {
        friends: [{
                first: "Bob",
                last: "Bonne",
                age: 25
            },
            {
                first: "John",
                last: "Mendes",
                age: 35
            }
        ]
    },
    // computed: {
    // johnFullName() {
    //     return `${this.john.last}, ${this.john.first}`
    // },
    // johnAgeInOneYear(){
    //     return this.john.age + 1
    // }
    // },
    // filters: {
    //     fullName(value) {
    //         return `${value.last}, ${value.first}`;
    //     },
    //     ageInOneYear(age) {
    //         return age + 1;
    //     }
    // },
    // methods: {
    //     decrementAge(friend) {
    //         friend.age = friend.age - 1;
    //     },
    //     incrementAge(friend) {
    //         friend.age = friend.age + 1;
    //     }
    // },
    template: `
    <div>
        <friend-component v-for="item in friends" v-bind:friend="item"/>
    </div>    
    `
})
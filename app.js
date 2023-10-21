/* as we have added vue cdn, now we have access to objects or any other functionality of a vue

we have to pass an object {} inside the createApp which is the root elemenet or template to perform any operation inside #app div.
i.e mean it controls the #app.
*/

const app = Vue.createApp({
    
    // its the data that is accessible inside the #app, anything defined here, will be accessible inside #app but not outside of the #div.
    data() {
        return {
            name : "Title",
            age : 25,
            subject : "Vue",
            x : 0,
            y: 0,
            books: [
                {title: "First Book", author: "Author 1", isFavorite: false},
                {title: "Second Book", author: "Author 2", isFavorite: true},
                {title: "Third Book", author: "Author 3", isFavorite: false},
            ],
            googleLink: "https://www.google.com",
        }
    },

    methods: {
        updateTitle(title) {
            this.name = title;
        },

        handleEvent(event) {
            console.log(event);
            console.log(event.type);
        },
        
        handleEvent2(event, data) {
            console.log(event);
            console.log(event.type);
            console.log(data ?? ''); 
        },

        showXYPosition(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

    },

    computed : {
        computedBooks() {
            return this.books.filter((book) => book.isFavorite)
        }
    }


});

/* we have added this script file inside index.html, and there is a div with id app. So we are mounting this app to that div.
 so anything inside the div will be handled by this app(vue). */
app.mount("#app");

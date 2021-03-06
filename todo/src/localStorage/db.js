import Dexie from 'dexie'

export default {
    DBname: 'todoList',
    version: '1',
    db: null,

    openDB () {
        this.db = new Dexie(this.DBname);
        this.db.version(this.version).stores({
            weeks: 'name,value'
        });

        this.db.open();
    },

    addToDB: function (mondaysDate, weekObject) {
        this.db.weeks.put({ name: mondaysDate, value: JSON.stringify(weekObject) });
    },

    getFromDB (mondaysDate, callback) {
        if (this.db.weeks) {
            // below returns '[object Dexie.Promise]'
            this.db.weeks.get(mondaysDate).then(function(data) {
                console.log(data);
                let weekObj = JSON.parse(data.value);
                callback(weekObj);
            } );

            // below returns null
            // const weekObj = this.db.weeks.where(mondaysDate).first();
            // return JSON.parse(weekObj);

            // below causes an  "Unexpected reserved word 'await'" error (same w if you use .get instead of .where and .first)
            // const weekObj = await this.db.weeks.where(mondaysDate).first();
            // return JSON.parse(weekObj);
        }
    },

    getBlankWeek () {
        return {
            mon: {
                title: 'mad Monday',

                completed: [],
                
                work: [],
                personal: [],
            },
            //
            tue: {
                title: 'terrible Tuesday',

                completed: [],
                
                work: [],
                personal: [],
            },
            //
            wed: {
                title: 'wired Wednesday',

                completed: [],
                
                work: [],
                personal: [],
            },
            //
            thu: {
                title: 'thinking Thursday',

                completed: [],
                
                work: [],
                personal: [],
            },
            //
            fri: {
                title: 'freaky Friday',

                completed: [],
                
                work: [],
                personal: [],
            },
            //
            sat: {
                title: 'sad Saturday',

                completed: [],
                
                work: [],
                personal: [],
            },
                //
            sun: {
                title: 'slippery Sunday',

                completed: [],
                
                work: [],
                personal: [],
            },
        };
    },
}

// // //
// // // Put some data into it
// // //
// // db.friends.put({name: "Nicolas", shoeSize: 8}).then (function(){
// //     //
// //     // Then when data is stored, read from it
// //     //
// //     return db.friends.get('Nicolas');
// // }).then(function (friend) {
// //     //
// //     // Display the result
// //     //
// //     alert ("Nicolas has shoe size " + friend.shoeSize);
// // }).catch(function(error) {
// //     //
// //     // Finally don't forget to catch any error
// //     // that could have happened anywhere in the
// //     // code blocks above.
// //     //
// //     alert ("Ooops: " + error);
// // });

// export default { db };
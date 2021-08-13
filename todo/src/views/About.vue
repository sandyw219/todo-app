<template>
  <div class="about">
    <h1>{{ $route.params.word }}</h1>
    <h2> {{ storage }} </h2>
  </div>
</template>

<script>
// import db from '../localStorage/database'

// const storage = db.weeks.get(0);

// data () {
//   this.storage = storage;
// }

// db.friends.put({name: "Elon", shoeSize: 8}).then (function(){
//               //
//               // Then when data is stored, read from it
//               //
//               return db.friends.get('Nicolas');
//           }).then(function (friend) {
//               //
//               // Display the result
//               //
//               alert ("Elon has shoe size " + friend.shoeSize);
//           }).catch(function(error) {
//              //
//              // Finally don't forget to catch any error
//              // that could have happened anywhere in the
//              // code blocks above.
//              //
//              alert ("Ooops: " + error);
//           });

</script>

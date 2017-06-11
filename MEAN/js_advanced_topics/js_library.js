var _ = {
   map: function(list, callback) {
     arr = [];
     if (Array.isArray(list)) {
       for (var idx = 0; idx < list.length; idx++) {
         arr.push(callback(list[idx]));
       }
     }
     else if (typeof(list) == 'object') {
       for (var key in list) {
         arr.push(callback(list[key]));
       }
     }
     return arr;
   },
   reduce: function(arr, callback, memo) {
     if (Array.isArray(arr)) {
       var initial = 0;
       if (!memo) {
         memo = arr[0];
         initial = 1
       }
       for (var idx = initial; idx < arr.length; idx++) {
         memo = callback(memo, arr[idx]);
       }
     }
     return memo;
   },
   find: function(list, callback) {
     if (Array.isArray(list)) {
       for (var idx = 0; idx < list.length; idx++) {
         if (callback(list[idx])) {
           return list[idx];
         }
       }
     }
     return false;
   },
   filter: function(list, callback) {
     arr = [];
     if (Array.isArray(list)) {
       for (var idx = 0; idx < list.length; idx++) {
         if (callback(list[idx])) {
           arr.push(list[idx]);
         }
       }
     }
     return arr;
   },
   reject: function(list, callback) {
     arr = [];
     if (Array.isArray(list)) {
       for (var idx = 0; idx < list.length; idx++) {
         if (!callback(list[idx])) {
           arr.push(list[idx]);
         }
       }
     }
     return arr;
   }
 }

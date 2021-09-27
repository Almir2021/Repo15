const MY_ARRAY = (array1,array2) => {
      "use strict";
      return array1.concat(array2);

  };

  console.log(MY_ARRAY([10,11], [12, 13, 14, 15] ));

  module.exports = MY_ARRAY;
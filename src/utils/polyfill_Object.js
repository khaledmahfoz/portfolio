export const values = () => {
   return Object.values = Object.values ? Object.values : o => Object.keys(o).map(k => o[k]);
};

export const entries = () => {
   if (!Object.entries) {
      Object.entries = function (obj) {
         var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i);

         while (i--)
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
         return resArray;
      };
   }
};


// const ascDesc = (order, arr) => {
//   if (order === "asc") {
//     arr.sort((a, b) => {
//       if (a.name.toLowerCase() - b.name.toLowerCase() > 0) return -1;
//       else if (a.name.toLowerCase() - b.name.toLowerCase() < 0) return 1;
//       else return 0;
//     });
//     return arr;
//   }

//   if (order === "desc") {
//     arr.sort((a, b) => {
//       if (a.name.toLowerCase() - b.name.toLowerCase() > 0) return 1;
//       else if (a.name.toLowerCase() - b.name.toLowerCase() < 0) return -1;
//       else return 0;
//     });
//     return arr;
//   }
// };
// const isFav = (f, arr) => {
//   if (f) return arr.filter((el) => el.is_favorite);
//   return arr.filter((el) => !el.is_favorite);
// };

// module.exports = { ascDesc, isFav };

const articule = (artist) => {
  let title = [];
  let allt = artist.split("");

  for (let i = 0; i < allt.length; i++) {
    if (allt[i].length  <= 10) {
      title.push(allt[i -6]);
    }
  }
  console.log(title.join('') + " ...");
  return title.join("") + "...";
};
articule("robertto alvadsg fsdg")
module.exports = articule;

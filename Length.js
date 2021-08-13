const articule = (artist) => {
  let title = "";
  let sec = "";
  let pro = "";
  let allt = artist.split(" ");

  for (let i = 0; i < allt.length; i++) {
    if (allt[i].length > 3) {
      title = allt[i - 3];
    } else {
      sec = artist;
    }
    pro = title ? ( title + ' ...') : (sec);
  }
  console.log(pro);
  return pro
};
articule("alexander la rosa perez")
module.exports = articule;

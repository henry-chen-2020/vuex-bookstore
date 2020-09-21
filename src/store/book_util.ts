export function getID (book) {
  return book._id["$oid"]
};
export function setID (book, id) {
  book._id = { $oid: id };
};

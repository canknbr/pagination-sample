const paginate = arr => {
  const itemsPerPage = 6;
  const pages = Math.ceil(arr.length / itemsPerPage);
  const followers = Array.from({ length: pages }, (_, i) => {
    return arr.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage);
  });
  return followers;
};

export default paginate;

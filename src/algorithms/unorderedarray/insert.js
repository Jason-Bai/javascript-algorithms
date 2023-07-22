const insertV1 = (arr, index, value) => {
  if (index < 0 || index > arr.length) return false;

  arr.splice(index, 0, value);

  return true;
};

const insertV2 = (arr, index, value) => {
  if (index < 0 || index > arr.length) return false;

  if (index < arr.length) {
    arr[arr.length] = arr[index];
  }

  arr[index] = value;

  return true;
};

module.exports = { insertV1, insertV2 };

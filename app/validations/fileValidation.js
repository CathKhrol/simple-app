function isFileSizeValid(files, maxSize) {
  let valid = true;
  if (files) {
    files.map((file) => {
      const fileSize = file.size;
      if (fileSize > maxSize) {
        valid = false;
      }
    });
  }
  return valid;
}

function isFileTypesValid(files, authorizedExtensions) {
  let valid = true;
  if (files) {
    files.map((file) => {
      if (!authorizedExtensions.includes(file.mimetype)) {
        valid = false;
      }
    });
  }
  return valid;
}

module.exports = { isFileSizeValid, isFileTypesValid };

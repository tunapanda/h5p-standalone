H5P.getLibraryPath = function (library) {
  if (H5PIntegration.pathIncludesVersion) {
    return H5PIntegration.url + '/' + library;
  } 
  return H5PIntegration.url + '/' + library.split('-')[0];
};

H5P.getPath = function (path, contentId) {
  var hasProtocol = function (path) {
    return path.match(/^[a-z0-9]+:\/\//i);
  };

  if (hasProtocol(path)) {
    return path;
  }

  var prefix;
  if (contentId !== undefined) {
    prefix = H5PIntegration.url + '/content';
  }
  else if (window.H5PEditor !== undefined) {
    prefix = H5PEditor.filesPath;
  }
  else {
    return;
  }

  // if (!hasProtocol(prefix)) {
  //   // Use absolute urls
  //   prefix = window.location.protocol + "//" + window.location.host + prefix;
  // }

  return prefix + '/' + path;
};

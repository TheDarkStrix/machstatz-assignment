export const BASE_URL = "http://3.6.93.159:7883";

export const getInitial = (name) => {
  return name.charAt(0).toUpperCase();
};

export const getProfilePhotoColor = (str, s, l) => {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  var h = hash % 360;
  return "hsl(" + h + ", " + s + "%, " + l + "%)";
};

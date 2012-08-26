require.config({locale: 'fr'});

require(["i18n!nls/colors"], function (colors) {
  console.log("J\'aime le " + colors.blue);
});
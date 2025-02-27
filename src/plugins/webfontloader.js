/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
  try {
    const webFontLoader = await import(
      /* webpackChunkName: "webfontloader" */ "webfontloader"
    );

    webFontLoader.load({
      google: {
        families: ["Roboto:100,300,400,500,700,900"],
      },
    });
  } catch (error) {
    console.error("Error loading fonts:", error);
  }
}

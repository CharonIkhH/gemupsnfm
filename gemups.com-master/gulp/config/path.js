import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Можно использовать rootFolder  
const srcFolder = `./src`;

export const path = {
   build: {
      js: `${buildFolder}/js/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/img/`,
      fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files/`
   },
   src: {
      js: `${srcFolder}/js/app.js`,
      images: `${srcFolder}/img/**/*.{jpeg,jpg,png,gif,webp}`,
      svg: `${srcFolder}/img/**/*.svg`,
      scss: `${srcFolder}/scss/style.scss`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
      svgicons: `${srcFolder}/svgicons/*.svg`
   },
   watch: {
      js: `${srcFolder}/**/*.js`,
      scss: `${srcFolder}/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
      files: `${srcFolder}/files/**/*.*`
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   //rootFolder: rootFolder,
   rootFolder: `shine-est.arezo.by`,
   ftp: `www`
}
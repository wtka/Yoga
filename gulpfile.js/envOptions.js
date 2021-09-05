const srcPath = './app';
const distPath = './dist';
const nodePath = './node_modules';

let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  copyFile: {
    src: [
      `${srcPath}/**/*`,
      `!${srcPath}/assets/js/**/*.js`,
      `!${srcPath}/assets/style/*`,
      `!${srcPath}/assets/style/**/*.scss`,
      `!${srcPath}/assets/style/**/*.sass`,
      `!${srcPath}/**/*.ejs`,
      `!${srcPath}/**/*.html`,
    ],
    path: distPath,
  },
  html: {
    src: [
      `${srcPath}/**/*.html`,
    ],
    ejsSrc: [
      `${srcPath}/**/*.ejs`,
    ],
    path: distPath,
  },
  style: {
    src: [
      `${srcPath}/assets/style/**/*.scss`,
      `${srcPath}/assets/style/**/*.sass`,
      `${srcPath}/assets/style/**/_variables.scss`,
      `!${srcPath}/assets/style/**/bootstrap.scss`,
    ],
    // bsSrc: [
    //   `${srcPath}/assets/style/helpers/bootstrap.scss`,
    // ],
    outputStyle: 'expanded',
    path: `${distPath}/assets/style`,
  },
  javascript: {
    src: [
      `${srcPath}/assets/js/**/*.js`
    ],
    concat: 'all.js',
    path: `${distPath}/assets/js`,
  },
  vendors: {
    src: [
      `${nodePath}/jquery/dist/jquery.slim.min.js`,
      `${nodePath}/bootstrap/dist/js/bootstrap.bundle.min.js`, // 已包含 popper.js
      `${nodePath}/aos/dist/aos.js`,
      `${nodePath}/swiper/swiper-bundle.js`,
      `${nodePath}/lax.js/lib/lax.min.js`,
      `${nodePath}/@fortawesome/fontawesome-free/js/brands.js`,
      `${nodePath}/@fortawesome/fontawesome-free/js/solid.js`,
      `${nodePath}/@fortawesome/fontawesome-free/js/fontawesome.js`,
      `${nodePath}/vanillajs-datepicker/dist/js/datepicker-full.js`,
      `${nodePath}/jquery-mousewheel/jquery.mousewheel.js`,
    ],
    concat: 'vendors.js',
    path: `${distPath}/assets/js`,
  },
  img: {
    src: [
      `${srcPath}/assets/images/**/*`,
    ],
  },
  clean: {
    src: distPath,
  },
  browserSetting: {
    dir: distPath,
    port: 8080,
  },
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;

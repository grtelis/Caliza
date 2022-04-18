const { src, dest } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));

//Javascript
const terser = require('gulp-terser-js');

// Imágenes
const webp = require('gulp-webp');

function css(done){

    src('src/scss/**/*.scss') //Identificar el archivo a compilar
        .pipe(sass()) //Compilarlo
        .pipe(dest('build/css')); //Almacenar el resultado en build/css

    done();
}

function versionWebP(done){

    const opciones = {

        quality: 50

    };

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'));

    done();

}

function javascript(done) {

    src('src/js/**/*.js')
        .pipe( terser() )
        .pipe(dest('build/js'));

    done();
}

exports.css = css;
exports.versionWebP = versionWebP;
exports.js = javascript;
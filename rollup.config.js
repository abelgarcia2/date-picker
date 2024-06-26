import {string} from  'rollup-plugin-string'
import terser from '@rollup/plugin-terser'

function getCopyrighNotice () {
    const copyrightNotice =
        "/*!*\n" +
        "* Copyright (C) 2024  @abelgarcia2\n" +
        "*\n" +
        "* This program is free software: you can redistribute it and/or modify\n" +
        "* it under the terms of the GNU General Public License as published by\n" +
        "* the Free Software Foundation, either version 3 of the License, or\n" +
        "* (at your option) any later version.\n" +
        "*\n" +
        "* This program is distributed in the hope that it will be useful,\n" +
        "* but WITHOUT ANY WARRANTY; without even the implied warranty of\n" +
        "* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n" +
        "* GNU General Public License for more details.\n" +
        "*\n" +
        "* You should have received a copy of the GNU General Public License\n" +
        "* along with this program.  If not, see <https://www.gnu.org/licenses/>.\n" +
        "*/\n"
    return new Promise((resolve) => resolve(copyrightNotice))
}

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'es',
            banner: getCopyrighNotice()
        },
        {
            file: 'dist/bundle.min.js',
            format: 'iife',
            plugins: [terser()],
            banner: getCopyrighNotice()
        }
    ],
    plugins: [
        string({
            include: ['src/assets/**/*.css', 'src/assets/**/*.svg']
        }),
        
    ]
}
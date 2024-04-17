import datePickerCSS from './date-picker.css'
import leftArrowSVG from './caret-left.svg'
import rightArrowSVG from './caret-right.svg'

export const datePickerTemplate = document.createElement('template');
datePickerTemplate.innerHTML = `
        <style>${datePickerCSS}</style>
        <div class="header">
            <button id="previousMonth" aria-label=" Previous month">${leftArrowSVG}</button>
            <select id="monthSelector" aria-label="Month"></select>
            <select id="yearSelector" aria-label="Year"></select>
            <button id="nextMonth" aria-label="Next month">${rightArrowSVG}</button>
        </div>

        <table>
            <thead>
                <tr class="day-names">
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day weekend"></td>
                    <td class="day weekend"></td>
                </tr>
                <tr>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day weekend"></td>
                    <td class="day weekend"></td>
                </tr>
                <tr>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day weekend"></td>
                    <td class="day weekend"></td>
                </tr>
                <tr>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day weekend"></td>
                    <td class="day weekend"></td>
                </tr>
                <tr>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day weekend"></td>
                    <td class="day weekend"></td>
                </tr>
                <tr>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day"></td>
                    <td class="day weekend"></td>
                    <td class="day weekend"></td>
                </tr>
            </tbody>
        </table>
`
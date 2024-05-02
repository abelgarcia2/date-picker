# &lt;date-picker/&gt;

[<img src='https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fabelgarcia2%2Fdate-picker%2Fmaster%2Fpackage.json&query=version&style=plastic&logo=npm&label=npm&color=ef953b'/>](https://www.npmjs.com/package/@abelgarcia2/date-picker)
[<img src='https://img.shields.io/github/license/abelgarcia2/date-picker?style=plastic&color=ef953b'/>](https://www.gnu.org/licenses/gpl-3.0.en.html)

A simple date picker web component built with Vanilla JS 🗓️

<div align='center'>
    <img src='https://pixeldrain.com/api/file/pXgJBCxn'/>
</div>

## Usage
First import the component
```html
<script src="https://unpkg.com/@abelgarcia2/date-picker@0.1.2-dev/dist/bundle.min.js"></script>
```

Then use the component in your html
```html
<date-picker id="picker" style="width: 300px;"></date-picker>
```

Get selected date
```js
document.getElementById("picker").getSelectedDate()
```

Listen to changes
```js
let picker = document.getElementById("picker");
picker.addEventListener('changeDate', (event) => console.log(event.detail));
```

## Example
See working example at [codi.link](https://codi.link/PGRhdGUtcGlja2VyIGlkPSJwaWNrZXIiIHN0eWxlPSJ3aWR0aDogMzAwcHg7Ij48L2RhdGUtcGlja2VyPgo8YnIvPgo8c3Bhbj5TZWxlY3RlZCBkYXRlIGlzOiA8L3NwYW4+PHNwYW4gaWQ9InNlbGVjdGVkLWRhdGUiPjwvc3Bhbj4KCjxzY3JpcHQgc3JjPSJodHRwczovL3VucGtnLmNvbS9AYWJlbGdhcmNpYTIvZGF0ZS1waWNrZXJAMC4xLjItZGV2L2Rpc3QvYnVuZGxlLm1pbi5qcyI+PC9zY3JpcHQ+||bGV0IHBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWNrZXInKTsKCmNvbnN0IHNldFNlbGVjdGVkRGF0ZSA9IChzZWxlY3RlZERhdGUpID0+IHsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWQtZGF0ZScpLnRleHRDb250ZW50ID0gc2VsZWN0ZWREYXRlOwp9OwoKc2V0U2VsZWN0ZWREYXRlKHBpY2tlci5nZXRTZWxlY3RlZERhdGUoKS50b0RhdGVTdHJpbmcoKSk7CgpwaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlRGF0ZScsIChlKSA9PiBzZXRTZWxlY3RlZERhdGUoZS5kZXRhaWwudG9EYXRlU3RyaW5nKCkpKQo=)
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
<script src="https://unpkg.com/@abelgarcia2/date-picker@0.1.0-dev/dist/bundle.min.js"></script>
```

Then use the component in your html
```html
<date-picker id="picker" style="width: 300px;"></date-picker>
```

Get selected date
```js
document.getElementById("picker").getSelectedDate()
```


## Example
See working example at [codi.link](https://codi.link/PGRhdGUtcGlja2VyIGlkPSJwaWNrZXIiIHN0eWxlPSJ3aWR0aDogMzAwcHg7Ij48L2RhdGUtcGlja2VyPgo8YnIvPgo8YnV0dG9uIGlkPSJnZXQtZGF0ZSI+R2V0IGRhdGU8L2J1dHRvbj4KPHNwYW4+U2VsZWN0ZWQgZGF0ZSBpczogPC9zcGFuPjxzcGFuIGlkPSJzZWxlY3RlZC1kYXRlIj48L3NwYW4+Cgo8c2NyaXB0IHNyYz0iaHR0cHM6Ly91bnBrZy5jb20vQGFiZWxnYXJjaWEyL2RhdGUtcGlja2VyQDAuMS4wLWRldi9kaXN0L2J1bmRsZS5taW4uanMiPjwvc2NyaXB0Pg==||ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1kYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGlja2VyJykuZ2V0U2VsZWN0ZWREYXRlKCk7CiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkLWRhdGUnKS50ZXh0Q29udGVudCA9IGRhdGUudG9EYXRlU3RyaW5nKCk7Cn0pOw==)
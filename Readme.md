### `npm start`

Стартуем локально

### `npm run build`

Билд проекта

## Зависимости для использования библиотеки `plotly`

```
npm install react-plotly.js plotly.js
npm i --save-dev @types/react-plotly.js
```

Далее использование библиотеки описано в файле `Plotly3d.tsx`

Результат:

<img src="https://github.com/StasBeep/teacherProgramm/blob/plotly2d3d/public/plotly.png" alt="logo" width="275" height="200"></img>

Ссылка по почти работающий пример: https://reactjsexample.com/a-plotly-js-react-component-from-plotly/

### Вариант для реализации 3d - фигуры

```
    data={[
        {
            x: [3, 2, 4, 4, 5],
            y: [5, 2, 3, 4, 5],
            z: [7, 2, 5, 4, 5],
            type: 'mesh3d'
        }
    ]}
```

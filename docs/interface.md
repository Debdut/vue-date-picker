## Date & Time Picker

### Use

 ```html
 <date-picker :options="{ type: 'monthPicker' }">
 ```

 ```js
 options: {
    type: String
    range: Boolean
    consecutive: Boolean
  }
 ```

| Optaion     | Type    | Default    | Choices        | Description                          |
|-------------|---------|------------|----------------|--------------------------------------|
| type        | String  | datePicker | datePicker     | full date chooser                    |
|             |         |            | monthPicker    | Only month and year chooser          |
|             |         |            | timePicker     | Hours and minutes                    |
|             |         |            | DateTimePicker | full date and time                   |
| range       | Boolean | false      | true false     | select range of the type             |
| consecutive | Boolean | false      | true False     | if range is true then it will happen |

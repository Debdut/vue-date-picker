# Date-Picker Component

  A component for date and time with some interactive features.

## Date Picker
- Input
    - Focus ==> Dialog-Box open with Day-Chooser
    - Unfocus ==> Dialog-Box close
- Dialog-Box
    - Click
        1. Left arrow ==> previous month
        2. Right arrow ==> next month
    - Keyboard
        - arrow up, down, left, right ==> toggle in table(day, month, year)     
    - Day-Chooser
        1. Press Enter ==> set day
        - Click 
            1. Click month ==> month chooser open   
            2. Click year ==> year chooser open
        - Scroll
            1. Scroll Up ==> next month
            2. Scroll Down ==> previous month
    - Month-Chooser
        1. Click month ==> set month and open Day-Chooser
        2. Press Enter ==> set month and open Day-Chooser
    - Year-Chooser
        1. Click year ==> set year and open Day-Chooser
        2. Press Enter ==> set year and open Day-Chooser
        - Scroll
            1. Scroll Up ==> load previous 3 year
            2. Scroll Down ==> load next 3 year
- Flowchart

![](/src/assets/date-picker-flowchart.svg)
## Month Picker
- Input
    - Focus ==> Dialog-Box open with Month-Chooser
    - Unfocus ==> Dialog-Box close
- Dialog-Box
    - Keyboard
        - arrow up, down, left, right ==> toggle in table(month, year)
    - Month-Chooser
        1. Press Enter ==> set month
        2. Click month ==> set month
    - Year-Chooser
        1. Click year ==> set year and open Month-Chooser
        2. Press Enter ==> set year and open Month-Chooser
        - Scroll
            1. Scroll Up ==> load previous 3 year
            2. Scroll Down ==> load next 3 year
- Flowchart

    ![](/src/assets/month-picker-flowchart.svg)

## Time Picker
- Keyboard Controls

## DateTime Picker
- Keyboard Controls

## Range Pickers
- Keyboard Controls

## Defaults
- Keyboard Controls
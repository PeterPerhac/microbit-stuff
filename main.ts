basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Sad)
        basic.pause(3000)
    }
    basic.showString("" + (input.temperature()))
})

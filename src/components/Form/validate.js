export function validate(values) {
    const errorMessages = {}

    if (values.name.length <= 2) {
        errorMessages.name = 'musi być dłuższe niż 2 znaki'
    }

    if (values.email.length <= 8) {
        errorMessages.email = 'musi być dłuższy niż 7 znaków'
    }

    if (values.positionX > 90 || values.positionX < -90 || values.positionX == "")
    {
        errorMessages.positionX = 'współrzędne niepoprawne'
    }


    if (values.positionY > 180 || values.positionY < -180 || values.positionY == "") {
        errorMessages.positionY = 'współrzędne niepoprawne'
    }


    return Object.keys(errorMessages).length > 0
        ? errorMessages
        : null
}

export function validate(values) {
    const errorMessages = {}

    if (values.name.length <= 2) {
        errorMessages.name = 'musi być dłuższe niż 2 znaki'
    }

    if (values.email.length <= 8) {
        errorMessages.email = 'musi być dłuższy niż 7 znaków'
    }

    return Object.keys(errorMessages).length > 0
        ? errorMessages
        : null
}
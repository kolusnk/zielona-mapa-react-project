export function validate(values) {
    const errorMessages = {}
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (values.name.length <= 2) {
        errorMessages.name = 'musi być dłuższe niż 2 znaki'
    }

    if (values.email.length <= 7) {
        errorMessages.email = 'musi być dłuższy niż 7 znaków'
    }

    if (!values.email.match(pattern)) {
        errorMessages.email = 'adres email niepoprawny'
    }

    if (values.trees === '') {
        errorMessages.trees = 'podaj liczbę drzew'
    }


    return Object.keys(errorMessages).length > 0
        ? errorMessages
        : null
}
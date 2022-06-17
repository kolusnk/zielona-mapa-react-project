export function validate(values) {
    const errorMessages = {}
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (values.name.length <= 2) {
        errorMessages.name = 'imię musi być dłuższe niż 2 znaki'
    }

    if (values.email.length <= 7) {
        errorMessages.email = 'email musi być dłuższy niż 7 znaków'
    }

    if (!values.email.match(pattern)) {
        errorMessages.email = 'adres email niepoprawny'
    }

    if (values.trees === '') {
        errorMessages.trees = 'podaj liczbę drzew'
    }

    if (values.view === '') {
        errorMessages.view = 'powiedz jaki jest widok z okna'
    }

    if (values.floor === '') {
        errorMessages.floor = 'podaj piętro na którym mieszkasz'
    }

    if (values.floor < 0 || values.floor > 12) {
        errorMessages.floor = 'przedział między 0 a 12'
    }

    if (values.noise === '') {
        errorMessages.noise = 'podaj poziom hałasu'
    }


    return Object.keys(errorMessages).length > 0
        ? errorMessages
        : null
}
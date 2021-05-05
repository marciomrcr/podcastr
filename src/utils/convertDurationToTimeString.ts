export function convertDurationToTimeString(duration: number) {
    const hour = Math.floor(duration / 3600) // calculo de horas
    const minutes = Math.floor((duration % 3600) / 60) // calculo de minutos
    const seconds = duration % 60

    const timeString = [hour, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':')

    return timeString
}
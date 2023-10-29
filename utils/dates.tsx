export function formatIsoDate(isoDateString: string) {
    // Создаем объект Date из строки ISO 8601
    const date = new Date(isoDateString);

    // Форматируем компоненты даты
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
    const year = date.getFullYear();

    // Форматируем компоненты времени
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    // Собираем кастомную строку даты
    const customFormattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;

    return customFormattedDate;
}
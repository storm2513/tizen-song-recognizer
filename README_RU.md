# Приложение для распознавания музыки на устройствах Tizen

## Что используется?

Этот проект был сделан с помощью create-react-app.
Redux используется для управления состоянием.
RecordRTC используется для получения аудио с микрофона устройства.
ACRCloud API используется для распознавания музыки.

## Как оно работает?

Вся фронтенд часть находится в папке `/web`.
Пользователь нажимает на иконку микрофона, RecordRTC получает аудио с микрофона. Затем эти данные отправляются на прокси-сервер (исходный код находится в папке `/server`. Он написан на Ruby с использованием гема Sinatra). Прокси-сервер необходим, так как нет возможности работать с ACRCloud API напрямую из-за CORS policy. Также он позволяет управлять учётными данными ACRCloud для всех установленных приложений (в случае если вы захотите поменять аккаунт или сервис, пользователи смогут использовать этот прокси-сервер без необходимости ожидания пока приложение обновится в Samsung Store). Прокси-сервер делает запрос к ACRCloud API и возвращает ответ к приложению.

## Как его запустить?

Я написал bash скрипт `/web/wearable.sh`, который создаёт пакет приложения tizen (`.wgt` файл). Он может быть установлен на реальном устройстве или симуляторе.
Этот скрипт использует исходный код приложения из папке `/web/build`. Также он использует данные из папки `/tizen` - конфигурацию, имя, иконку, привилегии и т.д.
Перед запуском скрипта убедитесь, что вы установили tizen developer tools и создали Samsung Developer certificate. Внесите соответствующие изменения в скрипт и запустите его.
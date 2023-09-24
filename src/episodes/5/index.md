---
title: Доступность с клавиатуры. Требования, рекомендации, опыт разработки компонентов
description: В пятом выпуске подкаста «Инклюзивный ананас» обсуждаем доступность с клавиатуры. Рассказываем про критерии WCAG 2.1 и WCAG 2.2, которые нужно соблюдать, приводим примеры из личного опыта при разработке и тестировании компонентов, делимся частыми ошибками и пробегаемся по руководствам от W3C про разработку клавиатурного интерфейса.
number: 5
audio: episode-5.mp3
date: 2023-09-26
---

## Темы

- [00:10](#00:10) — Приветствие.
- [00:40](#00:40) — Тема выпуска.
- [00:53](#00:53) — Новости.
- [02:56](#02:56) — Кто пользуется клавиатурой.
- [09:15](#09:15) — Элементы с фокусом.
- [09:44](#09:44) — Страшная история про кнопки.
- [14:46](#14:46) — WCAG 2.1 про клавиатуру.
- [31:07](#31:07) — WCAG 2.2 про клавиатуру.
- [46:08](#46:08) — Реальные кейсы, распространённые ошибки.

## Ссылки к выпуску

- [BrowserStack запустил отдельный инструмент BrowserStack Accessibility Testing](https://www.browserstack.com/blog/browserstack-accessibility-testing-one-stop-solution-to-test-report-and-monitor-web-accessibility/).
- [Ассистент Sidekick в плагине Stark стал умнее](https://www.getstark.co/blog/introducing-aria-headings-touchtargets-sidekick/).
- [ADA Accessibility Lawsuit Tracker, August 2023](https://info.usablenet.com/ada-website-compliance-lawsuit-tracker?utm_campaign=ADA%20Lawsuit%20Tracker&utm_medium=email&_hsenc=p2ANqtz-9CVOg6tF1EHyLHZYw2VyKV4qYcp9g12XLdhHfDHiM2RHnwcrQUtZRt3mGro0ejdVUqF55IYGukEBUUL7fVgoKmO7ODNw&_hsmi=273743242&utm_content=273743242&utm_source=hs_email&hsCtaTracking=d7313e97-9250-4d9a-aff2-db06d3b2173e%7Ce1d4bec3-9cf6-4fa4-98bf-98e824f21591).
- [How to meet WCAG — фильтр по тегу keyboard](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&tags=keyboard).
- [Where to Put Focus When Deleting a Thing](https://adrianroselli.com/2023/08/where-to-put-focus-when-deleting-a-thing.html), Адриан Розелли.
- [A guide to designing accessible, WCAG-conformant focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/), Сара Суайдaн.
- [Внешний вид фокуса](https://tatiana-fokina-blog.ru/posts/wcag-focus-appearance/), Татьяна Фокина.
- [Видимый фокус](https://tatiana-fokina-blog.ru/posts/wcag-focus-visible/), Татьяна Фокина.
- [Клавиатура](https://tatiana-fokina-blog.ru/posts/wcag-keyboard/), Татьяна Фокина.
- [Developing a focus style for a themable design system](https://adhoc.team/2022/02/08/creating-focus-style-for-themable-design-system/), Скотт Вебер.
- [Developing a keyboard interface](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/), W3C.

## Расшифровка

**Таня Фокина**: всем привет! С вами «Инклюзивный ананас» — первый русскоязычный подкаст о доступных интерфейсах. Здесь мы обсуждаем всё, что связано с цифровой доступностью и делимся свежими новостями и событиями. Подпишись, чтобы не пропустить новые выпуски. 

С вами ведущие подкаста Глаша Жур, фронтенд-тимлид и преподаватель на курсах по веб-доступности, а также Таня Фокина, редактор раздела доступности в Доке, дружелюбном справочнике по фронтенду, и большая любительница поговорить о доступности.

### Новости

**Таня**: с вами был подкаст «Инклюзивный ананас» и его ведущие Глаша и Таня. Вы можете найти нас на любой подкаст-платформе. До встречи в следующем выпуске!

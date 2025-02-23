---
title: Состояние доступности в 2024
description: Подводим итоги 2024 года в мире веб-доступности. Разбираем результаты из Web Almanac, обсуждаем прошлогодние планы по Interop и результаты State of HTML. Спойлер — с доступностью всё не так уж плохо, но и особого прогресса нет.
number: 12
audio: episode-12.mp3
date: 2025-01-29
---

## Темы

- [00:10](#00:10) — Что обсудим в выпуске.
- [00:34](#00:34) — Популярные инструменты для тестирования.
- [06:05](#06:05) — Общее состоянии доступности по версии Web Almanac.
- [10:10](#10:10) — Атрибут `lang` и пользовательские настройки.
- [12:11](#12:11) — Доступность навигации, атрибут `focusgroup`.
- [17:55](#17:55) — State of HTML и судьба `tabindex`.
- [19:37](#19:37) — Web Almanac об ориентирах и скип линках.
- [22:07](#22:07) — Проблемы с названиями страниц, форм и медиа.
- [25:14](#25:14) — Использование WAI-ARIA и других техник.
- [27:00](#27:00) — Оверлеи и доступность по странам.
- [27:58](#27:58) — CMS и фреймворки.
- [29:04](#29:04) — Итоги Interop 2024.
- [35:15](#35:15) — Выводы.

## Ссылки к выпуску

- [State of HTML](https://2024.stateofhtml.com/en-US/)
- [Web Almanac 2024: Accessibility](https://almanac.httparchive.org/en/2024/accessibility/)
- [Web platform Tests Dashboard](https://wpt.fyi/)
- [Accessibility Testing for WPT Interop](https://github.com/web-platform-tests/interop-accessibility/)

## Расшифровка

**Таня Фокина**: «Инклюзивный ананас».

**Глаша Жур**: Всем привет! Сегодня подводим итоги [2024] года по веб-доступности на базе свежих репортов State of HTML, Interop 2024 года (дашборд) и Web Almanac 2024 года. Всё с пылу с жару, что называется.

Давайте посмотрим, что там происходит с точки зрения веб-доступности. Начнём с Web Almanac. Это отчёт, который выпускается каждый год. Ну, как каждый. Насколько я поняла, в 23-м его так и не выпустили. С 19-го года по 24-й год у нас есть данные из этого репорта [отчёта]. И, в частности, там есть очень крутой раздел, который называется «»Accessibility». И на базе 17 миллионов сайтов из веб-архива взяли снэпшот за июнь 2024 года.

Ребята сделали такой крутой, большой отчёт про доступность [сайтов], используя Lighthouse в качестве автоматической тулы [инструмента] проверки. Тысячу раз упомянули, что [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) использует под капотом [axe DevTools](https://www.deque.com/axe/devtools/): его open-source версию. Вот, поэтому очень… скажем так, может быть, не полные результаты касательно стейта [состояния] доступности, просто автоматическая проверка, но всё равно впечатляющие результаты. И также в эту часть немножечко включим результаты из State of HTML. Это репорт [отчёт] на базе опроса девелоперов [разработчиков]. Около пяти тысяч человек, там пять с половиной тысяч человек прошли этот опрос… о том, как они используют веб в 2024 году. Поэтому добавим оттуда ещё немножечко инсайтов касательно доступности или каких-то атрибутов, которые влияют на доступность.

Поговорим о том, как разработчики используют всю эту информацию. Ну и да, Альманах составлен с помощью Lighthouse, и тут как раз интересно, Таня, а как вообще, с помощью чего тестируют разработчики доступность? На сегодняшний день, чаще всего, какие тулы [инструменты] используют?

**Таня**: Да, в State of HTML есть прикольный раздел как раз про популярные тулзы [инструменты] для тестирования доступности, и на первом месте опять Lighthouse, которым, собственно, тестировали для Альманаха. На втором месте это инструменты разработчика, DevTools, в браузерах. На третьем месте axe. То есть вот это тройка финалистов, наверное, самая такая предсказуемая. Меньшее количество людей использует другие тулзы [инструменты], например, [WAVE](https://wave.webaim.org), [Accessibility Insights](https://accessibilityinsights.io), [Pa11y](https://pa11y.org) есть. Это такая CLI-тулза. Что ещё? [Polypane](https://polypane.app).

**Глаша**: О, кстати, это же этот браузер, который со всякими проверками доступности. Он, правда, платный, насколько я знаю, там, подписка, что-то там такое. Но его реально что-то форсить [продвигать] стали в комьюнити [сообществе] всякие известные личности в доступности и в вебе.

**Таня**: Угу… И довольно небольшое количество людей, видимо, богатых людей, 28 человек, используют [Assistiv Labs](https://assistivlabs.com). Это сервис, который, не знаю, наверное, он как [BrowserStack](https://www.browserstack.com), но для скринридеров. То есть там можно тестить сайты в разных скринридерах на Windows, что удобно, VoiceOver можно так потестить.

И вот, кстати, об этом я не слышала. Некий [VoiceOver.js](https://github.com/AccessLint/screenreaders/blob/main/packages/voiceover/README.md). Что это?

**Глаша**: А-а-а-а. Это, насколько я знаю, штучка, которая умеет запускать VoiceOver и вытягивать слова, которые говорит VoiceOver в соответствии с тем, как он идёт по интерфейсу. Типа, в результате ты можешь VoiceOver-ский аутпут [вывод] получить у себя где-то в коде и тестить с помощью этого. Вроде бы у нас как раз он используется для тестирования. Точнее, раньше.

Сейчас мы его хотим, наверное, убрать, потому что не очень консистентные результаты появляются, ну, получаются. То есть ты не понимаешь, а хорошо это или плохо. Это так и должно засчитываться или не должно. Вот это типичная проблема в разработке, в тестировании скринридерами, когда пользователь просто может поменять какие-то у себя настройки, всё по-другому будет звучать. Или ты у себя потестил, а потом посмотрел результат VoiceOver.js этого, и увидел, что там что-то другое вообще, или он не видит что-то ещё. Ну, в общем, насколько вот я помню, это такая штука довольно интересная, но надо искать юзкейсы [случаи] более адекватные.

Кстати, у BrowserStack же есть Accessibility Toolkit. Там есть тоже возможность запускать на Windows VoiceOver. Я у них спросила, можно ли будет JAWS когда-нибудь запускать. Я не знаю, кстати, может ли Assistiv Labs JAWS тебе давать возможность запускать, потому что это было бы самое востребованное из всего… Но да, с BrowserStack прикольно: там можно тестить на Windows VoiceOver, да, то есть у тебя Windows, но ты можешь зайти в BrowserStack и потестить там VoiceOver на Mac или на любом другом устройстве. У меня обратный кейс [случай]: на Mac нет возможности там NVDA поставить себе, и очень сложно какую-то там виртуалку организовать или что, и, короче, один из вариантов — вот так запускать Windows в BrowserStack и тестить NVDA. Единственная проблема, что маковская клавиатура вообще не в адеквате. Никакие шорткаты из тех, которые NVDA используют, не работают, потому что на Mac нет таких клавиш, на которые в NVDA завязано абсолютно всё. Типа <kbd>Insert</kbd>. Вот эта клавиша, например. И-и-и-и, да, поэтому лайфхак от Глаши: Подключаете к Mac виндовую клавиатуру и работаете как боженьки как цари. Всё прекрасно заработает.

Ладно, перейдём к обзору Альманаха. Ребята тестировали Lighthouse. Общий вывод о том, что, в целом, доступность подрастает в большую сторону на этом датасете [набор данных]. Ежегодно где-то по проценту прибавляется [сайтов] к доступным сайтам, но по проценту это очень грустно. Они приводят примеры атрибутов, которые лучше всего… Ну, не атрибутов, а проверок Lighthouse, которые лучше всего импрувятся, улучшаются за годы. Например, такой атрибут как `aria-allowed-attr`… Не атрибут, а проверка: `aria-allowed-attr`. Которая показывает, что у тебя есть ошибки в использовании ARIA-атрибутов. И вот по этой проверке сильно выросли хорошие показатели за год.

Поэтому что-то улучшается: у `<html>` появляются `title`, контрастность текста и элементов улучшается, и в целом состояние немножечко повышается, но, в то же время, есть и тревожные звоночки. Весь Альманах разделён на несколько секций, и самыми большими из них являются такие секции, как: простота чтения, навигация, про формы много информации, про медиа-контент, про использование ARIA на сайтах, и появилась новая секция, которая называется типа «секторы и доступность». Там как раз про то, какие страны владеют, имеют более доступные сайты, правительства в каких странах более доступные и так далее. То есть такая интересная статистика.

По поводу первой самой секции, это простота чтения, там рассматриваются… Мне очень на самом деле нравится, как делится Альманах на группы. И вот эта вот группа простота чтения, которая включает в себя контраст, скейл [масштабирование], зум [приближение] интерфейса, как язык там нормально или ненормально интерпретируется на страничке. И медиа-запросы, например, как используются, то есть всякие эти тёмные темы, ну именно вот пользовательские настройки, насколько адекватно реагирует интерфейс на пользовательские настройки, вот эта вся штука.

И что тут можно сказать? Что контраст, только на 29 % всех оттестированных сайтов прошёл проверку. Все остальные сайты обязательно имеют какое-нибудь ишью [проблемы] по контрасту. Конечно, это всегда часто очень игнорируется, исходя из моей практики, потому что там что-то дизайн-система, или это неважный элемент, или ещё что-то. Ну, в общем, да. Но ишью [проблема] контраста — одно из самых сложных. И для пользователя, ну, тяжело, в общем, воспринимать текст неконтрастный.

16 % сайтов всё ещё дизейблят [отключают] возможность сайт изменять его масштаб. То есть прямо там запрещено с помощью `<meta>` запрещено изменение масштаба, или оно как-то заблокировано, или оно до определённого размера только можно изменять. В общем, очень грустно, что всё ещё есть сайты, которые запрещают [увеличение]. Есть сайты, которые ограничивают одну какую-то только характеристику. То есть ты можешь изменять масштаб, но до каких-то процентов определённых. Но, в то же время, уменьшилось количество сайтов с ограничением, что довольно-таки неплохо.

65 % проверенных сайтов всё ещё используют пиксели в текстах в размерах шрифта. Ну, в смысле, это, наверное, нормально, но пиксельные размеры очень плохо адаптируются под настройки операционных систем, браузеров и прочего, поэтому доступность очень сильно страдает на таких ресурсах именно чтением.

86 % сайтов, типа, не 100, а 86 % сайтов имеют указанный атрибут `lang` в `<html>`, что… Отсутствие этого атрибута очень влияет на такие вещи как переводчики. Я пока жила в Литве, мне всё время приходилось добавлять атрибут , чтобы мой переводчик нормально переводил сайт на язык, который я захочу там, английский или русский. И это боль. Типа, если сайт не переводится, 100 % атрибута там нет. Ну и очень сильно влияет на то, как скринридер зачитывает интерфейс. Это боль, когда он пытается английским языком зачитывать французский сайт или наоборот. Зависит от настроек пользовательских.

Радует, что потихонечку растёт использование медиа-запросов, которые относятся к группе User Preference Media Queries. Там, типа, `prefers-reduce-motion` вырос на 15 %, на 50 % сайтов используется, вот. И всякие очень активно используются, ну и более активно, скажем так, `prefers-color-scheme` и `prefers-contrast`. Вы, может, про них и не слышали ничего, а погуглите. Хорошие медиа-запросы, которые реагируют на настройки вашей операционной системы, например. То есть, если в Windows выставить High Contrast Mode (режим повышенной контрастности) и посмотреть на ваш сайт, то вы можете удивиться, как пропала половина данных с него: там картинки, кнопки исчезли, инпуты [поля] все поисчезали тоже очень красиво. У нас, кстати, тестирование с пользователями показывает, что много довольно пользователей используют эту тему, у которых проблемы со зрением. То есть они увеличивают интерфейс и ещё контрастный мод [режим] включают. И, ну, сэмплы [образцы] все по тестированию такие, типа, чёрный экран, на нём белые буквы, и сразу видно, как исчезают все поля ввода, как исчезают таблицы, например, потому что там `border` какой-нибудь прозрачненький. Ну вот эти все штуки.

Следующая большая область исследования в Альманахе – это навигация. И туда входит как клавиатура, так и всякие способы пользователя навигироваться по странице, например, заголовки или лендмарки [ориентиры]. Незрячие пользователи очень часто используют лендмарки, например, чтобы перепрыгивать быстро от одной области к другой: из навигации в `<main>`, из `<main>` в какой-нибудь `<aside>` или `<footer>`, в зависимости от того, какая информация им нужна в данный конкретный момент.

Поэтому, да, важно тут понимать, что в Альманахе ребята не тестировали клавиатурную навигацию, потому что axe и Lighthouse в это не умеют. То есть они могут показать там какой-то контраст фокуса, например, но они не умеют искать такие важные вещи, как недоступные с клавиатуры элементы. То есть, если вы написали `<div>` и нарисовали из него кнопку, и дали ему `tabindex`, то это, типа, нормально для axe будет, без роли там, ну, `tabindex`, `tabindex`, окей, что это за проблема? Поэтому, да, эти инструменты не умеют в такое. Очень важна ещё проверка, что фокус устанавливается в новый контент. Например, если у вас SPA-приложение, которое перезагружает страничку без перезагрузки, и появляется новый контент, вы должны поставить туда фокус, но это часто очень не делается.

Ну, в общем, всё это делается ручными проверками. Всякие элементы должны быть доступны с клавиатуры хорошо типа списков, интерактивных, там, менюшек и прочего. Кстати, Таня, а там я знаю, что какой-то у нас классный атрибут новый для этого есть в Interop. Видели его. Чё там?

**Таня**: Он есть, он есть. И он называется `focusgroup`. Его можно использовать для группы элементов интерактивных, ну, например, полей. И благодаря этому атрибуту, навешанному на группу элементов, вы можете перемещаться между ними стрелками. Так сейчас уже себя ведут, например, радиокнопки, если вы их в `<fieldset>` в форме запихнёте.

**Глаша**: И, типа, name одинаковые задать, да? Они же тоже начинают так же вести.

**Таня**: Да, да. То же самое можно вот это поведение нативное воспроизводить с помощью `focusgroup`. Насколько я знаю, пока что это поддерживается только в Chrome.

Вот как раз Interop 24-ого года — это инициатива по обратной совместимости, они поставили своей целью внедрить во всех остальных двух браузерах эту фичу. И интересно, что уже 8 % опрошенных в State of HTML уже её [фичу] использовали хоть раз. Но большинство, конечно, не слышало пока что ничего об этом атрибуте.

**Глаша**: Ничего себе. Это вообще сильно упростит нам жизнь, я надеюсь. Ну, типа, это одна из самых больших проблем — сделать стрелочную навигацию внутри группы каких-то компонентов. Вау! А с другой стороны, представляешь, вот у нас будет менюшка на сайте сверху, да? У неё будет клавиатурная навигация, но только не для скринридера.

Я не знаю, как это будет работать, типа, если роли не задавать там. То есть, получается, это просто можно задать роль `menu`, элементам — роль `menuitem` и фигануть `focusgroup`. И ты, типа, свободен. Ну, всё сделано. Вау! Кайф.

**Таня**: И с табами [вкладками] тоже.

**Глаша**: О, точно, и с табами тоже. И с кастомными селектами. О, май гад, круто! Осталось только фокус поставить при раскрытии, внутрь выпадашечки, и всё будет хорошо. Кайф! И убрать `tabindex` с каждого таба, и вообще будет замечательно.

Получается, мы забудем про подходы Roving `tabindex` там, вот эти все `aria-activedescendant`… а, не, `aria-activedescendant` всё равно придётся накручивать, если уж по этому подходу идёт Блин, так, блин, а Roving `tabindex` не придётся?.. Непонятно, надо тестить, короче. Что будет? Ладно. Круто.

Да, короче, эту часть советую тестировать руками и очень рекомендую тулу [инструмент], которую Таня уже упоминала, Accessibility Insights. Это такой плагинчик в браузер, у которого есть проверки прям клавиатурные некоторые. То есть можно там порядок фокуса потестить и всякие такие штуки. Ещё очень рекомендую Firefox, потому что он умеет тестировать клавиатуру так, как не умеет никто. Находить вот эти `<div tabindex="">`, `<div onclick="">`, всякие штуки такие, подсвечивать их и говорить «Алло, пофиксите, пожалуйста, там, или проверьте».

Дальше по навигации, стили фокуса… 53 % сайтов всё ещё сбрасывают стили, но это сильно уменьшилось с 22-ого года. В 22-м 86 % сайтов сбрасывало стили, что очень круто. И также очень много сайтов стали использовать `:focus-visible`, свойство, которое почему-то всё ещё считается новым, свежим. Да, которое позволяет отображать фокус. Ну, самый распространённый кейс — это показывать фокус, когда мы с клавиатуры навигируемся, и не показывать его, когда мы с мышки кликаем на элементы. Ну, в общем, тенденция положительная. `tabindex`, конечно же, очень много кто использует всё ещё. И это видно и по Альманаху, и по Interop, что все с удовольствием ставят `tabindex`.

Таня, а есть какие-то инсайты [открытия] из State of HTML про `tabindex`? Да, они есть. И популярность `tabindex` стремительно растёт.

**Глаша**: О, боже.

**Таня**: State of HTML показывает, что 87 % опрошенных используют `tabindex`. И что, скорее всего, связано с тем, о чём Глаша ещё поговорит чуть позже: про ARIA-роли, и, в частности, популярность `role=button`. И, кажется, что здесь есть некоторая взаимосвязь между двумя этими явлениями.

**Глаша**: Ау, ясно.

Короче, да, Web Almanac рекомендует обращаться больше к стандартному браузерному подходу к фокусу, порядку. Браузер сам расставляет порядок фокуса. Но если вам очень надо, то не используйте положительный `tabindex`. И всё ещё 4 % сайтов, типа, из 16 миллионов сайтов, 4% — это очень много сайтов, которые используют положительный `tabindex`. То есть от одного до, не знаю, до скольки из возможных. Поэтому присмотритесь к своим интерфейсам, может, у вас тоже есть положительные `tabindex`? Важно помнить, что они очень ломают порядок фокусабельности, то есть они сразу первые элементы на странице, которые принимают фокус.

Про лендмарки [ориентиры]. Лендмарки стали использовать больше, но что меня сильно впечатлило, это, во-первых, что в Альманахе есть ссылочка на такой классный тул [инструмент] от PayPal, который называется [Skipto](https://github.com/paypal/skipto). Это скриптик, который в начале страницы делает такой скип линк. Скип линки нужны для того, чтобы пропустить какую-то часть контента и перейти к другой части контента. То есть, для пользователей клавиатуры, если ты вот только с клавиатурой юзаешь [используешь] интерфейс, то верхнее меню для тебя при каждой загрузке страницы — это то, через что надо продираться каждый раз. И меню может быть очень огромным в зависимости от реализации, поэтому есть такие скип линки. То есть, они до верхнего меню располагаются на странице, ты их нажимаешь, и перескакиваешь сразу в основной контент.

И вот этот плагинчик Skipto джаваскриптовый, он создаёт список, доступный сам по себе. То есть ты можешь перепрыгнуть в разные области страницы. Он детектит [находит] эти области и создаёт из них список. Можно перемещаться по заголовкам, как пользователь клавиатуры. Тебе это было недоступно. Это было доступно только пользователям скринридеров. Но ты можешь теперь перемещаться к конкретному заголовку, к конкретной области типа в основной контент, в меню там, в футер и так далее. Очень крутой скрипт, я считаю.

Ну да, использование лендмарков [ориентиров] растёт с годами, и это хорошо. Меня реально заинтересовало, что там в Альманахе упоминали про `<search>`. Мол, он не особо… что как раз упало использование поля поиска.

Таня, а что с `<search>` лендмарком? Он не так давно появился, начали ли его использовать?

**Таня**: М-м-м-м, по-моему, ну типа ему, наверное, уже точно год или даже чуть больше. Его используют всё так же мало людей: всего 8 % опрошенных в рамках State of HTML исследования. Его [ориентир] используют. Часть людей ничего не слышала и достаточно много что-то слышала, но никогда не пробовала на практике.

**Глаша**: Да, в общем, заголовки стали использовать хуже сильно по сравнению с другими годами, то есть структура заголовочная нарушена чаще на сайтах стала быть.

Скип линки стали использовать чаще, но тоже непонятно, протестили только те скип линки, которые наверху сайта находятся, то есть если в середине сайта что-то находится, то это не искалось.

Ну и про `title` документа интересная информация, что почти все используют `title`, типа 97 % страниц, но не 100. И мне очень показалось интересным, что на 4 % страниц ты загружаешь страницу, и там отображается один `title`, и в процессе рендеринга он меняется. Это не очень хорошо с точки зрения скринридеров, потому что скринридеры зачитывают первый `title`, и, если он не был адекватным для этой страницы, а более адекватным стал тот, который загрузился, то скринридер уже этот `title` получит только если захочет очень сильно его получить, а кто же… Ну, кто вообще может предположить, что он изменился, там появилась какая-то дополнительная информация. Поэтому, да, интересно.

Конечно же проверяли формы. 27 % полей по всем опрошенным не имеют лейблов вообще. То есть технологии не знают, что это за поля. Очень интересно, что 50 % сайтов используют плейсхолдеры вместо лейбла, что тоже не является хорошей практикой. Плейсхолдеры исчезают, не все скринридеры их читают и так далее.

19 % сайтов всё ещё используют только звёздочку для того, чтобы определить, что поле обязательно к заполнению. То есть никаких больше знаний об этом в моменте у вас нет. Если вы не видите поле, не видите звёздочку, то вы не узнаете, что это поле обязательно к заполнению. Ну и CAPTCHA используется на 16 % сайтов проверенных. Что тоже не является хорошей практикой, потому что CAPTCHA, чаще всего — это недоступный, блокирующий скрипт какой-нибудь.

Что касается медиа, то, во-первых, Альманах предлагает юзать [использовать] [Able Player](https://ableplayer.github.io/ableplayer/). Я уже много раз про него слышала. Говорят, что он, типа, супер, полностью доступен. Там есть все возможности добавить все нужные потоки текстовые к аудио и видео и так далее. Аудио и видео довольно-таки редко используют свою… Ну, там тег, есть такой `<track>`, куда можно запихнуть текст, который будет синхронизирован по времени с аудио или видео. Но кое-кто уже использует [Able Player].

Ну и картинки, конечно же, выросло использование `alt` довольно сильно, но, в то же время, стало очень много `alt`, которые типа десять символов. За десять символов что ты можешь адекватного сказать пользователю? То есть предположение, что эти `alt` не очень адекватные. И здесь прикольно, что обвиняют в этом в основном системы создания контента, которые не показывают, как заполнять `alt`, не объясняют, что это такое, или вообще не дают возможности эти альты добавить, поэтому м-да. Я стала чаще видеть, например. В Shopify внедрили такую специальную волшебную галочку, которая генерирует `alt` к картинке, и ты такой, о, вау! То есть, ну, вроде ты и сам ничего не делаешь, оно всё делает за тебя, а вроде ты можешь чуть-чуть подправить, и вроде и `alt` заполнен.

Про ARIA-атрибуты супер быстро. Таня, как думаешь? Ты уже проспойлерила. Как думаешь, какой ARIA-атрибут, ARIA-роль чаще всего используется на страницах?

**Таня**: Конечно же, наша любимая `role="button"`. Е-е-е!

**Глаша**: Да, зачем? Нам недостаточно тега `<button>`, чтобы обозначить все виды кнопок, какие у нас есть. И самое болезненное — это то, что 18 % сайтов имеют хотя бы одно использование тега `<a>` с атрибутом `href` и с ролью `button`. Му-а! Просто лайк, подписка, комбинация-я-я.

Ещё очень много сайтов используют роли дублирующие. То есть роль `navigation`, например, вместо того, чтобы использовать тег `<nav>`. Роль `navigation` надо указывать для восьмого IE, больше ни для чего не надо, пожалуйста, становитесь!

Да, много сайтов скрывает контент с помощью атрибута `aria-hidden`, то есть он [контент] видимый на странице, но недоступен для скринридеров по какой-то причине. И тоже сколько-то сайтов используют всё ещё подходы `.visually-hidden`, `.sr-only`. Я в работе своей стараюсь уже избегать этих подходов. Ну, то есть это какой-то текст, который на странице находится: он невидимый, но он доступен всем, включая поиск по странице <kbd>Ctrl F</kbd>. Вы такие типа, <kbd>Ctrl F</kbd>, какой-то текст. Он находится в четырёх местах, вы видите одно место из них, а три невидимые.

Life Regions используется на 29 % сайтов. То же использование выросло по сравнению с 22-м годом на довольно-таки большой процент. Ну и интересно, что оверлеи… два процента сайтов используют оверлеи, то есть скрипт, который типа улучшает доступность. Там огромный раздел про то, почему это не надо делать, и со всякими доказательствами. Очень интересно почитать, много классных ссылок.

UserWay — самый используемый оверлей. И это тенденция к росту, то есть ежегодно растёт количество использования оверлеев. Ну и новая секция, в которой про страны, государства и прочие все штуки. И CMS-ки, например, используемые.

Оттуда инсайты [открытия], что самые доступные сайты в Америке, в Канаде, в UK [Британии] и в Австралии. Ну, в Европе в целом много запар по доступности, законов, поэтому UK [Британия], типа, как самый топ. Государственные домены, правительственные, точнее, самые крутые у Нидерландов. И у Нидерландов, и у UK [Британии] есть прям дизайн-системы для государственных ресурсов.

CMS-ки из топовых Adobe Experience Manager, WordPress и Contentful считаются самыми доступными. Они потихонечку внедряют в себя внутрь плагины, которые проверяют доступность контента финального. Ну, и из платформ CMS, типа в виртуальной… ну, в онлайне, Wix, Squarespace и Google Sites считаются самыми доступными. Прикольно, что GoDaddy Web Sites тоже там где-то находится в доступных платформах, но у него есть 36 % сайтов, по сравнению с другими платформами, у него есть проблема с контролами без лейблов, то есть инпуты [поля] без лейблов. А на всех других платформах эта ошибка встречается в одном проценте сайтов, а в GoDaddy типа 36 %. То есть, очевидно, в самой CMS есть какие-то проблемы с этим.

Ну и JavaScript-фреймворки, которые самыми доступными считаются: это Stimulus, Remix, Qwick и Astro. Никто из них не React. Такие результаты в Альманахе. А теперь я предлагаю нам передать слово Тане и рассказать, к чему вообще стремится веб в плане и улучшения веб-доступности.

**Таня**: В общем, мы уже за сегодняшний выпуск упоминали много раз инициатива разработчиков браузеров трёх основных движков, которая называется Interop. И в 2024 году одной из областей, на которой были сосредоточены разработчики движков, это доступность. И в основном все инициативы в рамках работы над доступностью в браузерах были связаны с исправлением того, что уже есть, но почему-то изначально работало не так, как было задумано спецификацией.

И что из важного теперь в Chrome? Тысяча и один `<aside>`, который у вас в тексте может быть в `<main>` вложен как врезка, как какое-то отступление, которое вроде связано с основным контентом, но всё-таки его в текст включать рука не поднимается. Вот теперь эти `<aside>` без лейблов каких-то, например, `aria-label` или `aria-labelledby`, они не будут попадать в список ориентиров на странице, Ура-ура, потому что когда я смотрела на странички в Доке, в которой врезки используются довольно часто, мне было страшно от количества `<aside>`. Теперь всё поменялось. То же самое с ролями, м-м-м, вычисляемыми для хедера и футера, которые, например, вложены в `<article>`, а не в `<body>` напрямую. То есть они тоже не получают роли `banner` и `contentinfo`, и, соответственно, тоже не считаются браузерами с вспомогательными технологиями ориентирами.

Что ещё из интересного? Например, Chrome избавился от устаревшей уже роли `directory`. Не знаю, использовал ли её кто-нибудь хоть раз, но она была задумана как роль для оглавления, вот, и я не знаю почему, потому что почему бы не использовать для оглавления обычный список, но, в общем, в 2024 году наконец-то она уходит на покой.

Что ещё интересного? Теперь как минимум Chrome поддерживает такую роль как `gridcell`. Коротко об этом сложном компоненте. `gridcell` — это ячейка такой таблицы, в которой ячейки они интерактивны. И вот теперь она поддерживается как минимум в одном браузере, и другие браузеры тоже подтянутся, потому что это часть того, над чем они договорились работать.

Наконец в дерево доступности начали попадать заголовки таблиц и футеры, потому что раньше просто у них не было роли `thead` и `tfooter`, теперь они есть.

И ещё, если вы не знали, а лучше бы вы не знали, можно задавать несколько ролей в ARIA-атрибуте `role` для какого-то элемента.

**Глаша**: Я не знала.

**Таня**: Вот так вот. И там были свои особенности вычисления, и если у тебя, например, на первом месте стояла вообще какая-то невалидная роль, ну, то есть которая не существовала, и на втором месте тоже они [браузеры] не вычисляли никакой роли.

Теперь Chromium стал умнее и в этом случае, когда какой-то странный набор ролей в этом атрибуте вдруг вами задан, браузер будет активно пытаться найти наиболее подходящую роль в этом контексте для этого элемента и вычислять её.

И что ещё, что ещё? Вот две последних вещи.

Во-первых, браузеры, почти все, да, кроме Firefox внедрили поддержку атрибута popover. Это часть вот этого нового Popover API, который по сути даёт нам возможность создавать нативный поповер. Это то, что всплывает поверх всех других элементов, то есть на самом верхнем слое интерфейса И теперь это, ну вот, поддерживается в Chrome и в Safari. Firefox, скорее всего, до конца этого года [2024] тоже внедрит эту штуку.

И наконец-то все браузеры починили поломанное изначально, с рождения, поведение `display: contents`. Там в чём был прикол? Если вы навешивали это свойство, например, на, ну не знаю, какие-нибудь гриды, флексбоксы, там всё, что было внутри этого элемента родительского, теряло свою семантику, то есть список переставал быть списком…

**Глаша**: Таблица — таблицей.

**Таня**: Таблица — таблицей, заголовок — заголовком. И теперь, наконец-то, последним эту фигню починил WebKit. Теперь вы можете вороваться в будущее CSS, можете спокойно использовать `display: contents`: он ничего не ломает.

**Глаша**: Это ж как надо было внедрять сильно и мощно, чтобы поломал.

Я знаю, что `display: table` влияет на семантику. Если таблица не была таблицей, то вот она хоба и стала таблицей. Но, да, про contents [значение] я тоже не знала, очень интересно. Хорошо, что никто его не использует сейчас, потому что я бы очень долго искала в чём проблема, если бы у меня не зачитывалась семантика элемента без причины вообще.

**Таня**: Угу! Очень весело отлаживать действительно такие приколы.

**Глаша**: Таня, чем для тебя закончился год [2024] в веб-доступности? И какие советы ты можешь дать нашим слушателям?

**Таня**: Ну, советы, пожалуй, может быть, я придержу при себе, ну, типа, непрошенные советы.

**Глаша**: Нет-нет, Таня, нет-нет, Таня, дай им советы, а то они не будут ничего делать.

**Таня**: Да, там не использовать `tabindex`…

По выводам на основе Web Almanac и State of HTML кажется, что браузеры, они как-то последовательно пытаются исправить проблемы с доступностью, которые уже существовали, и параллельно находят новое, чтобы исправить их потом, позже, в следующем году.

А вот Web Almanac показывает, что на уровне разработки и дизайна, тестирования, доступность она не особо популярна. Похоже, люди узнают о разных ARIA-атрибутах, похоже, люди что-то знают про `tabindex`, но, м-м-м, они не знают, как этим правильно пользоваться. И похожая статистика это как раз и отражает то, что доступности люди знают, чуть-чуть её как-то улучшают, что-то исправляют на основе того, что они услышали, прочитали, но всё ещё есть некоторые недопонимания между тем как оно должно работать и тем, как оно используется на практике.

**Глаша**: Всё так. А скажи ещё, что в Альманахе много полезных ссылок.

**Таня**: В Web Almanac, если вы заглянете туда в раздел, посвящённый доступности и исследованию, вы найдёте много полезных ссылок, которые расскажут вам про то, почему плохо пользоваться оверлеями, и про судебные разбирательства Адриана Розелли, и много чего ещё полезного.

С вами был подкаст «Инклюзивный ананас» и его ведущие Глаша и Таня. Вы можете найти нас на любой подкаст-платформе. До встречи в следующем выпуске!

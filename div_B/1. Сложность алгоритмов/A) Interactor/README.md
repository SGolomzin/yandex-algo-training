# A. Interactor

|                     |                                    |
| ------------------- | ---------------------------------- |
| Ограничение времени | 1 секунда                          |
| Ограничение памяти  | 256Mb                              |
| Ввод                | стандартный ввод или `input.txt`   |
| Вывод               | стандартный вывод или `output.txt` |

Лена руководит разработкой тестирующей системы, в которой реализованы интерактивные задачи.
До завершения очередной стадии проекта осталось написать модуль, определяющий _итоговый вердикт_ системы для интерактивной задачи. _Итоговый вердикт_ определяется из кода завершения задачи, вердикта интерактора и вердикта чекера по следующим правилам:

- Вердикт чекера и вердикт интерактора — это целые числа от `0` до `7` включительно.
- Код завершения задачи — это целое число от `-128` до `127` включительно.
- Если интерактор выдал вердикт `0`, _итоговый вердикт_ равен `3` в случае, если программа завершилась с ненулевым кодом, и вердикту чекера в противном случае.
- Если интерактор выдал вердикт `1`, _итоговый вердикт_ равен вердикту чекера.
- Если интерактор выдал вердикт `4`, _итоговый вердикт_ равен 3 в случае, если программа завершилась с ненулевым кодом, и 4 в противном случае.
- Если интерактор выдал вердикт `6`, _итоговый вердикт_ равен 0.
- Если интерактор выдал вердикт `7`, _итоговый вердикт_ равен `1`.
- В остальных случаях _итоговый вердикт_ равен вердикту интерактора.

Ваша задача — реализовать этот модуль.

## Формат ввода

Входной файл состоит из трёх строк. В первой задано целое число `r` (`−128 ≤ r ≤ 127`) — код завершения задачи, во второй — целое число `i` (`0 ≤ i ≤ 7`) — вердикт интерактора, в третьей — целое число `c` (`0 ≤ c ≤ 7`) — вердикт чекера.

## Формат вывода

Выведите одно целое число от `0` до `7` включительно — итоговый вердикт системы.

### Пример 1

| Ввод                  | Вывод |
| --------------------- | ----- |
| `0` <br> `0` <br> `0` | `0`   |

### Пример 2

| Ввод                   | Вывод |
| ---------------------- | ----- |
| `-1` <br> `0` <br> `1` | `3`   |

### Пример 3

| Ввод                   | Вывод |
| ---------------------- | ----- |
| `42` <br> `1` <br> `6` | `6`   |

### Пример 4

| Ввод                   | Вывод |
| ---------------------- | ----- |
| `44` <br> `7` <br> `4` | `1`   |

### Пример 5

| Ввод                  | Вывод |
| --------------------- | ----- |
| `1` <br> `4` <br> `0` | `3`   |

### Пример 6

| Ввод                   | Вывод |
| ---------------------- | ----- |
| `-3` <br> `2` <br> `4` | `2`   |

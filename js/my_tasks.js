/* 
* - Задача 1 (Решена не полностью, без пункта 3.) 
! ========================================
* - Есть список имен (nameAll). 
* - Напиши функция, которая выводит в консоль из этого списка следующие данные:
* -  
* -  1.Количество элементов (имен) массива //! Выполнено
* -  2.Массив всех элементов (имен) //! Выполнено
* -  3.Имя, количество его повторений в массиве, все позиции в массиве
* -  4.Количество неповторяющихся элементов (имен) массива //! Выполнено
* -  5.Массив неповторяющихся элементов (имен) //! Выполнено
* -  6.Отсортированный по алфавиту массив неповторяющихся элементов (имен) //! Выполнено

! ========================================
 */


//! ++++++++++++++ Список имен: ++++++++++++++

const nameAll =
    ["Polly",
    "Dashed",
    "Tony",
    "Ivan",
    "Nikolas",
    "Den",
    "Polly",
    "Dashed",
    "Rik",
    "Nikolas",
    "Zorro",
    "Vasya",
    "Nikolas",
    "Dashed",
    "Rubby",
    "Zorro",
    "Ray",
    "Den",
    "Nikolas",
    "Iren",
    "Foks",
    "Foks",
    "Vasya",
        "Ben"];
    


//! ======================================= РЕШЕНИЕ: =======================================

const findNames = function (names) {

    const arrNamesLength = names.length;
    console.log(`1.Количество элементов массива: ${arrNamesLength}`); //! ОТВЕТ п.1
    console.table(names); //! ОТВЕТ п.2
    console.log("========================================================================");

    let arrUniqueNames = []; // ИТОГОВЫЙ массив Всех элементов без повторения

    let arrNamesName; //! Имя элемнета +
    let arrNamesNumRepet = 0; //! Количество повторений элемента в массиве +
    let arrNamesAllPosition = 0; //! Все позициии элемента в массиве +
    let inexNamesNext = 0; //! Пока не знаю зачем нужна -

    for (let i = 0; i < names.length; i += 1) {

        for (let j = 0; j < names.length; j += 1) {

            console.log("i=", i, "names[i]: ", names[i]);
            console.log("j=", j, "names[j]: ", names[j]);


            if (names[i] === names[j]) {

                let arrTempName = []; // временный массив одного элемента без повторений
                
                arrTempName.push(names[j]);
                console.log("временный массив одного элемента arrTempName: ", arrTempName);
                console.log("ИТОГОВЫЙ массив Всех элементов без повторения ДО: ", arrUniqueNames);

                //! Условие: если names[j] уже сущесвует в массиве arrUniqueNames, то  прерываем цикл
                // let a = arrUniqueNames.includes(names[i]) === arrTempName.includes(names[j]) ? "ДА" : "no";
                // console.log(a);

                console.log("== Проверка на совпадение имен в arrUniqueNames и в arrTempName: ==");

                if (arrUniqueNames.includes(names[i]) === arrTempName.includes(names[j])) { 
                    console.log("----!-!-!-!----Такой элемент в массиве уже есть!----!-!-!-!----");
                    console.log("____________----!-!-!-!--- ПЕРЕХОД ----!-!-!-!----_____________");
                    break;
                }
                //! Условие: ________________________________________________________________________

                console.log("==================== Все ОК! Имена не совпвдают ====================");

                arrUniqueNames.push(names[j]);
                console.log("ИТОГОВЫЙ массив Всех элементов без повторения ПОСЛЕ: ", arrUniqueNames);
                console.log("===== ИМЕНА СОВПАЛИ, ИМЯ добавлено в массив arrUniqueNames ======");
                console.log("__________________________ СЛЕДУЮЩИЙ ЦИКЛ __________________________");
                break;
            };
            console.log("_______Имена не совпадают, идем дальше_______");   
        }   

        // console.log(`3.1.Имя: ${arrNamesName}`);
        // console.log(`3.2.Количество повторений: ${arrNamesNumRepet}`);
        // console.log(`3.3.Позиции в массиве: ${arrNamesAllPosition}`);
        // console.log("======================================");
        
    };

    console.log("========================================================================");
    const arrUniqueNamesLength = names.length;
    console.log(`1.Количество неповторяющиеся элементов (имен) массива: ${arrUniqueNamesLength}`); //! ОТВЕТ п.4
    console.log("++++++++ Массив неповторяющихся элементов (имен): ++++++++++++++++++");
    console.table(arrUniqueNames); //! ОТВЕТ п.5
    console.log("+ Сортированный по алфавиту Массив неповторяющихся элементов (имен): +");
    console.table(arrUniqueNames.sort()); //! ОТВЕТ п.6



};


findNames(nameAll); // Обращение к фукции (вызов функции)
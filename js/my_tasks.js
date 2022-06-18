/* 
* - Задача 1 (ОТВЕТ) - Работает, но НЕ ПРИНЯТО
! ========================================
* - Есть список имен (nameAll). Напсать функция, которая и этого списка выводит в консоль следующие данные:
* -  1.Количество элементов массива
* -  2.Имя, количество его повторений в массиве, позицию в массиве
* -  3.Количество неповторяющихся элементов массива
* -  4.Все неповторяющиеся элементы массива


console.log(`Количество повторений ${arrTotalNum}`);
console.log(`Позиции в массиве ${arrTotalPosition}`);
console.log("======================================");
console.log(`Количество неповторяющихся элементов массива ${arrUniqueNum}`);
console.log(`Все неповторяющиеся элементы массива ${arrUniqueTotal}`);

 */

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



const findNames = function (names) {
    console.table(names);

    const arrTotal = names.length;
    console.log(`1.Количество элементов массива: ${arrTotal}`);
    console.log("======================================");

    let arrUniqueNames = ["T"]; // временный массив Всех элементов без повторения
    let arrUniqueNamesAll = []; // ИТОГОВЫЙ массив Всех элементов без повторения

        // let arrName = names[i]; // Имя
        // let arrTotalNum = 0; // Количество повторений
        // let inexNameNext = 0;

        // inexNameNext = names.indexOf(names[i], inexNameNext) 

    for (let i = 0; i < names.length; i += 1) {

        for (let j = 0; j < names.length; j += 1) {

            console.log("i=", i, "names[i]: ", names[i]);
            console.log("j=", j, "names[j]: ", names[j]);

            // let arrUniqueName = []; // временный массив одного элемента без повторений?

            if (names[i] === names[j]) {

                let arrUniqueName = []; // временный массив одного элемента без повторений?
                
                arrUniqueName.push(names[j]);
                console.log("временный массив одного элемента: ", arrUniqueName);
                console.log("ИТОГОВЫЙ массив Всех элементов без повторения ДО: ", arrUniqueNamesAll);

                //! тут надо поставить условие: если names[i] уже сущесвует в массиве arrUniqueNamesAll, то  прерываем цикл
                // let a = arrUniqueNamesAll.includes(names[i]) === arrUniqueName.includes(names[j]) ? "ДА" : "no";
                // console.log(a);

                console.log("== Проверка на совпадение имен в arrUniqueNamesAll и в arrUniqueName: ==");

                if (arrUniqueNamesAll.includes(names[i]) === arrUniqueName.includes(names[j])) { 
                    console.log("----!-!-!-!----Такой элемент в массиве уже есть!----!-!-!-!----");
                    console.log("____________----!-!-!-!--- ПЕРЕХОД ----!-!-!-!----_____________");
                    break;
                }

                console.log("==================== Все ОК! Имена не совпвдают ====================");

                arrUniqueNamesAll.push(names[j]);
                console.log("ИТОГОВЫЙ массив Всех элементов без повторения ПОСЛЕ: ", arrUniqueNamesAll);
                console.log("===== ИМЕНА СОВПАЛИ, ИМЯ добавлено в массив arrUniqueNamesAll ======");
                console.log("__________________________ СЛЕДУЮЩИЙ ЦИКЛ __________________________");
                break;
            };
            console.log("_______Имена не совпадают, идем дальше_______");   





            // console.log(arrUniqueName);
            // console.log(arrUniqueNames);
            // arrUniqueNamesAll = arrUniqueNames.concat(arrUniqueName);
            // console.log(arrUniqueNamesAll);
            // console.log("======================================");
        }   
        // break;
        // arrUniqueNamesAll = arrUniqueNames.concat(arrUniqueName);
        // console.log(arrUniqueName);

        // console.log(`2.1.Имя: ${arrName}`);
        // console.log(`2.2.Количество повторений: ${arrTotalNum}`);
        // console.log(`2.3.Позиции в массиве: ${arrTotalPosition}`);
        // console.log("======================================");
        
    };
    console.log("++++++++++++ ИТОГОВЫЙ массив Всех элементов без повторения: ++++++++++++");
    console.table(arrUniqueNamesAll);



// console.log(`3.1.Количество неповторяющихся элементов массива ${arrUniqueNamesTotal}`);
// console.log(`3.2.Все неповторяющиеся элементы массива ${arrUniqueNames}`);

};


findNames(nameAll); // Обращение к фукции (запуск)
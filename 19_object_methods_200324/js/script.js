   
  

//   1. Пристрелочная задача. У нас есть объект simpleObject. Нужно создать его ГЛУБОКУЮ копию такими способами:
// с использованием spread-оператора

const simpleObject = {
    name: 'First Name',
    age: 25,
    job: 'Worker'
  };

  const newSimple = {...simpleObject}
//   console.log(newSimple);


// с использованием Object.assign
const newSimple2 = Object.assign({}, simpleObject)

// с использованием сериализации и десериализации (JSON)
const newSimple3 = JSON.parse(JSON.stringify(simpleObject))


// 2. Усложняем задачу. Теперь нужно сделать глубокую копию объекта complexObject. Также, тремя способами.

const complexObject = {
    name: 'First Name',
    age: 25,
    job: 'Worker',
    skills: {
        programming: 9,
        testing: 3
    }
  };

  const complexObject1 = {...complexObject,  skills: {...complexObject.skills}};
//   console.log(complexObject1);

  const complexObject2 = structuredClone(complexObject);
//   console.log(complexObject2);

const complexObject3 = JSON.parse(JSON.stringify(complexObject));
// console.log(complexObject3);

const complexObject4 = Object.assign(complexObject);
complexObject4.skills = Object.assign({}, complexObject.skills)
//   console.log(complexObject4);

// 3. Теперь поработаем с методами объектов. У нас есть объект DEVELOPER_SKILLS, который содержит данные о навыках программиста. Нужно создать массив, в котором будут содержаться только названия навыков (то есть, ключи объекта DEVELOPER_SKILLS), отсортировать его в алфавитном порядке, и вывести в консоль.

const DEVELOPER_SKILLS = {
    javascript: {
      skill: 9,
      experience: 5,
      comment: 'Plain old JS'
    },
    css: {
      skill: 8,
      experience: 3,
      comment: 'With preprocessors'
    },
    react: {
      skill: 10,
      experience: 4,
      comment: 'Functional React'
    }
  }
  
  const skills = Object.keys(DEVELOPER_SKILLS).sort()
   
//   console.log(skills);


//4.  Теперь создаем массив объектов с данными навыках программиста (значения свойств объекта DEVELOPER_SKILLS), сортируем его по возрастанию навыка (skil), и выводим в консоль.
let skillsSorted = Object.values(DEVELOPER_SKILLS).sort((a,b) => a.skill - b.skill)
// console.log(skillsSorted);

//5. Нужно получить массив всех комментариев к навыкам. То есть, пройтись по свойствам объекта DEVELOPER_SKILLS, взять из каждого комментарий, и сложить в массив. Результат вывести в консоль.

let comment = Object.values(DEVELOPER_SKILLS).map(el => el.comment)
// console.log(comment);

// 6. Собираем данные по скиллам и комментариям. Нужно получить объект, где в качестве ключей будут использоваться названия навыков, а в качестве значений - комментарии.
let result1 = {};
for (let key in DEVELOPER_SKILLS) {
  result1[key] = DEVELOPER_SKILLS[key].comment;
}
// console.log(result1)
let skillsKey = Object.entries(DEVELOPER_SKILLS).reduce((acc, [key, value]) => {
    acc[key] = value.comment;
    return acc;
}, {});

console.log(skillsKey);

// {
//   javascript: 'Plain old JS',
//   css: 'With preprocessors',
//   react: 'Functional React'
// }
// 7. Сделаем тренажер программистов. Пишем функцию programmerHardSkillTrainer. Она примет на вход объект-программиста. У него есть ОБЪЕКТ skills, где содержатся данные о его навыках, и уровень владения навыком. Нужно пройтись по значениям этого объекта, и для каждого навыка с type = hardSkill увеличить skill на 1. То есть, учим программиста программировать. При этом, нужно выводить в консоль протокол: вида "javascript skll had been increased!".
const programmerObject = {
    name: 'Programmer',
    age: 35,
    skills: {
      javascript: {
        skill: 9,
        type: 'hardSkill'
      },
      react: {
        skill: 10,
        type: 'hardSkill'
      },
      communication: {
        skill: 7,
        type: 'softSkill'
      },
      attention: {
        skill: 8,
        type: 'softSkill'
      }
    }
  }

  const programmerHardSkillTrainer = (programmer) => {
    for (const [key, value] of Object.entries(programmer.skills)) {
        if (value.type === 'hardSkill') {
            value.skill += 1;
        }
     
    }    

  }

  programmerHardSkillTrainer(programmerObject);
  console.log(programmerObject);
// 8. Теперь пишем функцию getSoftSkills - она должна определить софт-скиллы у программиста. Принимает на вход объект-программиста, и должна вернуть массив, который содержит названия навыков, у которых категория - softSkill.

const getSoftSkills = (programmer) => {
for (const [key, value] of Object.entries(programmer.skills)) {
    if (value.type === 'softSkill') {
        result1.push(key)
        
    }   
}
return result1
}

const result = Object.entries(programmer.skills)
.filter( ([key, value]) => value.type === 'softSkill')
.map( el => el[0]);
  return result;

console.log(getSoftSkills(programmerObject));

// 9. И напишем функцию getSkills. Она будет определять суммарный навык программиста по навыкам в категории. В аргументах - все тот же программист. Задача - пройтись по его навыкам, и на выходе получить объект, в котором будут суммарные навыки по категориям.
// const programmerObject = {
//   name: 'Programmer',
//   age: 35,
//   skills: {
//     javascript: {
//       skill: 9,
//       type: 'hardSkill'
//     },
//     react: {
//       skill: 10,
//       type: 'hardSkill'
//     },
//     communication: {
//       skill: 7,
//       type: 'softSkill'
//     },
//     attention: {
//       skill: 8,
//       type: 'softSkill'
//     }
//   }
// };

// const result = getSkills(programmerObject);
// Expected result:
// {
//    softSkill: 15,
//    hardSkill: 19
// }

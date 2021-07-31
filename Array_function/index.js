// Q.1 make a string out of an array
// 주어진 배열은 스트링으로 변환해라
{
    const fruits = ['apple', 'banana', 'cherry'];
    // join()드래그하고 컨츠롤 + 클릭하면 설명이 나온다
    //     join(separator?: string): string; 
    // separator는 구분자
    // ?가 붙었다면 써도 되고 안써도 되고
    // const result = fruits.join(); 
    // apple,banana,cherry
    // const result = fruits.join('|');
    // apple|banana|cherry
    const result = fruits.join('./');
    // apple./banana./cherry
    console.log(result);
}

// Q.2 make an array out of a string
// 주어진 스트링을 배열로 반환해라
{
    const a = 'apple, banana, cherry';
    // split(separator: string | RegExp, limit?: number): string[]; 
    // 두가지의 파라미터를 받는다
    // 1.separator: string | RegExp,
    // 2. limit?: number
    // split() 드래그 컨트롤 + 클릭 했을 때 옵션이 있다면 symbol말고 es5선택
    const result = a.split(',');
    // (3) ["apple", " banana", " cherry"]
    // const result = a.split(',', 2);
    // (2) ["apple", " banana"] 두번째 애들까지만 출력된다잉
    console.log(result);
}

// Q.3 make this array look like this: [5, 4, 3, 2, 1]
{
    const a = [1, 2, 3, 4, 5];
    const result = a.reverse();
    console.log(result);
    console.log(a);
    // a를 찍어보면 a의 배열 자체가 변한걸 볼 수 있다*
}

// Q.4 make new  array without the first two elements
// 일이랑 이가 없는 새로운 배열을 만들어라
{
    const array = [1, 2, 3, 4, 5];
    // 나는 처음에 splice를 생각함
    //  splice(start: number, deleteCount?: number): T[];
    // const result = array.splice(0,2);
    // console.log(result); (2) [1, 2]
    // console.log(array); [3, 4, 5]
    // 일이랑 이는 없어졌지만 result의 값은  [1, 2] 

    const result = array.slice(2,5);
    // slice(start?: number, end?: number): T[];
    // const result = array.slice(2,4);
    // (2) [3, 4]
    // 왜 5이냐면 4로 써넣으면 index4번은 무시해 버려서
    console.log(result); //(3) [3, 4, 5]
    console.log(array); //(5) [1, 2, 3, 4, 5], splice와는 다르게 배열 자체는 바뀌지 않음
}

// Q.5 find a student with the score 90 
// 점수가 90인 학생을 찾아랏
{
    class Student {
        constructor(name, age, enrolled, score) {
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }
    const student = [
        new Student('A', 29, true, 45), 
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90), 
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88)
    ]

    // find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => 
    // value is S, thisArg?: any): S | undefined;
    const result = student.find((student) => {
        return student.score === 90;
    });

    // 축약형 - const result = student.find((student) => student.score === 90 );
    console.log(result);
}

// Q.6 make an array of enrolled students
{
    class Student {
        constructor(name, age, enrolled, score) {
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }
    const student = [
        new Student('A', 29, true, 45), 
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90), 
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88)
    ]

    // filter<S extends T>(predicate: (value: T, index: number, array: T[]) => 
    // value is S, thisArg?: any): S[];
    const result = student.filter((student) => {
        return student.enrolled;
    });
    console.log(result); 
    // 0: Student {name: "A", age: 29, enrolled: true, score: 45}
    // 1: Student {name: "C", age: 30, enrolled: true, score: 90}
    // 2: Student {name: "E", age: 18, enrolled: true, score: 88}
    
}

// Q.7 make an array conaining only the students' scores result should be : [45, 80, 90, 66, 88]
{
    class Student {
        constructor(name, age, enrolled, score) {
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }
    const student = [
        new Student('A', 29, true, 45), 
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90), 
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88)
    ]

    // map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    const result = student.map((student) => {
        return student.score * 2;
    });
    console.log(result);
}

// Q.8 check if there is a student with the score lower tha 50
{
    class Student {
        constructor(name, age, enrolled, score) {
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }
    const student = [
        new Student('A', 29, true, 45), 
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90), 
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88)
    ]

    // some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    const result = student.some((student) => { // some은 배열중에 하나라도 맞는 조건이 있으면 true
        return student.score < 50;
    });
    console.log(result); // true나옴

    const result2 = student.every((student) => { // 얘는 모든 배열의 조건이 맞아야 true
        return student.score < 50;
    });
    console.log(result2); // false나옴
}

// Q.9 compute students's average score
// 계산하다 학생들의 평군 점수
{
    class Student {
        constructor(name, age, enrolled, score) {
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }
    const student = [
        new Student('A', 29, true, 45), 
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90), 
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88)
    ]

    // reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    // reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    const result = student.reduce((prev, curr) => { // redueRight도 있는데 얘는 뒤부터 시작
        // console.log(prev); // return을 안해주면 첫번째는 나오지만 두번째부터는 undefined가 나온다
        // console.log(curr);
        return prev + curr.score; // *return되는 값은 위에 prev한테 간다*
    }, 0);
    console.log('문제9번', result / student.length);


    const result2 = student.reduceRight((prev, curr) => { // redueRight도 있는데 얘는 뒤부터 시작
        console.log(prev); // return을 안해주면 첫번째는 나오지만 두번째부터는 undefined가 나온다
        console.log(curr);
        return prev + curr.score; // *return되는 값은 위에 prev한테 간다*
    }, 0); // 0을 안쓰면 [object Object]66908045 이렇게 나오고, 1이라 쓰면 1부터 시작
    console.log('문제9번', result2);
}

// Q.10 make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// 만들어라 문자열 포함한 모든 점수를
{
    class Student {
        constructor(name, age, enrolled, score) {
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }
    const student = [
        new Student('A', 29, true, 45), 
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90), 
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88)
    ]
    
    const result = student.map((student) => {
        return student.score;
    });
    console.log('문제10번', result); // (5) [45, 80, 90, 66, 88]

    const result2 = student.map((student) => {
        return student.score;
    }).join(); 
    console.log('문제10번', result2); // //문제10번 45,80,90,66,88

    const result3 = student.map((student) => {
        return student.score;
    }).filter((score) => score >= 50).join();
    console.log('문제10번', result3); // 50점 이상인 점수만 출력

    // 축약형
    // const result4 = student.map((student) => student.score).filter((score) => score >= 50).join();
    // console.log('문제10번', result4);
}

// Q.bonus sorted in ascending order
// result should be: ''45, 66, 80, 88, 90
{
    class Student {
        constructor(name, age, enrolled, score) {
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }
    const student = [
        new Student('A', 29, true, 45), 
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90), 
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88)
    ]

    const result = student.map(student => student.score)
    .sort((a,b) => a-b).join();
    console.log(result);
}

const a = [5, 8, 88, 61];
const xxx = a.sort((b,a) => b-a);
console.log(xxx); // [5, 8, 61, 88]

    

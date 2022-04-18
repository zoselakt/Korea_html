 'use strict'

class User{
    constructor(name, age, local){
        this.name = name;
        this.age = age;
        this.local = local;
    }
    introduce(){
        try{
            alert(`안녕하세요 ${this.local}에 사는 ${this.age}살, ${this.name}입니다.`);
            // throw new Error('머머가 문제야!');
        }catch(e){
            console.error("e.printstacktrace", `${e.message}`)
        }finally{
            console.log("종료");
        }
    }
}

let user1 = new User("jane", 39, "LA");
user1.introduce();
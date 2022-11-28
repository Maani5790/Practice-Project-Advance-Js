// const name1 = "abdul rehman";
// const name2 = "abdul";
// const name3 = "rehman";
// console.log("name1");

// setTimeout(() => {
//     console.log("im here dude")
// },2000);

// console.log("name2");
// console.log("name3");

// const addNum = (num1,num2) => num1 + num2
//     setTimeout(() => {
// console.log(addNum(2,4));

//     }, 4000);

/////////////////////promises//////////

// const pro = new Promise((resolve,reject)=>{
// setTimeout(() => {
//     console.log("ur ready")

// }, 3000);
// })

// const pro1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     isReady = true;
//     isReady = false;
//     isReady = [true,false][Math.floor(Math.random() *2)];
//     isReady ? resolve("surve me dude") : reject(" i dont want  this bro");
//   }, 1000);
// });
// console.log(pro1.then(value=> console.log(value))
// .catch(error =>(console.log(error)))
// );

// console.log('fetch :' ,
// fetch('https://dog.ceo/api/breeds/image/random')
// .then(responce => responce.json())
// .then(responce => console.log('responce' , responce.json()))
// .then(data => console.log(data))
// )

////////////////async & await in js///////////

// const getDog = async () => {
//     const url = 'https://dog.ceo/api/breeds/image/random'
//     const responce = await fetch(url)
//     const data = await responce.json()
//     console.log(data)


// }
//    getDog();

// const getDog1 = async () =>{
//     const url = 'https://dog.ceo/api/breeds/image/random'
//     const responce = await fetch(url)
//     const data = await responce.json()
//     console.log(data)

// }

// getDog1();


// const pro1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       isReady = true;
//       isReady = false;
//       isReady = [true,false][Math.floor(Math.random() *2)];
//       isReady ? resolve("surve me dude") : reject(" i dont want  this bro");
//     }, 1000);
//   });

  const pro12 = async()=>{
    const item = 'drink'
    const responce = await fetch(item)
    const data = await responce.json()
    console.log(data)
     
  }
//   pro12();

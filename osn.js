


 var CAR={
  "markaname": "Audi",
  
  "active": true,
  "cars1": [
    {
      "name": "rs6",
      "age": 2017,
      "url":"./20.png",
      "id":1,
      "price": "83.000$",
      "technik": ["4.0 l",
      "Бензин"
        
      ]
    },
    {
      "name": "a3",
      "url":"20191.png",
      "id":2,
      "age": 2018,
      "price": "30.000$",
      "technik": ["2.0 l",
      "Бензин"
        
      ]
    },
    {
      "name": "a4",
      "id":3,
      "url":"20191.png",
      "age": 2019,
      "price": "30.000$",
      "technik": ["2.0 l",
      "Бензин"
        
      ]
    },
    {
      "name": "a5",
      "age": 2020,
      "url":"20191.png",
      "id":4,
      "price": "30.000$",
      "technik": ["2.0 l",
      "Бензин"
        
      ]
    },
    {
      "name": "a6",
      "id":5,
      "url":"20191.png",
      "age": 2015,
      "price": "30.000$",
      "technik": ["2.0 l",
      "Бензин"
        
      ]
    },
    {
      "name": "a7",
      "id":6,
      "url":"20191.png",
      "age": 2015,
      "price": "30.000$",
      "technik": ["2.0 l",
      "Бензин"
        
      ]
    }
  ],
  "cars2": [
      {
        "name": "Q3",
        "id":7,
        "age": 2017,
        "price": "83.000$",
        "technik": ["4.0 l",
        "Бензин"
          
        ]
      },
      {
        "name": "Q5",
        "id":8,
        "age": 2018,
        "price": "30.000$",
        "technik": ["2.0 l",
        "Бензин"
          
        ]
      },
      {
        "name": "Q7",
        "id":9,
        "age": 2019,
        "price": "30.000$",
        "technik": ["2.0 l",
        "Бензин"
          
        ]
      },
      {
        "name": "Q8",
        "id":10,
        "age": 2020,
        "price": "30.000$",
        "technik": ["2.0 l",
        "Бензин"
          
        ]
      },
      {
        "name": "Q5 sportback",
        "id":11,
        "age": 2015,
        "price": "30.000$",
        "technik": ["2.0 l",
        "Бензин"
          
        ]
      },
      {
        "name": "Q3 sportback",
        "id":12,
        "age": 2015,
        "price": "30.000$",
        "technik": ["2.0 l",
        "Бензин"
          
        ]

      }
    ],
    "cars3": [
      {
        "name": "e-tron",
        "id":13,
        "age": 2017,
        "price": "83.000$",
        "technik": ["4.0 l",
        "Бензин"
          
        ]
      },
      {
        "name": "e-tron-sportback",
        "id":14,
        "age": 2018,
        "price": "30.000$",
        "technik": ["2.0 l",
        "Бензин"
          
        ]
      },
      {
        "name": "a4-avant",
        "id":15,
        "age": 2019,
        "price": "30.000$",
        "technik": ["2.0 l",
        "Бензин"
          
        ]
      },
      {
        "name": "a4-allroad-quatro",
        "id":16,
        "age": 2020,
        "price": "30.000$",
        "technik": ["2.0 l",
        "Бензин"
          
        ]
      },
      {
        "name": "a6-avant",
        "id":17,
        "age": 2015,
        "price": "30.000$",
        "technik": ["2.0 l",
        "Бензин"
          
        ]
      },
      {
        "name": "a6-allroad-quatro",
        "id":18,
        "age": 2015,
        "price": "30.000$",
        "technik": ["2.0 l",
        "Бензин"
          
        ]
      }
    ]
}
function t1(){
// Создаем дивы для каждой машины из cars1 и добавляем их в товар 1
var tovar1 = document.querySelector(".tovar1");
for (var i = 0,k=0; i < 6 ; i++,k++) {
  var carDiv1 = document.createElement("div");
  carDiv1.className = "podtovar";
  carDiv1.id=k;
  var carImg1=document.createElement("div");

carImg1.className="imgphoto"
carDiv1.appendChild(carImg1);
carImg1.id="t"+i;
  carDiv1.innerHTML += "<h3 class='texth3'>" +"Model:"+ CAR.cars1[i].name + "</h3>" +
  "<p class='textage' >Age: " + CAR.cars1[i].age + "</p>" +
  "<p class='textprice'>Price: " + CAR.cars1[i].price + "</p>";
  var carbut1=document.createElement("div");
  carbut1.id="b"+i;
  carbut1.className="button1";
   var carp1=document.createElement("p");
  carp1.className="textbut";
  carp1.innerHTML="Перейти";
  carbut1.appendChild(carp1);
  carDiv1.appendChild(carbut1);
  carDiv1.name=CAR.cars1[i].name+":"+CAR.cars1[i].age+":"+CAR.cars1[i].price;
  tovar1.appendChild(carDiv1);
  
  }for(var i = 0,k=0; i < 6 ; i++,k++){
    let element2=document.getElementById(k);
   
    element2.addEventListener("click", function() {
      loc(element2);
    });
  }}

function t2(){
// Создаем дивы для каждой машины из cars2 и добавляем их в товар 2
var tovar2 = document.querySelector(".tovar2");
for (var i = 0,k=6; i < 6 ; i++,k++) {
  var carDiv2 = document.createElement("div");
  carDiv2.className = "podtovar";
  carDiv2.id=k;
  var  carImg2=document.createElement("div");
  carImg2.className="imgphoto";
  carImg2.id="k"+i;
carDiv2.appendChild(carImg2);

  carDiv2.innerHTML += "<h3 class='texth3'>" +"Model:"+ CAR.cars2[i].name + "</h3>" +
  "<p class='textage' >Age: " + CAR.cars2[i].age + "</p>" +
  "<p class='textprice'>Price: " + CAR.cars2[i].price + "</p>";
  var carbut2=document.createElement("div");
  carbut2.id="b"+i;
  carbut2.className="button1";
   var carp2=document.createElement("p");
  carp2.className="textbut";
  carp2.innerHTML="Перейти";
  carbut2.appendChild(carp2);
  carDiv2.appendChild(carbut2);
  carDiv2.name=CAR.cars2[i].name;
  tovar2.appendChild(carDiv2);
  

}
for(var i = 0,k=6; i < 6 ; i++,k++){
  let element1=document.getElementById(k);
 
  element1.addEventListener("click", function() {
    loc(element1);
  });
}}
function t3(){
// Создаем дивы для каждой машины из cars3 и добавляем их в товар 3
var tovar3 = document.querySelector(".tovar3");
for (var i = 0,k=12; i < 3 ; i++,k++) {
  var carDiv3 = document.createElement("div");
  carDiv3.className = "podtovar";
  carDiv3.id=k;
  
  var  carImg3=document.createElement("div");
  carImg3.className="imgphoto";
carImg3.id="j"+i;
carDiv3.appendChild(carImg3);

  carDiv3.innerHTML += "<h3 class='texth3'>" +"Model:"+ CAR.cars3[i].name + "</h3>" +
  "<p class='textage' >Age: " + CAR.cars3[i].age + "</p>" +
  "<p class='textprice'>Price: " + CAR.cars3[i].price + "</p>";
  var carbut3=document.createElement("div");
  carbut3.id="b"+i;
 
  carbut3.className="button1";
   var carp3=document.createElement("p");
  carp3.className="textbut";
  carp3.innerHTML="Перейти";
  carbut3.appendChild(carp3);
  carDiv3.appendChild(carbut3);
  carDiv3.name=CAR.cars3[i].name;
  tovar3.appendChild(carDiv3);
 
  
}
for(var i = 0,k=12; i < 6 ; i++,k++){
  let element=document.getElementById(k);
 
  element.addEventListener("click", function() {
    loc(element);
  });
}}

 

function loc(e){
window.localStorage.setItem("name", e.name);
//alert(e.name);
window.location="E:/курсач/html/forma.html";
}
function z44(){
var a22=document.querySelector(".a22");
a22.addEventListener("click",function() {golight()});
var a23=document.querySelector(".a23");
a23.addEventListener("click",function() {gocross()});
var a24=document.querySelector(".a24");
a24.addEventListener("click",function() {goelectro()});}
var a33 =document.getE

function gohome()
{
window.location="E:/курсач/html/ossn.html"
}
function golight(){
    window.location="E:/курсач/html/light.html " 
}
function gocross(){
    window.location="E:/курсач/html/cross.html " 
}
function goelectro(){
    window.location="E:/курсач/html/electro.html " 
}
document.addEventListener("DOMContentLoaded", () => {
    let to_top_btn = document.querySelector(".m14");

    window.onscroll = function () {
        if (window.pageYOffset > 580) {
            to_top_btn.style.display = "block"
        } else {
            to_top_btn.style.display = "none"
        }
    }
  })
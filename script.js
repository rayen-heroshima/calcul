/**var res=0;
var res1=""
var element="+"
var oneelement = document.querySelector(".one");
var zeroelement = document.querySelector(".zero");
var twoelement = document.querySelector(".two");
var threeelement = document.querySelector(".three");
var fourelement = document.querySelector(".four");
var fiveelement = document.querySelector(".five");
var sixelement = document.querySelector(".six");
var sevenelement = document.querySelector(".seven");
var eightelement = document.querySelector(".eight");
var nineelement = document.querySelector(".nine");
var pluselement = document.querySelector(".plus");
var moinelement = document.querySelector(".moin")
var sabstructelement = document.querySelector(".substract");
var multielement = document.querySelector(".multi")
var egaleelement = document.querySelector(".egale");
var reselement= document.querySelector(".res");
var resetlement= document.querySelector(".reset")
oneelement.addEventListener("click", function() {
    
        if (element === "+") {
            res = res + 1;
        } else if (element === "*") {
            res = res * 1;
        } else if (element === "-") {
            res = res - 1;
        } else {
            res = res / 1;
        }
        res1 = res1+"1";
        reselement.innerHTML=res1;
        
    }

);
twoelement.addEventListener("click", function() {
     
        if (element === "+") {
            res = res + 2;
        } else if (element === "*") {
            res = res * 2;
        } else if (element === "-") {
            res = res - 2;
        } else {
            res = res / 2;
        }
        res1 = res1+"2";
        reselement.innerHTML=res1;
    }
);
threeelement.addEventListener("click", function() {
    
        if (element === "+") {
            res = res + 3;
        } else if (element === "*") {
            res = res * 3;
        } else if (element === "-") {
            res = res - 3;
        } else {
            res = res / 3;
        }
        res1 = res1+"3";
        reselement.innerHTML=res1;
    }
);
fourelement.addEventListener("click", function() {
     
        if (element === "+") {
            res = res + 4;
        } else if (element === "*") {
            res = res * 4;
        } else if (element === "-") {
            res = res - 4;
        } else {
            res = res / 4;
        }
        res1 = res1+"4";
        reselement.innerHTML=res1;
    }
);
fiveelement.addEventListener("click", function() {
     
        if (element === "+") {
            res = res + 5;
        } else if (element === "*") {
            res = res * 5;
        } else if (element === "-") {
            res = res - 5;
        } else {
            res = res / 5;
        }
        res1 = res1+"5";
        reselement.innerHTML=res1;
    }
);
sixelement.addEventListener("click", function() {
     
        if (element === "+") {
            res = res + 6;
        } else if (element === "*") {
            res = res * 6;
        } else if (element === "-") {
            res = res - 6;
        } else {
            res = res / 6;
        }
        res1 = res1+"6";
        reselement.innerHTML=res1;
    }
);
sevenelement.addEventListener("click", function() {
    
        if (element === "+") {
            res = res + 7;
        } else if (element === "*") {
            res = res * 7;
        } else if (element === "-") {
            res = res - 7;
        } else {
            res = res / 7;
        }
        res1 = res1+"7";
        reselement.innerHTML=res1;
    }
);
eightelement.addEventListener("click", function() {
    
        if (element === "+") {
            res = res + 8;
        } else if (element === "*") {
            res = res * 8;
        } else if (element === "-") {
            res = res - 8;
        } else {
            res = res / 8;
        }
        res1 = res1+"8";
        reselement.innerHTML=res1;
    }
);
nineelement.addEventListener("click", function() {
    
        if (element === "+") {
            res = res + 9;
        } else if (element === "*") {
            res = res * 9;
        } else if (element === "-") {
            res = res - 9;
        } else {
            res = res / 9;
        }
        res1 = res1+"9";
        reselement.innerHTML=res1;
    }
);
zeroelement.addEventListener("click", function() {
   
        if (element === "+") {
            res = res ;
        } else if (element === "*") {
            res = 0;
        } else if (element === "-") {
            res = res ;
        } 
        res1 = res1+element+"1";
        reselement.innerHTML=res1;
    
});
moinelement.addEventListener("click", function() {
    element="-"
    res1 = res1+element;
    reselement.innerHTML=res1;
    
}

);
pluselement.addEventListener("click", function() {
    element="+";
    res1 = res1+element;
    reselement.innerHTML=res1;
}
);
sabstructelement.addEventListener("click", function() {
    element="/"
    res1 = res1+element;
    reselement.innerHTML=res1;}
);
multielement.addEventListener("click", function() {
    element="*"
    res1 = res1+element;
    reselement.innerHTML=res1;}
);

resetlement.addEventListener("click", function() {
    res=0
    res1 = "";
    element="+"

    reselement.innerHTML=res;}
);
egaleelement.addEventListener("click",function () {
    reselement.innerHTML = res
    res1=res;
    

    
})
**/ 
var res=0;
var res1=""
var res2=0
var element="+"
var oneelement = document.querySelector(".one");
var zeroelement = document.querySelector(".zero");
var twoelement = document.querySelector(".two");
var threeelement = document.querySelector(".three");
var fourelement = document.querySelector(".four");
var fiveelement = document.querySelector(".five");
var sixelement = document.querySelector(".six");
var sevenelement = document.querySelector(".seven");
var eightelement = document.querySelector(".eight");
var nineelement = document.querySelector(".nine");
var pluselement = document.querySelector(".plus");
var moinelement = document.querySelector(".moin")
var sabstructelement = document.querySelector(".substract");
var multielement = document.querySelector(".multi")
var egaleelement = document.querySelector(".egale");
var reselement= document.querySelector(".res");
var resetlement= document.querySelector(".reset")
oneelement.addEventListener("click", function() {
    
        
        res1 = res1+"1";
        res2 = res2+"1";
        reselement.innerHTML=res1;
        
    }

);
twoelement.addEventListener("click", function() {
     
        
        res1 = res1+"2";
        res2 = res2+"2";
        reselement.innerHTML=res1;
    }
);
threeelement.addEventListener("click", function() {
    
        
        res1 = res1+"3";
        res2 = res2+"3";
        reselement.innerHTML=res1;
    }
);
fourelement.addEventListener("click", function() {
     
        
        res1 = res1+"4";
        res2 = res2+"4";
        reselement.innerHTML=res1;
    }
);
fiveelement.addEventListener("click", function() {
     
        
        res1 = res1+"5";
        res2 = res2+"5";
        reselement.innerHTML=res1;
    }
);
sixelement.addEventListener("click", function() {
     
        
        res1 = res1+"6";
        res2 = res2+"6";
        reselement.innerHTML=res1;
    }
);
sevenelement.addEventListener("click", function() {
    
        
        res1 = res1+"7";
        res2 = res2+"7";
        reselement.innerHTML=res1;
    }
);
eightelement.addEventListener("click", function() {
    
        
        res1 = res1+"8";
        res2 = res2+"8";
        reselement.innerHTML=res1;
    }
);
nineelement.addEventListener("click", function() {
    
        
        res1 = res1+"9";
        res2 = res2+"9";
        reselement.innerHTML=res1;
    }
);
zeroelement.addEventListener("click", function() {
   
        if (element === "+") {
            res = res ;
        } else if (element === "*") {
            res = 0;
        } else if (element === "-") {
            res = res ;
        } 
        res1 = res1+"0";
        res2 = res2+"0";
        reselement.innerHTML=res1;
    
});
moinelement.addEventListener("click", function() {
    element="-"
    res2.Number()
    res=res+res2
    res2=""
    res1 = res1+element;
    
    reselement.innerHTML=res1;
    
}

);
pluselement.addEventListener("click", function() {
    element="+";
    res1 = res1+element;
    res2.Number()
    res=res+res2

    res2=""
    reselement.innerHTML=res1;
}
);
sabstructelement.addEventListener("click", function() {
    element="/"
    res2.Number()
    res1 = res1+element;
    res=res+res2
    res2=""
    reselement.innerHTML=res1;}
);
multielement.addEventListener("click", function() {
    element="*"
    res2.Number()
    res1 = res1+element;
    res=res+res2
    res2=""
    reselement.innerHTML=res1;}
);

resetlement.addEventListener("click", function() {
    res=0
    
    res1 = "";
    element="+"
    
    res2=0

    reselement.innerHTML=res;}
);
egaleelement.addEventListener("click",function () {
    reselement.innerHTML = res
    res1=res;
    

    
})

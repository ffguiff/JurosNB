    let calcularI=0;
    let calcularII=0;
    let calcularIII=0;
    let valor = document.getElementById("valor");
    let tempo = document.getElementById("tempo");
    let texto="";
    document.getElementById("fundo").style.visibility = "hidden";
    function voltar(){
        document.getElementById("fundo").style.visibility = "hidden";
    }

    function link(){
        window.open("https://github.com/ffguiff", '_blank')
    }
    function linkI(){
        window.open("https://www.linkedin.com/in/guilherme-ferreira-591689237",'_blank')
    }
    function calcular(){
    if (valor.value != "" && tempo.value != "" && valor.value*1>0 && tempo.value*1>0){ 
            calculoI=(valor.value*1)*0.0003652;
            calculoII = (valor.value*1)+calculoI;
            calculoIII= calculoII;
                for(i=1;i<tempo.value;i++){
                    calculoI=calculoIII*0.0003652;
                    calculoII = calculoIII+calculoI; 
                    calculoIII = calculoII;
                }
            let calculoIV= calculoIII - valor.value;
            console.log(calculoIV);
            texto ="Em "+tempo.value*1+" dias você terá lucrado: ";
            document.getElementById("fundo").style.visibility = "visible";
            document.querySelector("#text").innerHTML = texto;
            document.querySelector("#lucro").innerHTML = calculoIV.toFixed(2);
    }
    else{
        alert("Insira todas as informações");
    }
    }
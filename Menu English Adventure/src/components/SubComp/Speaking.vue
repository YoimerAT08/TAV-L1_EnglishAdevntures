<template>
    <div class="titulo">
        <div class="titulo-container">
            <h1 class="titulo-pattern">Aprendiendo Speaking</h1>
        </div>
    </div>
    <div class="container">
            <h2 class="bienvenido">
                let's start with Speaking!
            </h2>
            <div class="unidades">
                <a class="unit1"><span>Unit 1</span><div class="liquid"></div></a>
                <a class="unit2"><span>Unit 2</span><div class="liquid"></div></a>
                <a class="unit3"><span>Unit 3</span><div class="liquid"></div></a>
                <a class="unit4"><span>Unit 4</span><div class="liquid"></div></a>
            </div>
    </div>
    <div class="progreso">
           <div class="imagen"><img src="./fto.jpeg" class="imagenN"></div>
           <div class="text"><p><b>WHAT WE BELIEVE</b><br>The skill of speaking in the English language is crucial for several reasons. Firstly, English is the lingua franca of the modern world, facilitating communication and interaction in various domains such as business, travel, and academia. Proficiency in spoken English enables individuals to engage in international conversations, build relationships, and collaborate with people from diverse backgrounds. Secondly, effective verbal communication in English is often a requirement in professional settings.</p></div>
           <div class="retroceder">
                <button class="señal"></button>
            </div>
        </div>
    
</template> 


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fredoka+One');
template{
    box-sizing: content-box;
}
.titulo{
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    width: 1235px;
    height: 65px;
    left: 22px;
    top: 22px;
    background: #D9D9D9;
    border-radius: 20px;
    margin-left: 55px;
    margin-right: 100px;
    padding-bottom: 10px;
    box-sizing: border-box;
}
.titulo-container{
    width: 100%;
}
.titulo-container .titulo-pattern { 
    font-size: 370%;
    color: transparent;
    background-color: #DC143C;
    background-image: repeating-linear-gradient(45deg, transparent, transparent 25px, rgba(255,255,255,.5) 25px, rgba(255,255,255,.5) 50px);
    -webkit-background-clip: text;
    background-clip: text;   
    animation: color 50s linear infinite; 
    background-size: 200%;  
    -webkit-transform: translate3d(0,0,0);
    -webkit-backface-visibility: hidden;
    margin-left: 60px;
    margin-right: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    text-align: center;
}
@keyframes color {
    from { 
    background-position: 0% 50%;
}
to { 
    background-position: 100% 50%; 
  }
}
.container{
    border-radius: 20px;
    position: absolute;
    width: 980px;
    height: 150px;
    margin-top: 15px;
    margin-bottom:5px ;
    margin-left: 310px;
    margin-right: 50px;
    background-size: cover;
    background-color: #D9D9D9;
    padding-top:15px; 
    padding-right:80px; 
    padding-bottom:5px; 
    padding-left:20px;
    text-align: center;
}
.container h2{
    font-size: 40px;
    text-transform: uppercase;
    padding: 10px;
    margin: 5px;
}
.container .bienvenido{
    font-family: Rockwell,Courier Bold,Courier,Georgia,Times,Times New Roman,serif; 
    color: transparent;
    background-image: linear-gradient(to left, rgb(255, 0, 0), rgb(0, 255, 0), rgb(0, 0, 255), rgb(255, 255, 0), rgb(255, 0, 255), rgb(0, 255, 255), rgb(255, 255, 255), rgb(0, 0, 0));
    webkit-background-clip: text;
    background-clip: text;
     animation: color 10s linear infinite; 
     background-size: 500%;  
    -webkit-transform: translate3d(0,0,0);
    -webkit-backface-visibility: hidden;
    margin-top: 5px;
}

.unidades{
    text-align: center;
    display: flex;
    width: 900px;
    height: 65px;
    background: transparent;
    border-radius: 20px;
    margin-left: 20px;
    margin-right: 100px;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    position: relative;
    margin: 10px;
    padding: 10px;
    text-align: center;
    display: block;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    width: 287px;
    overflow: hidden;
    border-radius: 40px;
    cursor: pointer;
}
a span{
    position: relative;
    color: #fff;
    font-size: 27px;
    font-family: Rockwell,Courier Bold,Courier,Georgia,Times,Times New Roman,serif;
    letter-spacing: 8px;
    z-index: 1;
}
a .liquid{
    position: absolute;
    top: -80px;
    left: 0;
    width: 287px;
    height: 230px;
    background: #5346DE;
    box-shadow: inset 0 0 50px rgba(0,0,0,.5);
    transition: .5s;
}

a .liquid::after,
a .liquid::before{
    content: '';
    width: 160%;
    height: 240%;
    position: absolute;
    top: 0px;
    left: 120px;
    transform: translate(-50%, -75%);
    background: #000;
}
a .liquid::before{
    border-radius: 45%;
    background: rgba(20,20,20,1);
    animation: animate 5s linear infinite;
}
a .liquid::after{
    border-radius: 40%;
    background: rgba(20,20,20,.5);
    animation: animate 10s linear infinite;
}
a:hover .liquid{
    top: -139px;
}
@keyframes animate{
    0%{
        transform: translate(-50%,-75%) rotate(0deg);
    }
    100%{
        transform: translate(-50%,-75%) rotate(360deg);
    }
}
.progreso{
    border-radius: 20px;
    position: absolute;
    display:flex;
    align-items: center;
    top: 260px;
    width: 980px;
    height: 355px;
    margin-top: 5px;
    margin-bottom:5px ;
    margin-left: 310px;
    margin-right: 50px;
    background-size: cover;
    background-color: #D9D9D9;
    padding-top:10px; 
    padding-right:80px; 
    padding-bottom:10px; 
    padding-left:20px;
}
.progreso .imagen{
    position: relative;
    width: 400px;
    height: 280px;
    align-items: center;
    display: flex;
    border-radius: 20px;
    left: 10px;
}
.progreso .imagen .imagenN{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    padding: 5px;
}
.progreso .text{
    display: flex;
    position: relative;
    width: 720px;
    height: 280px;
    background-color: transparent;
    border-radius: 20px;
    padding: 10px;
    font-weight: 400;
    left: 40px;
}
.progreso .text p{
    text-align:justify;
    font-weight: 500;
}
.retroceder{
    position:relative;
    display:flex;
    width: 30px;
    height: 30px;
    left: 80px;
    top: 162px;
    margin: 5px;
    padding: 10px;
    align-items: flex-end;
    justify-content: flex-end;
}
.señal{
    border-radius: 50px;
    position:absolute;
    align-items: center;
    display:flex;
    width: 50px;
    height: 50px;
    background-color: transparent;
    background-image: url(./arrow-left-solid.svg);
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.1s;
}
.señal:hover{
    transform: scale(0.8);
    background-color: #f54c4c;
}

.señal:active{
    background-color: #3498db;
}
</style>
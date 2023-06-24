<template>
    <div class="titulo">
        <div class="titulo-container">
            <h1 class="titulo-pattern">English Adventures</h1>
        </div>
    </div>
    <div class="container">
            <h2 class="bienvenido">
                Welcome
            </h2>  
    </div>
    <div class="progreso">
            <div class="porcentaje">
                <div class="Ap1">
                    <div class="P1">
                        <h5>Listening</h5>
                    </div>
                    <div class="P1A">
                        <input type="range">
                    </div>
                </div>
                <div class="Ap2">
                    <div class="P1">
                        <h5>Speaking</h5>
                    </div>
                    <div class="P1A">
                        <input type="range">
                    </div>
                </div>
                <div class="Ap3">
                    <div class="P1">
                        <h5>Reading</h5>
                    </div>
                    <div class="P1A">
                        <input type="range">
                    </div>
                </div>
                <div class="Ap4">
                    <div class="P1">
                        <h5>Writing</h5>
                    </div>
                    <div class="P1A">
                        <input type="range">
                    </div>
                </div>
            </div>
            <div class="imagen">
                <h5>Progreso</h5>
                <div class="trofeo"></div>
            </div>
            <div class="retroceder">
                <button class="señal"></button>
            </div>
    </div>
    
</template> 
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fredoka+One');
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
template{
    box-sizing: content-box;
}
.container{
    border-radius: 20px;
    position: absolute;
    width: 880px;
    height: 50px;
    margin-top: 15px;
    margin-bottom:5px ;
    margin-left: 310px;
    margin-right: 50px;
    background-size: cover;
    background-color: #D9D9D9;
    padding-top:15px; 
    padding-right:80px; 
    padding-bottom:30px; 
    padding-left:20px;
    text-align: center;
}
.container h2{
    font-size: 4em;
    text-transform: uppercase;
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
    margin-top: 20px;
    padding: 5px;
}
.progreso{
    border-radius: 20px;
    position: absolute;
    display: inline-block;
    top: 200px;
    width: 880px;
    height: 375px;
    margin-top: 10px;
    margin-bottom:10px ;
    margin-left: 310px;
    margin-right: 50px;
    background-size: cover;
    background-color: #D9D9D9;
    padding-top:10px; 
    padding-right:80px; 
    padding-bottom:25px; 
    padding-left:20px
}
.progreso .imagen{
    border-radius: 20px;
    position: absolute;
    display:inline-block;
    width: 400px;
    height: 320px;
    margin-top: 15px;
    margin-bottom:10px ;
    margin-left: 370px;
    margin-right: 50px;
    background-color: #dacbcb;
    background-size: cover;
    padding-top:10px; 
    padding-right:80px; 
    padding-bottom:25px; 
    padding-left:20px ;
    transition: background-color 0.5s; /* Duración de la transición */
}
.progreso .imagen:hover{
    background-color: #f80101; /* Color de fondo al pasar el cursor */
    animation: mueveme 3s ease-in-out ; /* Modificar valores de la animación como se requiera */
}
@keyframes mueveme {
  0% {
    transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1); /* Matriz que representa una transformación 3D predeterminada */
  }
  100% {
    transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,5,5,5,1); /* Matriz con valores personalizados para la transformación 3D */
  }
}
.progreso .imagen h5{
    font-family: Rockwell,Courier Bold,Courier,Georgia,Times,Times New Roman,serif;
    font-weight: 700;
    font-size: 200%;
    color: black;
    position: relative;
    padding: 5px;
    margin-top: -15px;
    margin-bottom:20px ;
    margin-left: 150px;
    margin-right: 10px;
    width: 200px;
    height: 10px;

}
.progreso .imagen .trofeo{
    border-radius: 20px;
    position: relative;
    display:inline-block;
    width: 200px;
    height: 310px;
    margin: 5px;
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    padding-right:53%; 
    padding-left:40px;
    background-image: url(./imagen1.png);
}
.progreso .porcentaje{
    border-radius: 20px;
    position: absolute;
    display:inline-block;
    width: 190px;
    height: 320px;
    margin-top: 10px;
    margin-bottom:10px ;
    margin-left: 10px;
    margin-right: 50px;
    background-size: cover;
    padding-top:10px; 
    padding-right:80px; 
    padding-bottom:30px; 
    padding-left:20px 
}
.progreso .porcentaje .Ap1{
    display: flex;
    border-radius: 20px;
    background-color:white;
    margin-top: 10px;
    margin-bottom:10px ;
    margin-left: 0px;
    margin-right: 60px;
    padding: 10px 20px;
    height: 50px;
    width: 210px;
    transition: background-color 1s;
}
.progreso .porcentaje .Ap1:hover{
    background-color: #3498db; /* Color de fondo al pasar el cursor */
    transform: scale(0.9);
}
.progreso .porcentaje .Ap2{
    display: flex;
    border-radius: 20px;
    background-color: white;
    margin-top: 10px;
    margin-bottom:10px ;
    margin-left: 0px;
    margin-right: 60px;
    padding: 10px 20px;
    height: 50px;
    width: 210px;
    transition: background-color 1s;
}
.progreso .porcentaje .Ap2:hover{
    background-color: #3498db; /* Color de fondo al pasar el cursor */
    transform: scale(0.9);
}
.progreso .porcentaje .Ap3{
    display: flex;
    border-radius: 20px;
    background-color: white;
    margin-top: 10px;
    margin-bottom:10px ;
    margin-left: 0px;
    margin-right: 60px;
    padding: 10px 20px;
    height: 50px;
    width: 210px;
    transition: background-color 1s;
}
.progreso .porcentaje .Ap3:hover{
    background-color: #3498db; /* Color de fondo al pasar el cursor */
    transform: scale(0.9);
}
.progreso .porcentaje .Ap4{
    display: flex;
    border-radius: 20px;
    background-color: white;
    margin-top: 10px;
    margin-bottom:10px ;
    margin-left: 0px;
    margin-right: 60px;
    padding: 10px 20px;
    height: 50px;
    width: 210px;
    transition: background-color 1s;
}
.progreso .porcentaje .Ap4:hover{
    background-color: #3498db; /* Color de fondo al pasar el cursor */
    transform: scale(0.9);
}
.progreso .porcentaje h5{
    font-family: Rockwell,Courier Bold,Courier,Georgia,Times,Times New Roman,serif;
    position: relative;
    padding: 5px;
    margin: 4px -10px;
    height: 10px;
    width: 60px;
    color: black;
    font-size: 90%;
    font-weight:900;
    
}
.progreso .porcentaje input{
    position: relative;
    padding: 5px 20px;
    margin: 10px 30px;
    height: 20px;
    width: 100px;
    cursor:grab;
}
.retroceder{
    position:relative;
    display:flex;
    width: 30px;
    height: 30px;
    left: 900px;
    top: 345px;
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
<template>
    <div class="titulo">
        <div class="titulo-container">
            <h1 class="titulo-pattern">English Adventures</h1>
        </div>
    </div>
    <div class="container">
            <h2 class="bienvenido">
                Help
            </h2>  
    </div>
    <div class="progreso">
        <div class="comuni">
            <h5>Comunicate Con Tu Teacher Aquí</h5>
            <div class="imag"></div>
        </div>
            <div class="imagen">
                <div class="trofeo">
                <form>
                    <div class="info">
                        <label for="nombre" class="nombre">To:</label>
                        <input type="text" id="nombre" name="nombre" required><br>
                    
                        <label for="email" class="email">subject:</label>
                        <input type="email" id="email" name="email" required><br>
                    </div>
                    
                   <hr noshade="noshade" color="blue">

                    <textarea id="mensaje" name="mensaje" required></textarea><br>
                    
                    <div class="enviado">
                        <input type="submit" value="Send" class="Send">
                        <div class="Lts"></div>
                        <div class="Clic"></div>
                        <div class="Emt"></div>
                        <div class="Enl"></div>
                        <div class="Img"></div>
                        <div class="Basr"></div>
                        <div class="Opc"></div>
                    </div>
                </form>
                </div>
            </div>
            <div class="retroceder">
                <button class="señal"></button>
            </div>
    </div>
    
</template> 
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fredoka+One');
hr{
    width:600px
}
.send{
    background-color: #3498db;
}
.nombre{
padding-right: 10px;
}
.email{
padding-right: 25px;
}
input{
    width: 300px;
    background-color: transparent;
}
.info{
    width: 100%;
}
#mensaje{
    background-color: transparent;
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
template{
    box-sizing: content-box;
}
.container{
    border-radius: 20px;
    position: absolute;
    width: 880px;
    height: 40px;
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
    margin-top: 10px;
    padding: 5px;
}
.progreso{
    border-radius: 20px;
    position: absolute;
    display: inline-block;
    top: 190px;
    width: 880px;
    height: 385px;
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
    display:flex;
    align-items: center;
    justify-content: center;
    width: 650px;
    height: 320px;
    margin-top: 40px;
    margin-bottom:10px ;
    margin-left: 10px;
    margin-right: 10px;
    background-color: white;
    background-size: cover;
    padding-top:20px; 
    padding-right:20px; 
    padding-bottom:10px; 
    padding-left:20px ;
    left: 110px;
}

.progreso .comuni{
    display: flex;
    position: absolute;
    width: 800px;
    height: 10px;
    padding: 5px;
    margin: 5px;
}
.progreso .comuni h5{
    font-family: Rockwell,Courier Bold,Courier,Georgia,Times,Times New Roman,serif;
    font-weight: 700;
    font-size: 200%;
    color: black;
    position: relative;
    margin-top: -15px;
    margin-bottom:20px ;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    width: 700px;
    height: 10px;

}
.progreso .comuni .imag{
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 80px;
    position: relative;
    background-image: url(./arrow-down-solid.svg);
    background-repeat: no-repeat;
}
.progreso .imagen .trofeo{
    border-radius: 20px;
    position: relative;
    display:inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-position: center;
    padding: 10px;
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
.retroceder{
    position:relative;
    display:flex;
    width: 30px;
    height: 30px;
    left: 900px;
    top: 355px;
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
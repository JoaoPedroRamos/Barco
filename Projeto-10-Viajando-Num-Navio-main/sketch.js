//o código veio pronto,então vi ele e coloquei o que entendi do código

//criando variaveis
var sea,ship;
var seaImg,shipImg;

function preload()
//colocando imagens
{
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
}

function setup()
{
  //criando a tela e pintando o fundo
  createCanvas(400,400);
  background("blue");
  
  //criando sprite , adicionando animação, colocando velocidade e arrumando o tamanho
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  //criando sprite , adicionando animação, colocando velocidade e arrumando o tamanho
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
}

function draw()
{
//colocando velocidade , o background(0) camadas
  background(0);
  sea.velocityX = -3;

//se o sea.x for menor que 0 = sea.x o chão terá uma rolagem infinita
  if(sea.x < 0)
  {
    sea.x = sea.width/8;
  }
   
  //desenhar sprites
  drawSprites();
}

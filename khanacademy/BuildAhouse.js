//This is a project in processing js which builds a house and scenery.


noStroke();
//variable declaration
var x = 56 , y = 182 , length = 137 ;



//coloring the background
background(191, 210, 255);
fill(166, 0, 30);
rect(0,300,400,100);



//making the roof
fill(255, 0, 0);
rect( x + length / 2 , y - length / 2.5 , 1.5*length , length / 2.5 );
fill(149, 34, 181);
ellipse(x+length*1.9,y-length/3.6,length/4.0,length/4.0);//roof drawing
stroke(0, 0, 0);
for( var k=10 ; k < length ; k +=10 )//roof lines
{
    line(  x + length / 2 + k ,y - length / 2.5 , x + length + k , y );
}
noStroke();



//making the door part
fill(166, 118, 118);
rect( x , y , length , length );
fill(135, 13, 13);
rect( x+length/4 , y+length/3.1 , length/2.5 , length/1.5 );//door
stroke(0, 0, 0);
strokeWeight(7);
point(x+length/1.7,y+length/1.5);//doorknob


noStroke();
//above door part
fill(255,255,255);
triangle( x , y , x + length / 2 , y - length / 2.5 , x + length , y );
fill(0, 255, 157);
ellipse(x+length/2,y-length/6.3,length/4.0,length/4.0);




//below roof
fill(255,255,0);
rect(x + length , y , length , length );
//windows
fill(238, 47, 252);
stroke(0, 0, 0);
strokeWeight(1);
rect( x+length*1.3 , y+length/3 , length/2.5 , length/2.5 );
line(x+length*1.5,y+length*0.35,x+length*1.5,y+length/1.37);
line(x+length*1.69,y+length*0.53,x+length/0.76,y+length*0.53);

//sky
fill(255, 255, 0);
ellipse(x,y-length/1.1,length/1.7,length/1.8);//sun

//birds
noFill();
arc(x+length/2,y-length,length,length,335,360);
arc(x+length*1.5,y-length,length,length,180,207);

arc(x+length*1.5,y-length,length,length,335,360);
arc(x+length*2.5,y-length,length,length,180,207);

arc(x+length,y-length/1.5,length,length,335,360);
arc(x+length*2,y-length/1.5,length,length,180,207);


//grass
noFill();
for(var l = 0 ; l < 50 ; l += 20 )
{
    for(var k=-30;k<360;k+=30)
    {
    arc(x-length/2+k,y+length*1.1+l,length,length,335,357);
    arc(x+length/2+k,y+length*1.1+l,length,length,180,206);
    }

}
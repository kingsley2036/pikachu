const string = `
<style>

#html{
 background: #ffe600;
 
}

.pikachu {
    position: relative;
      
}

.nose {
    border: 10px solid black;
    width: 0px;
    height: 0px;
    position: relative;
    top: 145px;
    left: 50%;
    margin-left: -10px;
    border-color: black transparent transparent;
    border-bottom: none;
    z-index: 10;
}
@keyframes wave{
    0%{
        transform: rotate(0);
    }
    33%{
        transform: rotate(15deg); 
    }
    66%{
        transform: rotate(-15deg); 
    }
    100%{
        transform: rotate(0); 
    }
}
.nose:hover{
animation: wave 300ms infinite linear;
transform-origin: center bottom;
}

.yuan {
    border: 1px solid black;
    width: 20px;
    height: 5px;
    position: absolute;
    margin-left: -10px;
    top: -15px;
    border-radius: 10px 10px 0 0;
    background: black;

}

.eye {
    width: 64px;
    height: 64px;
    /* border: 1px solid red; */
    position: absolute;
    left: 50%;
    margin-left: -32px;
    top: 100px;
    border-radius: 50%;
    background: #2e2e2e;
}

.eye::after {
    content: "";
    display: block;
    width: 31px;
    height: 31px;
    border: 1px solid #000;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 10px;
    background: #fff;

}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    position: absolute;
    width: 150px;
    height: 150px;
    left: 50%;
    margin-left: -75px;
    top: 170px;
}

.mouth .up {
    position: relative;
   
    top: -20px;
    z-index: 1;
}

.mouth .up .lip {
    border: 2px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    position: relative;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
}

.mouth .up .lip.left::before {

    content: "";
    display: block;
    height: 30px;
    width: 5px;
    right: -3px;
    background: #ffe600;
    bottom: 0;
    position: absolute;
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
   
    top: -29px;
    transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip.right::before {

    content: "";
    display: block;
    height: 30px;
    width: 5px;
    left: -3px;
    background: #ffe600;
    bottom: 0;
    position: absolute;
}

.mouth .down {
    /* border: 1px solid green; */
    height: 200px;
    width: 100%;
    position: absolute;
    top: 10px;
    overflow: hidden;

}

.mouth .down .yuan1 {
    border: 1px solid red;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 50px;
    border-radius: 75PX/300PX;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
    content: "";
  
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -190px;
    margin-left: -100px;
    left: 50%;
    background: #ff485f;
    border-radius:100px;
}
.face{
     border: 3px solid red;
     width: 88px;
     height: 88px;
     position: absolute;
     left: 50%;
     margin-left: -44px; 
     top: 230px;
     z-index: 3; 
     border-radius: 50%;  
     background: #ff0000;
}
.face.left{
    transform: translateX(-170px);
}
.face.right{
    transform: translateX(170px);
}
.face img{
    height: 100px;
    width: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
   
}

.face.left img{
    transform: rotatey(180deg);
    left:-70%;
}
</style>
`;
export default string
// // part-9 驗證碼
// var cxt = mycanvas.getContext('2d');//canvas getContext 渲染環境
// var validate = "";
// var baseColor = ["#0000ff", "#CE0000", "#7E3D76", "#46A3FF"];//底色
// var sColor = ["#B22222", "#F9F900", "#82D900", "#FFAF60"];   //干擾點顏色
// var fColor = ["#FFA07A", "#00BB00", "#EAC100", "#F75000"];   //文字顏色
// var indexColor = ""; //顏色組序號

// /*生成隨機顏色組合序號*/
// function randColor() {
//     indexColor = "";
//     indexColor = Math.floor(Math.random() * baseColor.length); //亂數取得 0~顏色陣列長度
//     return indexColor;
// }

// /*生成6位隨機數*/
// function rand() {
//     validate = "";
//     // 大小寫英文 數字 排除 I l o O 0  ,並重複數字 增加出現機率
//     var str = "123456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789";
//     var arr = str.split("");
//     var ranNum;
//     for (var i = 0; i < 6; i++) {
//         ranNum = Math.floor(Math.random() * 66);   //隨機數在[0,65]之間
//         validate += arr[ranNum];
//     }
//     //alert("rand() "+validate);
//     //alert("rand() "+typeof(validate));
//     return validate;
// }

// /*干擾線的隨機x坐標值*/
// function lineX() {
//     var ranLineX = Math.floor(Math.random() * 150);
//     return ranLineX;
// }

// /*干擾線的隨機y坐標值*/
// function lineY() {
//     var ranLineY = Math.floor(Math.random() * 40);
//     return ranLineY;
// }

// /*更換內容*/
// function clickChange() {
//     var i = randColor(); //執行randColor()取得顏色組序號
//     //alert(i);
//     cxt.beginPath();
//     cxt.fillStyle = baseColor[i];//底色
//     cxt.fillRect(0, 0, 150, 40);//(x,y,width,height)

//     /*生成干擾點 40*/
//     for (var j = 0; j < 40; j++) {

//         //產生一個新路徑，產生後再使用繪圖指令來設定路徑 
//         //若省略beginPath，則每點擊一次驗證碼會累積干擾線的條數
//         cxt.beginPath();
//         cxt.fillStyle = sColor[i];//顏色
//         var arcSize = (Math.floor(Math.random() * (50 - 5 + 1)) + 5) / 10; //亂數 取得介於0.5~5之間的值
//         cxt.arc(lineX(), lineY(), arcSize, 0, 2 * Math.PI);  //arc()產生一個圓形  context.arc(x,y,r,sAngle,eAngle,counterclockwise);
//         cxt.fill();

//     }
//     cxt.fillStyle = fColor[i];//隨機文字顏色
//     cxt.font = 'bold 25px Verdana';
//     cxt.fillText(rand(), 10, 30);   //把rand()生成的隨機數文本填充到canvas中      
// }

// /*點擊驗證碼更換*/
// mycanvas.onclick = function (e) {
//     e.preventDefault();   //阻止滑鼠點擊發生預設的行為
//     clickChange();
// }

// /*輸入驗證碼與核對*/
// var myform = document.getElementById('myform');
// myform.addEventListener("submit", function (e) {
//     var vad = myform.vad.value;
//     //alert("myform "+vad.toUpperCase());
//     //alert("myform "+validate.toUpperCase());
//     //將字串利用toUpperCase()將小寫英文轉成大寫英文 進行比較
//     if (vad.toUpperCase() === validate.toUpperCase()) {
//         alert("通過");
//         myform.vad.value = "";
//         clickChange();
//     }
//     else {
//         alert("請確認")
//         myform.vad.value = "請重新輸入驗證碼";
//     }
//     e.preventDefault();

// });

// /*輸入文字框清空*/ //改用placeholder設定預設內容
// /*var myvad=document.getElementById('myvad');
// myvad.addEventListener("focus",function(e){
//     myform.vad.value="";
// });*/

// clickChange();

!(function(window, document) {
    var size = 5;//Set the length of the verification code
    function GVerify(options) {//Create a graphic verification code object and receive the options object as a parameter
    this.options = {//Default options parameter value
    id: "", //Container Id
    canvasId: "verifyCanvas", //canvas ID
    width: "100", //default canvas width
    height: "30", //default canvas height
    type: "blend", //default type of graphic verification code blend: mixed type of numbers and letters, number: pure numbers, letter: pure letters
    code: "",
    }
    if(Object.prototype.toString.call(options) == "[object Object]"){//Determine the type of incoming parameters
    for(var i in options) {//Modify the default parameter values ​​according to the parameters passed in
    this.options[i] = options[i];
    }
    }else{
    this.options.id = options;
    }
    this.options.numArr = "0,1,2,3,4,5,6,7,8,9".split(",");
    this.options.letterArr = getAllLetter();
    this._init();
    this.refresh();
    }
    GVerify.prototype = {
    /**version number**/
    version: '1.0.0',
    /**Initialization method**/
    _init: function() {
    var con = document.getElementById(this.options.id);
    var canvas = document.createElement("canvas");
    this.options.width = con.offsetWidth> 0? con.offsetWidth: "100";
    this.options.height = con.offsetHeight> 0? con.offsetHeight: "30";
    canvas.id = this.options.canvasId;
    canvas.width = this.options.width;
    canvas.height = this.options.height;
    canvas.style.cursor = "pointer";
    canvas.innerHTML = "Your browser version does not support canvas";
    con.appendChild(canvas);
    var parent = this;
    canvas.onclick = function(){
    parent.refresh();
    }
    },
    /**Generate verification code**/
    refresh: function() {
    this.options.code = "";
    var canvas = document.getElementById(this.options.canvasId);
    if(canvas.getContext) {
    var ctx = canvas.getContext('2d');
    }else{
    return;
    }
    ctx.textBaseline = "middle";
    ctx.fillStyle = randomColor(180, 240);
    ctx.fillRect(0, 0, this.options.width, this.options.height);
    if(this.options.type == "blend") {//Determine the verification code type
    var txtArr = this.options.numArr.concat(this.options.letterArr);
    } else if(this.options.type == "number") {
    var txtArr = this.options.numArr;
    } else {
    var txtArr = this.options.letterArr;
    }
    for(var i = 1; i <=size; i++) {
    var txt = txtArr[randomNum(0, txtArr.length)];
    this.options.code += txt;
    ctx.font = randomNum(this.options.height/2, this.options.height) +'px SimHei'; // randomly generate font size
    ctx.fillStyle = randomColor(50, 160); //Generate font color randomly
    ctx.shadowOffsetX = randomNum(-3, 3);
    ctx.shadowOffsetY = randomNum(-3, 3);
    ctx.shadowBlur = randomNum(-3, 3);
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    var x = this.options.width / (size+1) * i;
    var y = this.options.height / 2;
    var deg = randomNum(-30, 30);
    /**Set the rotation angle and coordinate origin**/
    ctx.translate(x, y);
    ctx.rotate(deg * Math.PI / 180);
    ctx.fillText(txt, 0, 0);
    /**Restore rotation angle and coordinate origin**/
    ctx.rotate(-deg * Math.PI / 180);
    ctx.translate(-x, -y);
    }
    /**Draw interference lines**/
    for(var i = 0; i <4; i++) {
    ctx.strokeStyle = randomColor(40, 180);
    ctx.beginPath();
    ctx.moveTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
    ctx.lineTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
    ctx.stroke();
    }
    /**Draw interference points**/
    for(var i = 0; i <this.options.width/4; i++) {
    ctx.fillStyle = randomColor(0, 255);
    ctx.beginPath();
    ctx.arc(randomNum(0, this.options.width), randomNum(0, this.options.height), 1, 0, 2 * Math.PI);
    ctx.fill();
    }
    },
    /**Verification code**/
    validate: function(code){
    var code = code.toLowerCase();
    var v_code = this.options.code.toLowerCase();
    if(code == v_code){
    return true;
    }else{
    this.refresh();
    return false;
    }
    }
    }
    
    
    /**Generate an array of letters**/
    function getAllLetter() {
    var letterStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w, x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V, W,X,Y,Z";
    return letterStr.split(",");
    }
    /**Generate a random number**/
    function randomNum(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
    }
    /**Generate a random color**/
    function randomColor(min, max) {
    var r = randomNum(min, max);
    var g = randomNum(min, max);
    var b = randomNum(min, max);
    return "rgb(" + r + "," + g + "," + b + ")";
    }
    window.GVerify = GVerify;
    })(window, document);
    
    var verifyCode = new GVerify("v_container");
    document.getElementById("my_button").onclick = function(){
    var res = verifyCode.validate(document.getElementById("code_input").value);
    if(res){
    alert("驗證碼正確");
    }else{
    alert("驗證碼錯誤");
    }
    }
    
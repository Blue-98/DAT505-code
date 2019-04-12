var renderer, scene, camera;
var cubes = [];
var rotX = [];
var rotY = [];
var scaleX = [];
var scaleY = [];
var scaleZ = [];
var scaleCube = [];
var rotValX = [];
var rotValY = [];

//var rotValue = 0;

function init() {

  scene = new THREE.Scene();
//  console.log( "Init Function Starts");

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 30, 30);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  //controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x <= 10; x += 10) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -10; y <= 10; y += 10) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 1);
      //The color of the material is assigned a random color

      //var boxMaterial = new THREE.MeshLambertMaterial( {color:Math.random() * 0xFFFFFF});

var texture1 = new THREE.TextureLoader().load( "textures/transition3.png " );


var  boxMaterial = new THREE.MeshBasicMaterial( {map: texture1});

    //  if (x >=5 && y >=5){
    //    boxMaterial = new THREE.MeshLambertMaterial( {color: Math.random() * 0xF67280});
    //  } else if (x <=-5 && y >=-5){
    //    boxMaterial = new THREE.MeshLambertMaterial( {color: Math.random() * 0xFF0078});
    //  } else {
    //    boxMaterial = new THREE.MeshLambertMaterial( {color: Math.random() * 0xF65280});
    //  }
if(x==-5 && y==-5){
 boxMaterial = new THREE.MeshBasicMaterial( {map: texture1} );
}




      var box = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;

      box.position.x = x;
      box.position.z = y;
      box.scale.x = 0.5;
      box.scale.y = 0.5;
      box.scale.z = 0.5;

      box.rotation.x = Math.random() * 2 * Math.PI;
      box.rotation.y = Math.random() * 2 * Math.PI;
      box.rotation.z = Math.random() * 2 * Math.PI;

            var rotValX =  (Math.random() * 0.05) - 0.025;
            var rotValX =  (Math.random() * 0.05) - 0.025;
            var scValX =  Math.random() ;
            var scValY =  Math.random() ;
            var scValZ =  Math.random() ;

            rotX.push(rotValX);
            rotY.push(rotValY);
            scaleX.push(scValX);
            scaleY.push(scValY);
            scaleZ.push(scValZ);
scaleCube.push(-3);

      scene.add(box);
      cubes.push(box);

    }
  }
console.log(cubes);
  document.body.appendChild(renderer.domElement);
}

var scaleCubes = [-5];

function drawFrame(){

  requestAnimationFrame(drawFrame);

//scaleCube += 0.02;
//if (scaleCube > 3) scaleCube =-5

cubes.forEach(function(c,i){
    c.rotation.x += rotX[i];
    c.rotation.y += rotY[i];
    scaleCube[i] += 0.02
//    scaleCube[i] += scaleX[i];
    if (scaleCube[i] > 9) scaleCube[i] =-3;
    c.scale.z = scaleCube[i];

});
 //cubes[0] .rotation.x += 0.2;//  rot += 0.01;
 //cubes[0] .scale.x += 2;
 //cubes[0] .material = new THREE.MeshLambertMaterial( {color: 0xFF00FF});

 //console.log(scaleCube)

  //forEach takes all the array entries and passes the c as the object, and i as the index
//  cubes.forEach(function(c, i) {
  //  c.rotation.z = rot; //Rotate the object that is referenced in c
  //};

  renderer.render(scene, camera);
}

init();
drawFrame();

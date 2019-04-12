// MatCap-style image rendered on a sphere
// modify sphere UVs instead of using a ShaderMaterial

var camera, scene, renderer, mesh;
var image;
var mouseX = 0, mouseY = 0;
var container;

var eyesNum = 5;
var eyes = [];
var xPos = [];
var yPos = [];
var xPosMap = [];
var yPosMap = [];


var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 0, 50, 150 );
  scene.add( camera ); // since light is child of camera

	scene.add( new THREE.AmbientLight( 0xffffff, 0.3 ) );
	var light = new THREE.PointLight( 0xffffff, 1 );
	camera.add( light );



for(a=0;a<7;a++){
	var material = new THREE.MeshPhongMaterial( {
		color: 0xffffff,
		specular: 0x050505,
		shininess: 50,
		map: THREE.ImageUtils.loadTexture('images/eye.png'),
	});

	var geometry = new THREE.SphereGeometry( 30, 32, 16 );

  // modify UVs to accommodate MatCap texture
	var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
	for ( i = 0; i < faceVertexUvs.length; i ++ ) {
		var uvs = faceVertexUvs[ i ];
		var face = geometry.faces[ i ];
		for ( var j = 0; j < 3; j ++ ) {
			uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
			uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
		}
	}
	var scale = (Math.random() * -2) +1;
	 mesh = new THREE.Mesh( geometry, material );
	var  mesh = new THREE.Mesh( geometry, material );

	mesh.position.x = (Math.random() * -200)+100;
	mesh.position.y = (Math.random() * -100)+50;

	mesh.scale.x = scale;
	mesh.scale.y = scale;
	mesh.scale.z = scale;


//		xPosMap[i] = map_range(xPos[i], -50, 50, 0, window.innerWidth);
//		yPosMap[i] = map_range(yPos[i], -50, 50, 0, window.innerHeight);

		//console.log(xPosMap[1]);

	//	mesh.position.x = xPos[i];
//		mesh.position.y = yPos[i];

	//	var randSize = Math.random() * 0.8;
	//	mesh.scale.x = randSize;
	//	mesh.scale.y = randSize;
	//	mesh.scale.z = randSize;

		scene.add( mesh );
		eyes.push( mesh );
	}

	//console.log(mesh);

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	console.log(window.innerHeight)
	eyes.forEach(function(c, i) {

	eyes[i].rotation.x = mouseY/window.innerHeight*2;
	eyes[i].rotation.y = mouseX/window.innerWidth*2;});


	renderer.render( scene, camera );
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
	//mouseX = event.clientX - windowHalfX;
  mouseX = event.clientX;
  mouseY = event.clientY;
}

//function map_range(value, low1, high1, low2, high2) {
	//return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
//}

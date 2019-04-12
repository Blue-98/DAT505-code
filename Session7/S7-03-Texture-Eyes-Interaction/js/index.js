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
	camera.position.set( 0, 0, 150 );
  scene.add( camera ); // since light is child of camera

	scene.add( new THREE.AmbientLight( 0xffffff, 0.2 ) );
	var light = new THREE.PointLight( 0xffffff, 1 );
	camera.add( light );

	var geometry = new THREE.SphereGeometry( 30, 32, 16 );

	var material = new THREE.MeshPhongMaterial( {
		color: 0xffffff,
		specular: 0x050505,
		shininess: 50,
		map: THREE.ImageUtils.loadTexture('images/eye.png'),
	});


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

	for (var i = 0; i < eyesNum; i++) {
		mesh = new THREE.Mesh( geometry, material );

		xPos[i] = Math.random() * 100 - 50;
		yPos[i] = Math.random() * 100 - 50;

		xPos [0] = 0;
		yPos [0] = 0;

		xPos [1] = -50;
		yPos [1] = -50;

		xPos [2] = 50;
		yPos [2] = -50;

		xPos [3] = -50;
		yPos [3] = 50;

		xPos [4] = 50;
		yPos [4] = 50;

		xPosMap[i] = map_range(xPos[i], -50, 50, 0, window.innerWidth);
		yPosMap[i] = map_range(yPos[i], -50, 50, 0, window.innerHeight);

		//console.log(xPosMap[1]);

		mesh.position.x = xPos[i];
		mesh.position.y = yPos[i];

		var randSize = Math.random() * 0.8;
		mesh.scale.x = r

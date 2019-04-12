//Global variables
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.BoxGeometry(50, 200, 100);
  geometry2 = new THREE.BoxGeometry(50, 300, 100);
  material = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
material2 = new THREE.MeshBasicMaterial( { color: "#FFFF00" } );
  mesh = new THREE.Mesh( geometry, material );
    mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh.position.z = -1000;
  mesh2.position.z = -1000;


  // Add mesh to scene
  scene.add( mesh );
  scene.add( mesh2);
}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh.rotation.x += 0.01; //Continuously rotate the mesh
  mesh.rotation.y += 0.01;
  mesh2.rotation.x += 0.03; //Continuously rotate the mesh
  mesh2.rotation.y += 0.03;

  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();

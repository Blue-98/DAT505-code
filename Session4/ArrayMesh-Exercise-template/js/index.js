var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 65, 65);
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
  for (var x = -10; x < 10; x += 5) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -10; y < 10; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 6, 3);
      //The color of the material is assigned a random color

      var boxMaterial;
      if (x >= 5 && y >= 5 ){
        boxMaterial = new THREE.MeshLambertMaterial( {color: Math.random() * 0xFF00FF} );
      }else if ( x <= -5 && y >= 5 ){
        boxMaterial = new THREE.MeshLambertMaterial( {color: Math.random() * 0x1099FF} );
      } else {
        boxMaterial = new THREE.MeshLambertMaterial( {color: Math.random() * 0xFFFF00} );
      }

      var box = new THREE.Mesh(boxGeometry,boxMaterial);
      //mesh.castShadow = true;

      box.position.x = x;
      box.position.z = y;
      box.scale.y = 9;

      box.rotation.x = Math.random() * 2 * Math.PI;
      box.rotation.y = Math.random() * 2 * Math.PI;
      box.rotation.z = Math.random() * 2 * Math.PI;

      var rotValX =  (Math.random() * 0.5) - 0.25;
      var rotValX =  (Math.random() * 0.5) - 0.25;
      var scValX =  Math.random() * 9;
      var scValY =  Math.random() * 9;
      var scValZ =  Math.random() * 9;

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

  cubes.forEach(function(c, i) {
      c.rotation.x += rotX[i]; //Rotate the object that is referenced in cubes
      c.rotation.y += rotY[i];
      c.scale.x += rotY[i];
      scaleCube[i] += scaleX[i];
      if (scaleCube[i] > 3) scaleCube[i] = -3;
  });

  //console.log(scaleCube)

  renderer.render(scene, camera);
}

init();
drawFrame();

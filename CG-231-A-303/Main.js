var size = 30;
var arrowSize = 10;
var divisions = 100;
var origin = new THREE.Vector3(0, 0, 0);
var x = new THREE.Vector3(1, 0, 0);
var y = new THREE.Vector3(0, 1, 0);
var z = new THREE.Vector3(0, 0, 1);
var color2 = new THREE.Color(0x333333);
var colorR = new THREE.Color(0xAA0000);
var colorG = new THREE.Color(0x00AA00);
var colorB = new THREE.Color(0x0000AA);

// Configuración de la escena y el renderizador
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

function createIcosahedron() {
  const goldenRatio = (1 + Math.sqrt(5)) / 2;

  const vertices = [
    [-1, goldenRatio, 0], [1, goldenRatio, 0], [-1, -goldenRatio, 0], [1, -goldenRatio, 0],
    [0, -1, goldenRatio], [0, 1, goldenRatio], [0, -1, -goldenRatio], [0, 1, -goldenRatio],
    [goldenRatio, 0, -1], [goldenRatio, 0, 1], [-goldenRatio, 0, -1], [-goldenRatio, 0, 1]
  ];

  const indices = [
    0, 11, 5,  0, 5, 1,  0, 1, 7,  0, 7, 10, 0, 10, 11,
    1, 5, 9,  5, 11, 4,  11, 10, 2, 10, 7, 6,  7, 1, 8,
    3, 9, 4,  3, 4, 2,  3, 2, 6,  3, 6, 8,  3, 8, 9,
    4, 9, 5,  2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1
  ];

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices.flat(), 3));
  geometry.setIndex(indices);

  const material = new THREE.MeshPhongMaterial({ wireframe: true });
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
}

const icosaedro = createIcosahedron();
scene.add(icosaedro);

// Configuración de la cámara y los controles
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 5;
camera.position.y = 2;
camera.position.x = 2;
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Renderizamos la escena
renderer.render(scene, camera);

import { Router } from 'express';

const router = Router();

const obras = [
    { id: 1, titulo: 'Ciudad del Futuro', autor: 'Vision AI', año: 2025, descripcion: 'Paisaje urbano futurista.', imagen: 'obra1.png' },
    { id: 2, titulo: 'Paisaje Alienígena Sereno', autor: 'Lumina', año: 2025, descripcion: 'Un mundo extraterrestre con dos lunas en el cielo.', imagen: 'obra2.png' },
    { id: 3, titulo: 'Templo Oculto en la Jungla', autor: 'Vision AI', año: 2025, descripcion: 'Una jungla densa con árboles gigantes, flores coloridas y un antiguo templo escondido.', imagen: 'obra3.png' },
    { id: 4, titulo: 'Estación Espacial Avanzada', autor: 'PixelForge', año: 2025, descripcion: 'Una estación espacial orbitando un planeta lejano, con naves espaciales acoplando y despegando.', imagen: 'obra4.png' },
    { id: 5, titulo: 'Ruinas Post-Apocalípticas', autor: 'Lumina', año: 2025, descripcion: 'Un paisaje devastado con edificios abandonados, vegetación crecida y un superviviente solitario explorando los restos del mundo.', imagen: 'obra5.png' },
    { id: 6, titulo: 'Bosque Mágico Encantado', autor: 'Vision AI', año: 2025, descripcion: 'Un bosque lleno de hongos luminosos, arroyos centelleantes y criaturas míticas como hadas y unicornios.', imagen: 'obra6.png' },
    { id: 7, titulo: 'Auroras en la Montaña Nevada', autor: 'PixelForge', año: 2025, descripcion: 'Un paisaje montañoso cubierto de nieve con una cabaña acogedora, un lago congelado y las auroras boreales iluminando el cielo.', imagen: 'obra7.png' },
    { id: 8, titulo: 'Arrecife Coralino Vibrante', autor: 'Lumina', año: 2025, descripcion: 'Un arrecife submarino rebosante de peces coloridos, tortugas marinas y otras formas de vida marina.', imagen: 'obra8.png' },
    { id: 9, titulo: 'Castillo Medieval Majestuoso', autor: 'Vision AI', año: 2025, descripcion: 'Un castillo imponente en lo alto de una colina, rodeado por un foso y campos verdes exuberantes.', imagen: 'obra9.png' },
    { id: 10, titulo: 'Batalla Futurista de Videojuegos', autor: 'PixelForge', año: 2025, descripcion: 'Un enfrentamiento épico entre guerreros con armaduras avanzadas y armas láser en un entorno dinámico y lleno de acción.', imagen: 'obra10.png' }
];

//Rutas

router.get('/', (req, res) => res.redirect('/inicio'));

router.get('/inicio', (req, res) => res.render('index'));

router.get('/galeria', (req, res) => res.render('galeria', { obras }));

router.get('/obra/:id', (req, res) => {
    const obra = obras.find(o => o.id === parseInt(req.params.id));
    if (obra) res.render('obra', { obra });
    else res.status(404).send('Obra no encontrada');
});

router.get('/acerca', (req, res) => res.render('acerca'));

export default router;
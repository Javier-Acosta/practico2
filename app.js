const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://grupo-01:grupo01@cursadanodejs.ls9ii.mongodb.net/Node-js', { serverSelectionTimeoutMS: 5000 })
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(error => console.error('Error al conectar a MongoDB:', error));

const superheroeSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: String, required: true },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: [String],
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creatyedAt: { type: Date, default: Date.now },
    creador: { type: String, default: ' Acosta Javier' }

}, { collection: 'Grupo-01' });

const SuperHero = mongoose.model('SuperHero', superheroeSchema);

async function insertSuperHero() {
    const hero = new SuperHero({
        nombreSuperHeroe: 'Spiderman',
        nombreReal: ' Peter Parker',
        edad: 25,
        planetaOrigen: 'Tierra',
        debilidad: 'Radioactiva',
        poderes: ['Trepar paredes', 'Sentido arácnido', 'Super Fuerza', 'Afgilidad'],
        aliados: ['Ironman'],
        enemigos: ['Duende Verde'],
        creador: 'Acosta Javier'

    });

    try {

        await hero.save();
        console.log('Superhérpe insertado:', hero);
    } catch (error) {
        console.log('error al insertar superhéroe:', error);

    }


}
async function updateSuperHero(nombreSuperHeroe) {

    const result = await SuperHero.updateOne({ nombreSuperHeroe: nombreSuperHeroe }, { $set: { edad: 26 } });
    console.log('Resultado de la actualización:', result);

}

async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
    console.log('Superhéroe eliminado:', result);


    async function findSuperHeroes() {
        const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
        console.log('Superhéroe encontrado:', heroes);


    }
}

insertSuperHero();
// deleteSuperHero('Spiderman');
// updateSuperHero('Spiderman');
// findSuperHeroes();
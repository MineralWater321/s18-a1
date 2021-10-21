// 3. Create a "trainer" object by using object literals.
// 4. Initialize/add the "trainer" object properties.

let trainer = {
	name: "Ash Ketchum",
	age: 10,
	pokemon: ['Pikachu', 'Charizard', 'Squirtle', 'Bulbasaur'],
	friends: {
		hoenn: ['May', 'Max'],
		kanto: ['Brock', 'Misty']
	},
	talk: function(pokemon){
	let pokemonName = trainer.pokemon.indexOf(pokemon);
	console.log(trainer.pokemon[pokemonName] + "! I choose you!");
		
	}
}

// 5. Access the "trainer" object properties using dot and square bracket notation.
console.log('Result of dot notation:');
console.log(trainer.name);
console.log('Result of bracket notation');
console.log(trainer['pokemon']);

// 6. Invoke/call the "trainer" object method.
console.log(trainer.talk('Charizard'));
// 7. Create a constructor function for creating a pokemon.

function Pokemon(name, level){
	//Properties
	this.name = name;
	this.level = level;
	this.health = 2 * level;
	this.attack = level;

	//Methods
	this.tackle = function(target){
		console.log(this.name + ' tackled ' + target.name);
		let healthLeft = target.health - this.attack;
		console.log(target.name + "\'s health is now reduced to " + healthLeft);
		if(healthLeft <= 0) {
			console.log(target.name + " fainted");
		}
	};	
}

// 8. Create/instantiate several pokemon using the "constructor" function.
let pikachu = new Pokemon("Pikachu", 16);
let rattata = new Pokemon("Rattata", 22);
let torchic = new Pokemon("Torchic", 33);
let geodude = new Pokemon("Geodude", 67);

// 9. Have the pokemon objects interact with each other by calling on the "tackle" method.
console.log(Pokemon);
pikachu.tackle(rattata);
geodude.tackle(pikachu);
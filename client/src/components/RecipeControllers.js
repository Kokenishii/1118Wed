app.get('/api/import', recipeControllers.import);

exports.import = function(req, res) {
    Recipe.create(
      {
        title: 'Lasagna',
        description:
          'Lasagna noodles piled high and layered full of three kinds of cheese to go along with the perfect blend of meaty and zesty, tomato pasta sauce all loaded with herbs.',
        image: 'lasagna.png',
        ingredients: ['salt', 'honey', 'sugar', 'rice', 'walnuts', 'lime juice'],
        preparation: [
          { step: 'Boil water' },
          { step: 'Fry the eggs' },
          { step: 'Serve hot' }
        ]
      },
      {
        title: 'Pho-Chicken Noodle Soup',
        description:
          'Pho (pronounced "fuh") is the most popular food in Vietnam, often eaten for breakfast, lunch and dinner. It is made from a special broth that simmers for several hours infused with exotic spices and served over rice noodles with fresh herbs.',
        image: 'pho.png',
        ingredients: ['salt', 'honey', 'sugar', 'rice', 'walnuts', 'lime juice'],
        preparation: [
          { step: 'Boil water' },
          { step: 'Fry the eggs' },
          { step: 'Serve hot' }
        ]
      },
      {
        title: 'Guacamole',
        description:
          'Guacamole is definitely a staple of Mexican cuisine. Even though Guacamole is pretty simple, it can be tough to get the perfect flavor - with this authentic Mexican guacamole recipe, though, you will be an expert in no time.',
        image: 'guacamole.png',
        ingredients: ['salt', 'honey', 'sugar', 'rice', 'walnuts', 'lime juice'],
        preparation: [
          { step: 'Boil water' },
          { step: 'Fry the eggs' },
          { step: 'Serve hot' }
        ]
      },
      {
        title: 'Hamburger',
        description:
          'A Hamburger (often called a burger) is a type of sandwich in the form of  rounded bread sliced in half with its center filled with a patty which is usually ground beef, then topped with vegetables such as lettuce, tomatoes and onions.',
        image: 'hamburger.png',
        ingredients: ['salt', 'honey', 'sugar', 'rice', 'walnuts', 'lime juice'],
        preparation: [
          { step: 'Boil water' },
          { step: 'Fry the eggs' },
          { step: 'Serve hot' }
        ]
      },
      function(err) {
        if (err) return console.log(err);
        return res.sendStatus(202);
      }
    );
  };


function cloning(object) {
    let clone;
    if (Array.isArray(object)){
        clone=[];
    } else {
      clone={};
    }
      for (let key in object) {
        if (typeof object[key] === "object" && object[key] !== null) {
          clone[key] = cloning(object[key]);
        } else {
          clone[key] = object[key];
        }
      }
      return clone;
    }
    
      let clonedObj = cloning(
        {
        name:'test',
        age: 25,
        etc: {
          uk: 'test',
          countries: ['test',
          'test',
          'test',
        {
            key:'alaki'
        }]
          }
      });
      console.log(clonedObj);
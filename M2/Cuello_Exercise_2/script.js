// JSON string
const jsonString = '{"name": "Eugene", "age": 20, "hobbies": ["Programming", "Video Editing", "Video Games"]}';

// Parse JSON string into a JavaScript object 
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name);	
console.log(jsonObject.age);	
console.log(jsonObject.hobbies);

const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString);

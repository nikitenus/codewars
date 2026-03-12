// Escape the room
// You are creating an "Escape the room" game. The first step is to create a hash table ( dict in Python) called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each room being a hash table with at least 3 properties (e.g. name, description, completed).

// Add rooms here
var rooms = {};
rooms["first-room"] = {};
rooms["second-room"] = {};
rooms["third-room"] = {};

rooms["first-room"]["completed"] = "completed";
rooms["first-room"]["description"] = "description";
rooms["first-room"]["name"] = "first";

rooms["second-room"]["completed"] = "completed";
rooms["second-room"]["description"] = "description";
rooms["second-room"]["name"] = "first";

rooms["third-room"]["completed"] = "completed";
rooms["third-room"]["description"] = "description";
rooms["third-room"]["name"] = "first";

console.log(rooms);

class ObjectUtilities {
  /* Your magic here */

  // static mergeObjects(objA, objB) {
  //   const merge = { ...objA, ...objB };
  //   return merge;
  // }

  // static removePassword(user) {
  //   delete user.password;
  //   return user;
  // }

  // static freezeObj(cleanUser) {
  //   const freeze = Object.freeze(cleanUser);
  //   return freeze;
  // }

  // static getOnlyValues(frozenUser) {
  //   const keys = Object.keys(frozenUser);
  //   return keys;
  // }

  // static getOnlyProperties(frozenUser) {
  //   const values = Object.values(frozenUser);
  //   return values;
  // }

  static mergeObjects = (objectA, objectB) => ({ ...objectA, ...objectB });
  static removePassword = ({ password, ...rest }) => rest;
  static getOnlyProperties = (obj) => Object.keys(obj);
  static getOnlyValues = (obj) => Object.values(obj);
  static freezeObj = (obj) => Object.freeze(obj);
}

const objA = {
  name: "Nicolas",
  favFood: "Kimchi",
};

const objB = {
  password: "12345",
};

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!"; // This should show an error

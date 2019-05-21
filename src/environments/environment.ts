
export const firebase_config = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCtlC_icvipczPGhpHS2d7kPv2cLdoCD0c",
    authDomain: "proyectoredes-b7b7f.firebaseapp.com",
    databaseURL: "https://proyectoredes-b7b7f.firebaseio.com",
    projectId: "proyectoredes-b7b7f",
    storageBucket: "proyectoredes-b7b7f.appspot.com",
    messagingSenderId: "714215123710"
  }
};


export const snapshotToArray = snapshot =>{
  let returnArray = [];
  snapshot.array.forEach(element => {
    let item = element.val();
    item.key = element.key;
    returnArray.push(item);
  });
  return returnArray
}

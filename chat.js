// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyBlenz3aY2yrifScZhQfhAXg6TOoZ7jOdQ",
    authDomain: "projeto-wedapp.firebaseapp.com",
    databaseURL: "https://projeto-wedapp-default-rtdb.firebaseio.com",
    projectId: "projeto-wedapp",
    storageBucket: "projeto-wedapp.appspot.com",
    messagingSenderId: "38265483389",
    appId: "1:38265483389:web:df834a7d0a64bbb08e4114",
    measurementId: "G-J5G6H9X3V0"
  };

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage*/

    localStorage.setItem("user_name", user_name);
    /*Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
window.location = "chat_room.html";
}





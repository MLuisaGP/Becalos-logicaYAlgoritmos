//Lista de invitados
//Objetivo encontrar el primer par de invitados consecutivos que puedan sentarse juntos
const guest = ["Diego", "Maria", "Monica", "Javier", "Ricardo", "Pedro", "Lucia", "Gabriela", "Hugo", "Ximena", "Valeria", "Sergio", "Carolina"];
guest.sort();

const findParnerts = (arr)=>{
    let begin = 0;
    let next = 1;
    while(next < arr.length){
        if(guest[begin][0] === guest[next][0]){
            return [guest[begin], guest[next]]
        }
        begin++;
        next++;

    }
    return null;
}
console.log(findParnerts(guest));

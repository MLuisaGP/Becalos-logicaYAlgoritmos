const transactions = [
    { id: 14356, client: "Ana Carrasco", monto: 96789, date: "2025-03-25", status: "completado" },
    { id: 79879, client: "Saul Hernandez", monto: 362456, date: "2025-03-24", status: "pendiente" },
    { id: 23462, client: "Ivan Fougerat", monto: 100, date: "2025-03-23", status: "rechazado" },
    { id: 52346, client: "Maria Galaz", monto: 798789, date: "2025-03-25", status: "completado" }
]

//Encontrar la primera transación completada
const firstTransaction = transactions.find(t=> t.status === "completado")
console.log("Primera transaccion del mes completada: ",firstTransaction);

//verificar si un cliente en especifico realizo una transaccion
const clients = transactions.map(t=>t.client);
const existIvan = clients.includes('Ivan Fougerat');
console.log("Ivan realizo transacion? ", existIvan);

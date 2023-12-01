class Task {
    constructor(name, status) {
        this._name = name;
        this._status = status;
    }

    set name(name) {
        this._name = name;
    }

    set status(status) {
        this._status = status;
    }

    get status() {
        return this._status;
    }

    get name() {
        return this._name;
    }
};

const nameTask = ["Responder Bea no discord", "Sofrer pelo Santa Cruz", "Mudar algo no boilerplate (pela 1782683729 vez)"];
const statusTask = ["Não concluída", "Concluída", "Não concluída"];

var list = new Array();

for (var i = 0; i < nameTask.length; i++) {
    var tName= nameTask[i];
    var tStatus = statusTask[i];
    list[i] = new Task(tName, tStatus);
}

console.log("Lista Mágica de Tarefas de Titi:");

for (var i = 0; i < list.length; i++) {
    console.log((i+1) + ".", list[i].name);
    console.log("-> Status:", list[i].status);
}


class BaseCalculator {
    constructor() {
        this.liste = []; // une liste d'opérandes et d'opérateurs pour l'opération en cours
        this.prec = []; // la liste d'opérandes et d'opérateurs de l'opération précédente
        this.allNumber = ""; // la chaîne de caractères qui contient l'opération en cours, sans espaces
        this.start, this.end, this.time; // les variables pour mesurer le temps d'opération
        this.timeIcon = "<i class='fa-regular fa-hourglass'></i>"; // une icône pour indiquer le temps d'opération à l'utilisateur
    }

    // Ajoute l'input à la liste et à l'écran
    addToList(arg) {
        if (this.liste.length == 0) { // si la liste est vide, on commence à mesurer le temps
            this.start = performance.now();
        }
        if (!isFinite(arg)) { // si l'argument n'est pas un chiffre
            this.liste.push(" " + arg + " "); // on ajoute l'argument à la liste, avec des espaces autour pour séparer les opérateurs
        } else {
            this.liste.push(arg); // sinon, on ajoute juste l'argument à la liste
        }
        document.getElementById("result").innerHTML = this.liste.join(""); // on affiche l'opération à l'écran, sans les espaces autour des opérateurs
    }

    // Vérifie que notre syntaxe est correcte e.g. pas 1..1 / 2
    secureEval(expression) {
        try {
            return eval(expression); // on utilise la fonction eval() pour évaluer l'expression
        } catch (error) {
            return new Error("Syntaxe"); // si on attrape une erreur, on renvoie une erreur "Syntaxe"
        }
    }

    joinList() { // assemble tous les opérandes et opérateurs de la liste en une chaîne sans espaces
        this.allNumber = this.liste.join("");
        this.allNumber = this.allNumber.replace(/\s+/g, ""); // on retire les espaces induits par les opérateurs de la chaîne
    }

    calc() { // effectue le calcul
            this.joinList(); // on assemble la liste en une chaîne sans espaces
            console.log(this.liste); // on affiche la liste à des fins de débogage
            console.log(this.allNumber); // on affiche la chaîne de caractères à des fins de débogage
            document.getElementById("result").innerHTML = this.secureEval(this.allNumber); // on affiche le résultat à l'écran
            document.getElementById("calcul").innerHTML = this.allNumber; // on affiche l'opération complète qu'on vient de faire à l'écran
            this.prec = []; // on supprime l'opération précédente
            this.prec = this.liste; // on sauvegarde notre opération pour qu'elle devienne la précédente
            this.liste = []; // on vide la liste pour pouvoir faire un nouveau calcul
            this.end = performance.now(); // on arrête la mesure du temps
            this.time = (this.end - this.start) / 1000;
            // Affiche le temps d'opération dans la console, dans l'onglet et à l'écran
            this.timeIcon + "\t" + this.time + "s";
        }
        // Supprime le dernier input
    del() {
        if (document.getElementById("result").innerHTML == "") {
            // Si l'utilisateur appuie deux fois sur del après avoir fini un calcul
            document.getElementById("result").innerHTML =
                document.getElementById("calcul").innerHTML; // Le résultat précédent devient le résultat courant
            document.getElementById("calcul").innerHTML = ""; // On efface l'opération précédente
            this.liste = this.prec; // On remplace la liste actuelle avec l'opération précédente
            this.start = performance.now(); // On reset le timer pour le nouveau calcul
        } else {
            // Sinon, on supprime juste le dernier caractère
            this.liste.pop();
            document.getElementById("result").innerHTML = this.liste.join("");
        }
    }



    // Réinitialise la liste et l'écran
    reset() {
        this.liste = [];
        document.getElementById("result").innerHTML = "";
        document.getElementById("calcul").innerHTML = "";
    }
}
// Crée une instance de la classe BaseCalculator
calculator = new BaseCalculator();
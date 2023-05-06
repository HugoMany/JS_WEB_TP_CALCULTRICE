class BaseCalculator {
  constructor() {
    this.liste = [];
    this.prec = [];
    this.allNumber = "";
    this.start, this.end, this.time;
    this.timeIcon = "<i class='fa-regular fa-hourglass'></i>";
  }

  // Ajoute l'input à la liste et à l'écran
  addToList(arg) {
    // Dès que l'utilisateur commence à écrire, on commence à mesurer
    if (this.liste.length == 0) {
      this.start = performance.now();
    }
    // Si l'input n'est pas un chiffre
    if (!isFinite(arg)) {
      this.liste.push(" " + arg + " "); // " " est notre séparateur
    } else {
      this.liste.push(arg); // juste notre chiffre
    }
    document.getElementById("result").innerHTML = this.liste.join(""); // Affiche l'opération à l'écran
  }

  // Vérifie que notre syntaxe est correcte e.g. pas 1..1 / 2
  secureEval(expression) {
    try {
      return eval(expression);
    } catch (error) {
      return new Error("Syntaxe");
    }
  }

  joinList() {
    this.allNumber = this.liste.join("");
    this.allNumber = this.allNumber.replace(/\s+/g, ""); // Retire les espaces induits par nos séparateurs (opérateurs)
  }

  calc() {
    // On traite notre chaîne pour la rendre lisible par eval()

    this.joinList();
    console.log(this.liste);
    console.log(this.allNumber);

    document.getElementById("result").innerHTML = this.secureEval(
      this.allNumber
    ); // Affiche le résultat

    document.getElementById("calcul").innerHTML = this.allNumber; // Affiche le calcul qu'on vient de faire

    this.prec = []; // On supprime l'opération précédente
    this.prec = this.liste; // On sauvegarde notre opération qui devient la précédente
    this.liste = []; // On vide la liste pour pouvoir faire un nouveau calcul

    // L'opération est terminée, on peut calculer le temps qu'elle a prit
    this.end = performance.now();
    this.time = (this.end - this.start) / 1000;
    console.log(`Temps d'opération: ${this.time}s`);
    document.title = `Temps d'opération: ${this.time}s`;
    document.getElementById("time").innerHTML =
      this.timeIcon + "\t" + this.time + "s";
  }

  // Supprime l'input qui vient d'être fait
  del() {
    if (document.getElementById("result").innerHTML == "") {
      // Si jamais on appuie deux fois sur del après avoir fini un calcul
      document.getElementById("result").innerHTML =
        document.getElementById("calcul").innerHTML; // Notre résultat précédent devient le courant
      document.getElementById("calcul").innerHTML = ""; // On efface ce qu'on avait avant
      this.liste = this.prec; // On remplace la liste des arguments
      this.start = performance.now(); // C'est un nouveau calcul, il ne faut pas oublier de reset le timer
    } else {
      // Sinon, on supprime juste le dernier caractère
      this.liste.pop();
      document.getElementById("result").innerHTML = this.liste.join("");
    }
  }

  // Clear la liste et l'écran
  reset() {
    this.liste = [];
    document.getElementById("result").innerHTML = "";
    document.getElementById("calcul").innerHTML = "";
  }
}

const calculator = new BaseCalculator();

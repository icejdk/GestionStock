var app;
app = angular.module('myApp',[]);
app.controller('formController', ['$scope',function($scope){

    $scope.etudiant = {};
    $scope.masculin = true;
    $scope.feminin = false;
    $scope.etumodif = {};
    $scope.masculinModif = true;
    $scope.femininModif = false;
    var index;

    loadAll();

    $scope.RadioChange = function(num){
        if(num == 1){
            $scope.masculin = true;
            $scope.feminin = false;
            $scope.etudiant.sexe = 'M';
        }
        else if(num == 2){
            $scope.masculin = false;
            $scope.feminin = true;
            $scope.etudiant.sexe = 'F';
        }

    };

    $scope.RadioChangemodif = function(num){
        if(num == 1){
            $scope.masculinModif = true;
            $scope.femininModif = false;
            $scope.etumodif.sexe = 'M';
        }
        else if(num == 2){
            $scope.masculinModif = false;
            $scope.femininModif = true;
            $scope.etumodif.sexe = 'F';
        }

    };

    $scope.addNew = function(){
        console.log($scope.etudiant);
        $scope.listeEtudiant.push($scope.etudiant);
        localStorage.setItem("listeEtudiants",JSON.stringify($scope.listeEtudiant));
        console.log($scope.listeEtudiant);
        $scope.etudiant = {};
        $scope.RadioChange(1);
    };

    $scope.edit = function (student, indice) {
        console.log(student);
        $scope.etumodif.nom = student.nom;
        $scope.etumodif.prenom = student.prenom;
        $scope.etumodif.age = student.age;
        if(student.sexe == 'M'){
            $scope.RadioChangemodif(1);
        }
        else if(student.sexe == 'F'){
            $scope.RadioChangemodif(2);
        }
        index = indice;
    };
    $scope.modifier = function(){
        $scope.listeEtudiant[index].nom = $scope.etumodif.nom;
        $scope.listeEtudiant[index].prenom = $scope.etumodif.prenom;
        $scope.listeEtudiant[index].sexe = $scope.etumodif.sexe;
        $scope.listeEtudiant[index].age = $scope.etumodif.age;
        localStorage.setItem("listeEtudiants",JSON.stringify($scope.listeEtudiant));
        $scope.etumodif = {};
        $scope.RadioChangemodif(1);
    };

    $scope.supprimer = function(stud,ind){
        $scope.listeEtudiantSupp.push($scope.listeEtudiant[ind]);
        console.log($scope.listeEtudiantSupp);
        $scope.listeEtudiant.splice(ind,1);
        localStorage.setItem("listeEtudiants",JSON.stringify($scope.listeEtudiant));
        localStorage.setItem("listeEtudiantSupp",JSON.stringify($scope.listeEtudiantSupp));
        loadAll();
    };

    function loadAll(){
        if ((localStorage.getItem("listeEtudiants")==null)||(localStorage.getItem("listeEtudiantSupp")==null)){
            $scope.listeEtudiant = [];
            $scope.listeEtudiantSupp = [];

        }else{
            $scope.listeEtudiant =JSON.parse(localStorage.getItem("listeEtudiants"));
            $scope.listeEtudiantSupp =JSON.parse(localStorage.getItem("listeEtudiantSupp"));
        }
    }

}]);




var relationshipNames = [
    "lovers",
    "Siblings",
    "Friends",
    "Cousins",
    "enemies",
    "frenemies",
    "soulmates",
    "dating",
    "talking",
    "best duo",
    "best partners",
  ];
  
  function generateRandomRelationship() {
    var name1 = document.getElementById("name1").value.trim();
    var name2 = document.getElementById("name2").value.trim();
  
    if (name1 === "" || name2 === "") {
      alert("Please enter both names.");
      return;
    }
  
    var randomIndex = Math.floor(Math.random() * relationshipNames.length);
    var randomRelationship = relationshipNames[randomIndex];
    var relationshipOutput = name1 + " and " + name2 + " are " + randomRelationship + ".";
    document.getElementById("relationshipName").innerText = relationshipOutput;
  }
  
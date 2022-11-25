const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];


const deck = [];

  function test1() {
  console.log(deck);
  };

  function test2() {
    for (let i = 0; i < suits.length; i++) {
      deck.push(suits[i]);
    }
console.log(suits.length)
console.log(deck);
  };

  function createDeck() {
    for (let suit in suits) {
      for (let value in values) {
        deck.push(values[value] + " of " + suits[suit]);
      }
    }
  };

  function shuffleDeck() {
    let numberOfCards = deck.length;
    for (let i = 0; i < numberOfCards; i++) {
      let j = Math.floor(Math.random() * numberOfCards);
      let tmp = deck[i];
      deck[i] = deck[j];
      deck[j] = tmp;
    }
  };

  function deal() {
    let card1 = document.getElementById("SwitchCard1")
    if (card1.value == "Switch") {
      document.getElementById("displayCardsOne").innerHTML = deck.pop();
    }
    let card2 = document.getElementById("SwitchCard2")
    if (card2.value == "Switch") {
      document.getElementById("displayCardsTwo").innerHTML = deck.pop();
    }
    let card3 = document.getElementById("SwitchCard3")
    if (card3.value == "Switch") {
      document.getElementById("displayCardsThree").innerHTML = deck.pop();
    }
    let card4 = document.getElementById("SwitchCard4")
    if (card4.value == "Switch") {
      document.getElementById("displayCardsFour").innerHTML = deck.pop();
    }
    let card5 = document.getElementById("SwitchCard5")
    if (card5.value == "Switch") {
      document.getElementById("displayCardsFive").innerHTML = deck.pop();
    }
    function checkCard() {
      if (document.getElementById("displayCardsOne").textContent.includes("Diamond") || 
    document.getElementById("displayCardsOne").textContent.includes("Hearts")) {
      document.getElementById("displayCardsOne").classList.remove("black");
      document.getElementById("displayCardsOne").classList.add("red");
     }
     else if (document.getElementById("displayCardsOne").textContent.includes("Spades") || 
     document.getElementById("displayCardsOne").textContent.includes("Clubs")) {
      document.getElementById("displayCardsOne").classList.remove("red");
      document.getElementById("displayCardsOne").classList.add("black");
      }
      if (document.getElementById("displayCardsTwo").textContent.includes("Diamond") || 
    document.getElementById("displayCardsTwo").textContent.includes("Hearts")) {
      document.getElementById("displayCardsTwo").classList.remove("black");
      document.getElementById("displayCardsTwo").classList.add("red");
     }
     else if (document.getElementById("displayCardsTwo").textContent.includes("Spades") || 
     document.getElementById("displayCardsTwo").textContent.includes("Clubs")) {
      document.getElementById("displayCardsTwo").classList.remove("red");
      document.getElementById("displayCardsTwo").classList.add("black");
      }
      if (document.getElementById("displayCardsThree").textContent.includes("Diamond") || 
    document.getElementById("displayCardsThree").textContent.includes("Hearts")) {
      document.getElementById("displayCardsThree").classList.remove("black");
      document.getElementById("displayCardsThree").classList.add("red");
     }
     else if (document.getElementById("displayCardsThree").textContent.includes("Spades") || 
     document.getElementById("displayCardsThree").textContent.includes("Clubs")) {
      document.getElementById("displayCardsThree").classList.remove("red");
      document.getElementById("displayCardsThree").classList.add("black");
      }
      if (document.getElementById("displayCardsFour").textContent.includes("Diamond") || 
    document.getElementById("displayCardsFour").textContent.includes("Hearts")) {
      document.getElementById("displayCardsFour").classList.remove("black");
      document.getElementById("displayCardsFour").classList.add("red");
     }
     else if (document.getElementById("displayCardsFour").textContent.includes("Spades") || 
     document.getElementById("displayCardsFour").textContent.includes("Clubs")) {
      document.getElementById("displayCardsFour").classList.remove("red");
      document.getElementById("displayCardsFour").classList.add("black");
      }
      if (document.getElementById("displayCardsFive").textContent.includes("Diamond") || 
    document.getElementById("displayCardsFive").textContent.includes("Hearts")) {
      document.getElementById("displayCardsFive").classList.remove("black");
      document.getElementById("displayCardsFive").classList.add("red");
     }
     else if (document.getElementById("displayCardsFive").textContent.includes("Spades") || 
     document.getElementById("displayCardsFive").textContent.includes("Clubs")) {
      document.getElementById("displayCardsFive").classList.remove("red");
      document.getElementById("displayCardsFive").classList.add("black");
      }
    };
    function replaceCard1() {
    let getCard = document.getElementById("displayCardsOne").innerHTML
    let newCard =  getCard.replace(" of ","")
    document.getElementById("displayCardsOne").innerHTML = newCard
    };
    function replaceCard2() {
      let getCard = document.getElementById("displayCardsTwo").innerHTML
      let newCard =  getCard.replace(" of ","")
      document.getElementById("displayCardsTwo").innerHTML = newCard
    };
    function replaceCard3() {
        let getCard = document.getElementById("displayCardsThree").innerHTML
        let newCard =  getCard.replace(" of ","")
        document.getElementById("displayCardsThree").innerHTML = newCard
    };
    function replaceCard4() {
          let getCard = document.getElementById("displayCardsFour").innerHTML
          let newCard =  getCard.replace(" of ","")
          document.getElementById("displayCardsFour").innerHTML = newCard
    };
    function replaceCard5() {
            let getCard = document.getElementById("displayCardsFive").innerHTML
            let newCard =  getCard.replace(" of ","")
            document.getElementById("displayCardsFive").innerHTML = newCard
    };
    function replaceCard6() {
      let getCard = document.getElementById("displayCardsOne").innerHTML
      if (document.getElementById("displayCardsOne").textContent.includes("Ace")) {
        newCard = getCard.replace("Ace","A")
        document.getElementById("displayCardsOne").innerHTML = newCard
      }
      else if (document.getElementById("displayCardsOne").textContent.includes("King")) {
        newCard = getCard.replace("King","K")
        document.getElementById("displayCardsOne").innerHTML = newCard
    }   else if (document.getElementById("displayCardsOne").textContent.includes("Queen")) {
      newCard = getCard.replace("Queen","Q")
      document.getElementById("displayCardsOne").innerHTML = newCard
    }
    else if (document.getElementById("displayCardsOne").textContent.includes("Jack")) {
      newCard = getCard.replace("Jack","J")
      document.getElementById("displayCardsOne").innerHTML = newCard
    }
    
    };
    function replaceCard7() {
      let getCard = document.getElementById("displayCardsTwo").innerHTML
      if (document.getElementById("displayCardsTwo").textContent.includes("Ace")) {
        newCard = getCard.replace("Ace","A")
        document.getElementById("displayCardsTwo").innerHTML = newCard
      }
      else if (document.getElementById("displayCardsTwo").textContent.includes("King")) {
        newCard = getCard.replace("King","K")
        document.getElementById("displayCardsTwo").innerHTML = newCard
    }   else if (document.getElementById("displayCardsTwo").textContent.includes("Queen")) {
      newCard = getCard.replace("Queen","Q")
      document.getElementById("displayCardsTwo").innerHTML = newCard
    }
    else if (document.getElementById("displayCardsTwo").textContent.includes("Jack")) {
      newCard = getCard.replace("Jack","J")
      document.getElementById("displayCardsTwo").innerHTML = newCard
    }
    
    };
    function replaceCard8() {
      let getCard = document.getElementById("displayCardsThree").innerHTML
      if (document.getElementById("displayCardsThree").textContent.includes("Ace")) {
        newCard = getCard.replace("Ace","A")
        document.getElementById("displayCardsThree").innerHTML = newCard
      }
      else if (document.getElementById("displayCardsThree").textContent.includes("King")) {
        newCard = getCard.replace("King","K")
        document.getElementById("displayCardsThree").innerHTML = newCard
    }   else if (document.getElementById("displayCardsThree").textContent.includes("Queen")) {
      newCard = getCard.replace("Queen","Q")
      document.getElementById("displayCardsThree").innerHTML = newCard
    }
    else if (document.getElementById("displayCardsThree").textContent.includes("Jack")) {
      newCard = getCard.replace("Jack","J")
      document.getElementById("displayCardsThree").innerHTML = newCard
    }
    
    };
    function replaceCard9() {
      let getCard = document.getElementById("displayCardsFour").innerHTML
      if (document.getElementById("displayCardsFour").textContent.includes("Ace")) {
        newCard = getCard.replace("Ace","A")
        document.getElementById("displayCardsFour").innerHTML = newCard
      }
      else if (document.getElementById("displayCardsFour").textContent.includes("King")) {
        newCard = getCard.replace("King","K")
        document.getElementById("displayCardsFour").innerHTML = newCard
    }   else if (document.getElementById("displayCardsFour").textContent.includes("Queen")) {
      newCard = getCard.replace("Queen","Q")
      document.getElementById("displayCardsFour").innerHTML = newCard
    }
    else if (document.getElementById("displayCardsFour").textContent.includes("Jack")) {
      newCard = getCard.replace("Jack","J")
      document.getElementById("displayCardsFour").innerHTML = newCard
    }
    
    };
    function replaceCard10() {
      let getCard = document.getElementById("displayCardsFive").innerHTML
      if (document.getElementById("displayCardsFive").textContent.includes("Ace")) {
        newCard = getCard.replace("Ace","A")
        document.getElementById("displayCardsFive").innerHTML = newCard
      }
      else if (document.getElementById("displayCardsFive").textContent.includes("King")) {
        newCard = getCard.replace("King","K")
        document.getElementById("displayCardsFive").innerHTML = newCard
    }   else if (document.getElementById("displayCardsFive").textContent.includes("Queen")) {
      newCard = getCard.replace("Queen","Q")
      document.getElementById("displayCardsFive").innerHTML = newCard
    }
    else if (document.getElementById("displayCardsFive").textContent.includes("Jack")) {
      newCard = getCard.replace("Jack","J")
      document.getElementById("displayCardsFive").innerHTML = newCard
    }
    
    };
    function replaceCardSuit() {
      if (document.getElementById("displayCardsOne").textContent.includes("Hearts")) {
        let cardSuit = document.getElementById("displayCardsOne").innerHTML
        let iconSuit = cardSuit.replace("Hearts","♥")
        document.getElementById("displayCardsOne").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsOne").textContent.includes("Diamonds")) {
        let cardSuit = document.getElementById("displayCardsOne").innerHTML
        let iconSuit = cardSuit.replace("Diamonds","♦")
        document.getElementById("displayCardsOne").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsOne").textContent.includes("Clubs")) {
        let cardSuit = document.getElementById("displayCardsOne").innerHTML
        let iconSuit = cardSuit.replace("Clubs","♣")
        document.getElementById("displayCardsOne").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsOne").textContent.includes("Spades")) {
        let cardSuit = document.getElementById("displayCardsOne").innerHTML
        let iconSuit = cardSuit.replace("Spades","♠")
        document.getElementById("displayCardsOne").innerHTML = iconSuit
      }
      if (document.getElementById("displayCardsTwo").textContent.includes("Hearts")) {
        let cardSuit = document.getElementById("displayCardsTwo").innerHTML
        let iconSuit = cardSuit.replace("Hearts","♥")
        document.getElementById("displayCardsTwo").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsTwo").textContent.includes("Diamonds")) {
        let cardSuit = document.getElementById("displayCardsTwo").innerHTML
        let iconSuit = cardSuit.replace("Diamonds","♦")
        document.getElementById("displayCardsTwo").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsTwo").textContent.includes("Clubs")) {
        let cardSuit = document.getElementById("displayCardsTwo").innerHTML
        let iconSuit = cardSuit.replace("Clubs","♣")
        document.getElementById("displayCardsTwo").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsTwo").textContent.includes("Spades")) {
        let cardSuit = document.getElementById("displayCardsTwo").innerHTML
        let iconSuit = cardSuit.replace("Spades","♠")
        document.getElementById("displayCardsTwo").innerHTML = iconSuit
      }
      if (document.getElementById("displayCardsThree").textContent.includes("Hearts")) {
        let cardSuit = document.getElementById("displayCardsThree").innerHTML
        let iconSuit = cardSuit.replace("Hearts","♥")
        document.getElementById("displayCardsThree").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsThree").textContent.includes("Diamonds")) {
        let cardSuit = document.getElementById("displayCardsThree").innerHTML
        let iconSuit = cardSuit.replace("Diamonds","♦")
        document.getElementById("displayCardsThree").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsThree").textContent.includes("Clubs")) {
        let cardSuit = document.getElementById("displayCardsThree").innerHTML
        let iconSuit = cardSuit.replace("Clubs","♣")
        document.getElementById("displayCardsThree").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsThree").textContent.includes("Spades")) {
        let cardSuit = document.getElementById("displayCardsThree").innerHTML
        let iconSuit = cardSuit.replace("Spades","♠")
        document.getElementById("displayCardsThree").innerHTML = iconSuit
      }
      if (document.getElementById("displayCardsFour").textContent.includes("Hearts")) {
        let cardSuit = document.getElementById("displayCardsFour").innerHTML
        let iconSuit = cardSuit.replace("Hearts","♥")
        document.getElementById("displayCardsFour").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsFour").textContent.includes("Diamonds")) {
        let cardSuit = document.getElementById("displayCardsFour").innerHTML
        let iconSuit = cardSuit.replace("Diamonds","♦")
        document.getElementById("displayCardsFour").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsFour").textContent.includes("Clubs")) {
        let cardSuit = document.getElementById("displayCardsFour").innerHTML
        let iconSuit = cardSuit.replace("Clubs","♣")
        document.getElementById("displayCardsFour").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsFour").textContent.includes("Spades")) {
        let cardSuit = document.getElementById("displayCardsFour").innerHTML
        let iconSuit = cardSuit.replace("Spades","♠")
        document.getElementById("displayCardsFour").innerHTML = iconSuit
      }
      if (document.getElementById("displayCardsFive").textContent.includes("Hearts")) {
        let cardSuit = document.getElementById("displayCardsFive").innerHTML
        let iconSuit = cardSuit.replace("Hearts","♥")
        document.getElementById("displayCardsFive").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsFive").textContent.includes("Diamonds")) {
        let cardSuit = document.getElementById("displayCardsFive").innerHTML
        let iconSuit = cardSuit.replace("Diamonds","♦")
        document.getElementById("displayCardsFive").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsFive").textContent.includes("Clubs")) {
        let cardSuit = document.getElementById("displayCardsFive").innerHTML
        let iconSuit = cardSuit.replace("Clubs","♣")
        document.getElementById("displayCardsFive").innerHTML = iconSuit
      }
      else if  (document.getElementById("displayCardsFive").textContent.includes("Spades")) {
        let cardSuit = document.getElementById("displayCardsFive").innerHTML
        let iconSuit = cardSuit.replace("Spades","♠")
        document.getElementById("displayCardsFive").innerHTML = iconSuit
      }
    };

    function defineFlush() {
      if (document.getElementById("displayCardsOne").textContent.includes("♥") &&
      document.getElementById("displayCardsTwo").textContent.includes("♥") &&
      document.getElementById("displayCardsThree").textContent.includes("♥") &&
      document.getElementById("displayCardsFour").textContent.includes("♥") &&
      document.getElementById("displayCardsFive").textContent.includes("♥")) {
        document.getElementById("winningTittle").innerHTML = "FLUSH"
      } else if (document.getElementById("displayCardsOne").textContent.includes("♦") &&
      document.getElementById("displayCardsTwo").textContent.includes("♦") &&
      document.getElementById("displayCardsThree").textContent.includes("♦") &&
      document.getElementById("displayCardsFour").textContent.includes("♦") &&
      document.getElementById("displayCardsFive").textContent.includes("♦")) {
        document.getElementById("winningTittle").innerHTML = "FLUSH"
    } else if  (document.getElementById("displayCardsOne").textContent.includes("♣") &&
    document.getElementById("displayCardsTwo").textContent.includes("♣") &&
    document.getElementById("displayCardsThree").textContent.includes("♣") &&
    document.getElementById("displayCardsFour").textContent.includes("♣") &&
    document.getElementById("displayCardsFive").textContent.includes("♣")) {
      document.getElementById("winningTittle").innerHTML = "FLUSH"
    } else if  (document.getElementById("displayCardsOne").textContent.includes("♠") &&
    document.getElementById("displayCardsTwo").textContent.includes("♠") &&
    document.getElementById("displayCardsThree").textContent.includes("♠") &&
    document.getElementById("displayCardsFour").textContent.includes("♠") &&
    document.getElementById("displayCardsFive").textContent.includes("♠")) {
      document.getElementById("winningTittle").innerHTML = "FLUSH"
    }
    };

    checkCard();
    replaceCard1();
    replaceCard2();
    replaceCard3();
    replaceCard4();
    replaceCard5();
    replaceCard6();
    replaceCard7();
    replaceCard8();
    replaceCard9();
    replaceCard10();
    replaceCardSuit();
    defineFlush();
  };



  function holdCards1() {
    let card1 = document.getElementById("SwitchCard1")
    if (card1.value == "Keep") {
      card1.value = "Switch"
    }
    else if (card1.value == "Switch"){
      card1.value = "Keep"
    }
  };
  function holdCards2() {
    let card1 = document.getElementById("SwitchCard2")
    if (card1.value == "Keep") {
      card1.value = "Switch"
    }
    else if (card1.value == "Switch"){
      card1.value = "Keep"
    }
  };
  function holdCards3() {
    let card1 = document.getElementById("SwitchCard3")
    if (card1.value == "Keep") {
      card1.value = "Switch"
    }
    else if (card1.value == "Switch"){
      card1.value = "Keep"
    }
  };
  function holdCards4() {
    let card1 = document.getElementById("SwitchCard4")
    if (card1.value == "Keep") {
      card1.value = "Switch"
    }
    else if (card1.value == "Switch"){
      card1.value = "Keep"
    }
  };
  function holdCards5() {
    let card1 = document.getElementById("SwitchCard5")
    if (card1.value == "Keep") {
      card1.value = "Switch"
    }
    else if (card1.value == "Switch"){
      card1.value = "Keep"
    }
  };



//testejä
  function lisaaTesti1() {
  let tervehdys = document.getElementById("muutaTekstia1").innerHTML
  let lisaaTeksti = " Today"
  let uusiTeksti = tervehdys + lisaaTeksti
  document.getElementById("muutaTekstia2").innerHTML = uusiTeksti
  };
  function poistaTesti1() {
    let tervehdys = document.getElementById("muutaTekstia1").innerHTML
    let uusiTeksti = tervehdys.substr(0,5)
  document.getElementById("muutaTekstia2").innerHTML = uusiTeksti
  };
  function replaceTesti1() {
    let tervehdys = document.getElementById("muutaTekstia1").innerHTML
    let uusiTeksti = tervehdys.replace("World","Planet")
  document.getElementById("muutaTekstia2").innerHTML = uusiTeksti
  };


  // document.getElementById("gameWinnerIs").innerHTML = "Pelaaja";
  //tulos2.textContent.includes("Bot: Kivi")
  //element.classList.remove("my-class");
  //♠♥♦♣
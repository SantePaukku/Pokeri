const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
let deck = [];
let moneyValue = 5;
let dealCards = true;
let winningMoney = 0;
document.getElementById("displayMoney").innerHTML = "Money: " + moneyValue + "€";
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
function deal() {
  if (moneyValue <= 0 && dealCards == true && winningMoney == 0) {
    document.getElementById("winningTittle").innerHTML = "No money";
  }
    else {
  if (dealCards == true) {
    deck = [];
    moneyValue = moneyValue - 1;
    createDeckAndShuffle();
    dealCards = false;
  } else if (dealCards == false) {
    dealCards = true;
    
  }
  const nappit = document.querySelectorAll(".kortti");
  const tuplausLukkot = document.querySelectorAll(".tuplaus");
  nappit.forEach(nappi => {
    nappi.disabled = false;
  });
  
 
  function createDeckAndShuffle() {
  // Create deck
  if (dealCards == true || dealCards == null) {
    for (let suit in suits) {
      for (let value in values) {
        deck.push(values[value] + " of " + suits[suit]);
      }
    }
    // Shuffle deck
    let numberOfCards = deck.length;
    for (let i = 0; i < numberOfCards; i++) {
      let j = Math.floor(Math.random() * numberOfCards);
      let tmp = deck[i];
      deck[i] = deck[j];
      deck[j] = tmp;
    }
  }
}
let holdCard1 = document.getElementById("SwitchCard1")
let holdCard2 = document.getElementById("SwitchCard2")
let holdCard3 = document.getElementById("SwitchCard3")
let holdCard4 = document.getElementById("SwitchCard4")
let holdCard5 = document.getElementById("SwitchCard5")

document.getElementById("winningTittle").innerHTML = "";
document.getElementById("doublingCard").innerHTML = "";

  if (holdCard1.value == "Keep" && dealCards == false) {
    holdCard1.value = "Switch"
  }
  if (holdCard2.value == "Keep" && dealCards == false) {
    holdCard2.value = "Switch"
  }
  if (holdCard3.value == "Keep" && dealCards == false) {
    holdCard3.value = "Switch"
  }
  if (holdCard4.value == "Keep" && dealCards == false) {
    holdCard4.value = "Switch"
  }
  if (holdCard5.value == "Keep" && dealCards == false) {
    holdCard5.value = "Switch"
  }
  if (holdCard1.value == "Switch") {
    document.getElementById("displayCardsOne").innerHTML = deck.pop();
    //document.getElementById("displayCardsOne").innerHTML = "2 of Clubs";
  }
  if (holdCard2.value == "Switch") {
    document.getElementById("displayCardsTwo").innerHTML = deck.pop();
    //document.getElementById("displayCardsTwo").innerHTML = "Jack of Clubs";
  }
  if (holdCard3.value == "Switch") {
    document.getElementById("displayCardsThree").innerHTML = deck.pop();
    //document.getElementById("displayCardsThree").innerHTML = "Queen of Clubs";
  }
  if (holdCard4.value == "Switch") {
    document.getElementById("displayCardsFour").innerHTML = deck.pop();
    //document.getElementById("displayCardsFour").innerHTML = "King of Clubs";
  }
  if (holdCard5.value == "Switch") {
    document.getElementById("displayCardsFive").innerHTML = deck.pop();
    //document.getElementById("displayCardsFive").innerHTML = "Ace of Clubs";
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


    function defineWins() {
      let card1 = document.getElementById("displayCardsOne").innerHTML;
      let card2 = document.getElementById("displayCardsTwo").innerHTML;
      let card3 = document.getElementById("displayCardsThree").innerHTML;
      let card4 = document.getElementById("displayCardsFour").innerHTML;
      let card5 = document.getElementById("displayCardsFive").innerHTML;
      let card1Number = null
      let card2Number = null
      let card3Number = null
      let card4Number = null
      let card5Number = null

      if (card1.length == 3) {
            card1Number = 10
      } else if (card1.substr(0,1) == "A") {
            card1Number = 14
      } else if (card1.substr(0,1) == "K") {
        card1Number = 13
      } else if (card1.substr(0,1) == "Q") {
        card1Number = 12
      } else if (card1.substr(0,1) == "J") {
        card1Number = 11
      } else {
        card1Number = Number(card1.substr(0,1))
      }
      if (card2.length == 3) {
        card2Number = 10
  } else if (card2.substr(0,1) == "A") {
        card2Number = 14
  } else if (card2.substr(0,1) == "K") {
    card2Number = 13
  } else if (card2.substr(0,1) == "Q") {
    card2Number = 12
  } else if (card2.substr(0,1) == "J") {
    card2Number = 11
  } else {
    card2Number = Number(card2.substr(0,1))
  }
  if (card3.length == 3) {
    card3Number = 10
} else if (card3.substr(0,1) == "A") {
    card3Number = 14
} else if (card3.substr(0,1) == "K") {
card3Number = 13
} else if (card3.substr(0,1) == "Q") {
card3Number = 12
} else if (card3.substr(0,1) == "J") {
card3Number = 11
} else {
  card3Number = Number(card3.substr(0,1))
}
if (card4.length == 3) {
  card4Number = 10
} else if (card4.substr(0,1) == "A") {
  card4Number = 14
} else if (card4.substr(0,1) == "K") {
card4Number = 13
} else if (card4.substr(0,1) == "Q") {
card4Number = 12
} else if (card4.substr(0,1) == "J") {
card4Number = 11
} else {
  card4Number = Number(card4.substr(0,1))
}
if (card5.length == 3) {
  card5Number = 10
} else if (card5.substr(0,1) == "A") {
  card5Number = 14
} else if (card5.substr(0,1) == "K") {
card5Number = 13
} else if (card5.substr(0,1) == "Q") {
card5Number = 12
} else if (card5.substr(0,1) == "J") {
card5Number = 11
} else {
card5Number = Number(card5.substr(0,1))
}
      let cardArray = [card1Number, card2Number, card3Number, card4Number, card5Number]
      function defineFlushAndStraight() {
        function checkPairs() {
          let pair = 0
          for (let i = 1; i <= 4; i++) {
              if (cardArray[0] == cardArray[i]) {
                  pair = pair + 1;
              }
          }
          for (let i = 2; i <= 4; i++) {
              if (cardArray[1] == cardArray[i]) {
                  pair = pair + 1;
              }
          }
          for (let i = 3; i <= 4; i++) {
              if (cardArray[2] == cardArray[i]) {
                  pair = pair + 1;
              }
          }
          for (let i = 4; i <= 4; i++) {
              if (cardArray[3] == cardArray[i]) {
                  pair = pair + 1;
              }
          }
              if (pair == 2 && dealCards == true) {
                  document.getElementById("winningTittle").innerHTML = "Two pairs";
                  winningMoney = payoutWinTwoPairs;
           }  else if (pair == 3 && dealCards == true) {
                  document.getElementById("winningTittle").innerHTML = "Three of a Kind";
                  winningMoney = payoutWinThreeOfAKind;
           }  else if (pair == 4 && dealCards == true) {
                  document.getElementById("winningTittle").innerHTML = "Full House";
                  winningMoney = payoutWinFullHouse;
           }  else if (pair == 6 && dealCards == true) {
                  document.getElementById("winningTittle").innerHTML = "Four of a Kind";
                  winningMoney = payoutWinFourOfAKind;
           } 
          
          };
        let flush = false;
        let straight = false;
        let straightFlush = false;
        let royalFlush = false;
        if (document.getElementById("displayCardsOne").textContent.includes("♥") &&
        document.getElementById("displayCardsTwo").textContent.includes("♥") &&
        document.getElementById("displayCardsThree").textContent.includes("♥") &&
        document.getElementById("displayCardsFour").textContent.includes("♥") &&
        document.getElementById("displayCardsFive").textContent.includes("♥")) {
          flush = true
        } else if (document.getElementById("displayCardsOne").textContent.includes("♦") &&
        document.getElementById("displayCardsTwo").textContent.includes("♦") &&
        document.getElementById("displayCardsThree").textContent.includes("♦") &&
        document.getElementById("displayCardsFour").textContent.includes("♦") &&
        document.getElementById("displayCardsFive").textContent.includes("♦")) {
          flush = true
      } else if  (document.getElementById("displayCardsOne").textContent.includes("♣") &&
      document.getElementById("displayCardsTwo").textContent.includes("♣") &&
      document.getElementById("displayCardsThree").textContent.includes("♣") &&
      document.getElementById("displayCardsFour").textContent.includes("♣") &&
      document.getElementById("displayCardsFive").textContent.includes("♣")) {
        flush = true
      } else if  (document.getElementById("displayCardsOne").textContent.includes("♠") &&
      document.getElementById("displayCardsTwo").textContent.includes("♠") &&
      document.getElementById("displayCardsThree").textContent.includes("♠") &&
      document.getElementById("displayCardsFour").textContent.includes("♠") &&
      document.getElementById("displayCardsFive").textContent.includes("♠")) {
        flush = true
      } if (flush == true && straight == false && dealCards == true) {
        document.getElementById("winningTittle").innerHTML = "Flush";
        winningMoney = payoutWinFlush;
      }
        cardArray.sort(function(a, b){return a-b});
        if (cardArray[1] == cardArray[0] + 1 && cardArray[2] == cardArray[1] + 1 && cardArray[3] == cardArray[2] + 1 && cardArray[4] == cardArray[3] + 1) {
            straight = true
        } else if (cardArray[0] == 2 && cardArray[1] == 3 && cardArray[2] == 4 && cardArray[3] == 5 && cardArray[4] == 14) {
          straight = true
        }
        if (straight == true && flush == false && dealCards == true) {
          document.getElementById("winningTittle").innerHTML = "Straight";
          winningMoney = payoutWinStraight;
        }
        if (flush == true && straight == true) {
          straightFlush = true
        }
        if (straightFlush == true && royalFlush == false && dealCards == true) {
          document.getElementById("winningTittle").innerHTML = "Straight Flush";
          winningMoney = payoutWinStraightFlush;
        }
        if (straightFlush == true && cardArray[0] == 10) {
          royalFlush = true
        }
        if (royalFlush == true && dealCards == true) {
          document.getElementById("winningTittle").innerHTML = "Royal Flush";
          winningMoney = payoutWinRoyalFlush;
        }
        checkPairs();
      };
      defineFlushAndStraight();
      };
  //Winning payout values
  let payoutWinTwoPairs = 2;
  let payoutWinThreeOfAKind = 3;
  let payoutWinStraight = 4;
  let payoutWinFlush = 5;
  let payoutWinFullHouse = 8;
  let payoutWinFourOfAKind = 16;
  let payoutWinStraightFlush = 25;
  let payoutWinRoyalFlush = 50;

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
    defineWins();
    if (dealCards == true) {
      nappit.forEach(nappi => {
        nappi.disabled = true;
      })
    }

    if (winningMoney == 0 && dealCards == true) {
      document.getElementById("winningTittle").innerHTML = "No win";
    }
    if (winningMoney > 0) {
      document.getElementById("winningMoneyDisplay").innerHTML = "Win:" + " " + winningMoney + "€";
    }
      if (winningMoney == 0) {
        document.getElementById("displayMoney").innerHTML = "Money:" + " " + moneyValue + "€";
        document.getElementById("winningMoneyDisplay").innerHTML = "";
      } else if (winningMoney > 0 && dealCards == false ) {
        document.getElementById("winningMoneyDisplay").innerHTML = "";
        moneyValue = moneyValue + winningMoney;
        document.getElementById("displayMoney").innerHTML = "Money:" + " " + moneyValue + "€";
        winningMoney = 0;
        
      }
      if (winningMoney == 0) {
        tuplausLukkot.forEach(tuplaus => {
          tuplaus.disabled = true;
        })
      } else if (winningMoney >= 1) {
        tuplausLukkot.forEach(tuplaus => {
          tuplaus.disabled = false;
        })
      }

    //document.getElementById("displayMoney").innerHTML = "Money:" + " " + moneyValue + "€";
    document.getElementById("doublingTittle").innerHTML = "";
}
// Display image test
let cardImageValue1 = document.getElementById("displayCardsOne").innerHTML
let cardImageValue2 = document.getElementById("displayCardsTwo").innerHTML
let cardImageValue3 = document.getElementById("displayCardsThree").innerHTML
let cardImageValue4 = document.getElementById("displayCardsFour").innerHTML
let cardImageValue5 = document.getElementById("displayCardsFive").innerHTML

switch (cardImageValue1) {
    case '2♣':
    console.log('Risti kaksi');
    document.getElementById("displayImageOne").classList.add("risti2");
    document.getElementById("displayImageOne").classList.add("cardImageStyle");
    break;
    case '3♣':
      document.getElementById("displayImageOne").classList.add("risti3");
      document.getElementById("displayImageOne").classList.add("cardImageStyle");
    break;
    case '4♣':
      document.getElementById("displayImageOne").classList.add("risti4");
      document.getElementById("displayImageOne").classList.add("cardImageStyle");
    break;
    case '5♣':
      document.getElementById("displayImageOne").classList.add("risti5");
      document.getElementById("displayImageOne").classList.add("cardImageStyle");
    break;
    case '6♣':
      document.getElementById("displayImageOne").classList.add("risti6");
      document.getElementById("displayImageOne").classList.add("cardImageStyle");
    break;
    case '7♣':
      document.getElementById("displayImageOne").classList.add("risti7");
      document.getElementById("displayImageOne").classList.add("cardImageStyle");
    break;
    case '8♣':
      document.getElementById("displayImageOne").classList.add("risti8");
      document.getElementById("displayImageOne").classList.add("cardImageStyle");
    break;
    case '9♣':
      document.getElementById("displayImageOne").classList.add("risti9");
      document.getElementById("displayImageOne").classList.add("cardImageStyle");
    break;
    case '10♣':
      document.getElementById("displayImageOne").classList.add("risti10");
      document.getElementById("displayImageOne").classList.add("cardImageStyle");
    break;
    case 'J♣':
      document.getElementById("displayImageOne").classList.add("ristiJ");
      document.getElementById("displayImageOne").classList.add("cardImageStyle");
    break;
    case 'Q♣':
      document.getElementById("displayImageOne").classList.add("ristiQ");
      document.getElementById("displayImageOne").classList.add("cardImageStyle");
    break;
    case 'K♣':
      document.getElementById("displayImageOne").classList.add("ristiK");
      document.getElementById("displayImageOne").classList.add("cardImageStyle");
    break;
    case 'A♣':
      document.getElementById("displayImageOne").classList.add("ristiA");
      document.getElementById("displayImageOne").classList.add("cardImageStyle");
    break;

    case '2♥':
    console.log('Risti seiska');
    break;
    case '3♥':
    console.log('Risti seiska');
    break;
    case '4♥':
    console.log('Risti seiska');
    break;
    case '5♥':
    console.log('Risti seiska');
    break;
    case '6♥':
    console.log('Risti seiska');
    break;
    case '7♥':
    console.log('Risti seiska');
    break;
    case '8♥':
    console.log('Risti seiska');
    break;
    case '9♥':
    console.log('Risti seiska');
    break;
    case '10♥':
    console.log('Risti seiska');
    break;
    case 'J♥':
    console.log('Risti seiska');
    break;
    case 'Q♥':
    console.log('Risti seiska');
    break;
    case 'K♥':
    console.log('Risti seiska');
    break;
    case 'A♥':
    console.log('Risti seiska');
    break;
      case '2♠':
      console.log('Risti seiska');
      break;
      case '3♠':
      console.log('Risti seiska');
      break;
      case '4♠':
      console.log('Risti seiska');
      break;
      case '5♠':
      console.log('Risti seiska');
      break;
      case '6♠':
      console.log('Risti seiska');
      break;
      case '7♠':
      console.log('Risti seiska');
      break;
      case '8♠':
      console.log('Risti seiska');
      break;
      case '9♠':
      console.log('Risti seiska');
      break;
      case '10♠':
      console.log('Risti seiska');
      break;
      case 'J♠':
      console.log('Risti seiska');
      break;
      case 'Q♠':
      console.log('Risti seiska');
      break;
      case 'K♠':
      console.log('Risti seiska');
      break;
      case 'A♠':
      console.log('Risti seiska');
      break;
      case '2♦':
      console.log('Risti seiska');
      break;
      case '3♦':
      console.log('Risti seiska');
      break;
      case '4♦':
      console.log('Risti seiska');
      break;
      case '5♦':
      console.log('Risti seiska');
      break;
      case '6♦':
      console.log('Risti seiska');
      break;
      case '7♦':
      console.log('Risti seiska');
      break;
      case '8♦':
      console.log('Risti seiska');
      break;
      case '9♦':
      console.log('Risti seiska');
      break;
      case '10♦':
      console.log('Risti seiska');
      break;
      case 'J♦':
      console.log('Risti seiska');
      break;
      case 'Q♦':
      console.log('Risti seiska');
      break;
      case 'K♦':
      console.log('Risti seiska');
      break;
      case 'A♦':
      console.log('Risti seiska');
      break;
}

  };
  function doublingStart() {
    if (winningMoney > 0) {
      document.getElementById("doublingTittle").innerHTML = "Pick Low or High";
    } else {
      
    }
  };
   function doublingGenerateCard() {
    // create deck
    let deck = [];
    for (let suit in suits) {
      for (let value in values) {
        deck.push(values[value] + " of " + suits[suit]);
      }
    }
    // Shuffle deck
    let numberOfCards = deck.length;
    for (let i = 0; i < numberOfCards; i++) {
      let j = Math.floor(Math.random() * numberOfCards);
      let tmp = deck[i];
      deck[i] = deck[j];
      deck[j] = tmp;
    }
    let doublingCardValue = deck.pop();
    // Pick font color
    if (doublingCardValue.includes("Diamond") || doublingCardValue.includes("Hearts")) {
      document.getElementById("doublingCard").classList.remove("black");
      document.getElementById("doublingCard").classList.add("red");
     }
     else if (doublingCardValue.includes("Clubs") || doublingCardValue.includes("Spades")) {
      document.getElementById("doublingCard").classList.remove("red");
      document.getElementById("doublingCard").classList.add("black");
      }
      let newCard1 = doublingCardValue.replace(" of ","");
      let newCard2 = null;
      let doublingCardDisplay = null;
    if (newCard1.includes("Ace")) {
      newCard2 = newCard1.replace("Ace","A")
    } else if (newCard1.includes("King")) {
      newCard2 = newCard1.replace("King","K")
    } else if (newCard1.includes("Queen")) {
      newCard2 = newCard1.replace("Queen","Q")
    } else if (newCard1.includes("Jack")) {
      newCard2 = newCard1.replace("Jack","J")
    } else {
      newCard2 = newCard1
    } 
    if (newCard2.includes("Hearts")) {
      doublingCardDisplay = newCard2.replace("Hearts","♥")
    } else if (newCard2.includes("Diamonds")) {
      doublingCardDisplay = newCard2.replace("Diamonds","♦")
    } else if (newCard2.includes("Clubs")) {
      doublingCardDisplay = newCard2.replace("Clubs","♣")
    } else if (newCard2.includes("Spades")) {
      doublingCardDisplay = newCard2.replace("Spades","♠")
    }
    document.getElementById("doublingCard").innerHTML = doublingCardDisplay;
  };
  function doublingPickLow() {
    if (winningMoney > 0) {
    doublingGenerateCard();
    // Get card value
    let doublingCard1 = document.getElementById("doublingCard").innerHTML
    let doublingCard2 = null
    let doublingCardValue = null
    const tuplausLukkot = document.querySelectorAll(".tuplaus");
    if (doublingCard1.length == 3) {
      doublingCard2 = document.getElementById("doublingCard").innerHTML.substr(0,2)
    } else if (doublingCard1.length == 2) {
    doublingCard2 = document.getElementById("doublingCard").innerHTML.substr(0,1)
    } if (doublingCard2 == "A") {
      doublingCardValue = 1
    } else if (doublingCard2 == "K") {
      doublingCardValue = 13
    } else if (doublingCard2 == "Q") {
      doublingCardValue = 12
    } else if (doublingCard2 == "J") {
      doublingCardValue = 11
    } else doublingCardValue = Number(doublingCard2)
    // Check if number is low
       if (doublingCardValue < 7) {
        winningMoney = winningMoney * 2;
        document.getElementById('doublingTittle').innerHTML = "You Win"
        document.getElementById("winningMoneyDisplay").innerHTML = "Win:" + " " + winningMoney + "€";
      } else if (doublingCardValue >= 7) {
        winningMoney = 0;
        document.getElementById('doublingTittle').innerHTML = "You Lose"
        document.getElementById("winningMoneyDisplay").innerHTML = "";
        tuplausLukkot.forEach(nappi => {
          nappi.disabled = true;
        });

        
      }
} else {
  document.getElementById('doublingTittle').innerHTML = "No money"
  document.getElementById("doublingCard").innerHTML = "";
}
  }

  function doublingPickHigh() {
    if (winningMoney > 0) {
    doublingGenerateCard();
    // Get card value
    let doublingCard1 = document.getElementById("doublingCard").innerHTML
    let doublingCard2 = null
    let doublingCardValue = null
    const tuplausLukkot = document.querySelectorAll(".tuplaus");
    if (doublingCard1.length == 3) {
      doublingCard2 = document.getElementById("doublingCard").innerHTML.substr(0,2)
    } else if (doublingCard1.length == 2) {
    doublingCard2 = document.getElementById("doublingCard").innerHTML.substr(0,1)
    } if (doublingCard2 == "A") {
      doublingCardValue = 1
    } else if (doublingCard2 == "K") {
      doublingCardValue = 13
    } else if (doublingCard2 == "Q") {
      doublingCardValue = 12
    } else if (doublingCard2 == "J") {
      doublingCardValue = 11
    } else doublingCardValue = Number(doublingCard2)
    // Check if number is High
       if (doublingCardValue > 7) {
        winningMoney = winningMoney * 2;
        document.getElementById('doublingTittle').innerHTML = "You Win"
        document.getElementById("winningMoneyDisplay").innerHTML = "Win:" + " " + winningMoney + "€";
      } else if (doublingCardValue <= 7) {
        winningMoney = 0;
        document.getElementById('doublingTittle').innerHTML = "You Lose"
        document.getElementById("winningMoneyDisplay").innerHTML = "";
        tuplausLukkot.forEach(nappi => {
          nappi.disabled = true;
        });

      }
} else {
  document.getElementById('doublingTittle').innerHTML = "No money"
  document.getElementById("doublingCard").innerHTML = "";
}
  }

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
  function checkDealTrueOrNot(){
    console.log(dealCards);
    console.log(winningMoney);
  }

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
  //document.getElementById("displayMoney").innerHTML = moneyValue = moneyValue + 2;
  //♠♥♦♣


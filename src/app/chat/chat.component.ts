import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  holidayRecommendations = [
    { id: 0, name: "Uptown at Bali, Indonesia" },
    { id: 1, name: "Relaxamax at New Orleans, USA" },
    { id: 2, name: "WindyBeach at Ventry, Ireland" },
    { id: 3, name: "Twighlight at Marrakech, Morocco" },
    { id: 4, name: "TooHot at Sydney, Australia" },
    { id: 5, name: "Castaway at The Maldives" },
    { id: 6, name: "Eiffel Park at Paris, France" },
    { id: 7, name: "The Cape at Cape Town, South Africa" },
    { id: 8, name: "Desert Dreams at Dubai, United Arab Emirates" },
    { id: 9, name: "Sea Views at Bora Bora, French Polynesia" },
    { id: 10, name: "Apple City at New York, U.S.A" },
    { id: 11, name: "Island Hopper at Dubrovnik, Croatia" },
    { id: 12, name: "Castle Town at Edinburgh, Scotland" },
    { id: 13, name: "Wine Valley at Rome, Italy" },
    { id: 14, name: "Weary Traveller at Paro Valley, Bhutan" },
    { id: 15, name: "Hot Times at Jaipur, India" },
    { id: 16, name: "Forest Retreat at Waikato, New Zealand" },
    { id: 17, name: "Casablance at Havana, Cuba" },
    { id: 18, name: "Tech City at Tokyo, Japan" },
    { id: 19, name: "Ice Hotel at Base Marambio, Antartica" },
    { id: 20, name: "NorthStar at Greenland" }
  ];

  newList = this.holidayRecommendations;
  
  budgetList: number[] = [];
  terrainList: number[] = [];
  tempList: number[] = [];
  activelazyList: number[] = [];
  continentList: number[] = [];

  questionNumber = 1;

  cheap = false;
  expensive = false;
  city = false;
  mountain = false;
  sea = false;
  cold = false;
  mild = false;
  hot = false;
  lazy = false;
  active = false;
  europe = false;
  northAmerica = false;
  africa = false;
  arctic = false;
  antartica = false;
  asia = false;
  australia = false;

  constructor() { }

  ngOnInit(): void {
  }

  removeSelected(selected: number[], category: string): any {
    if(category == "budget") {
      this.budgetList = selected
    }
    if(category == "terrain") {
      this.terrainList = selected
    }
    if(category == "temp") {
      this.tempList = selected
    }
    if(category == "activelazy") {
      this.activelazyList = selected
    }
    if(category == "continent") {
      this.continentList = selected
    }

    let otherList = [...this.budgetList, ...this.terrainList, ...this.tempList, ...this.activelazyList, ...this.continentList]

    this.newList = this.holidayRecommendations.filter((holidayRecommendation) => {
      return !otherList.includes(holidayRecommendation.id);
    })
    
    console.log(this.newList)
  }

  incrementQuestion() {
    this.questionNumber = this.questionNumber + 1;
  }

  reloadPage() {
    window.location.reload();
  }

  choseCheap() {
    this.cheap = true;
  }
  choseExpensive() {
    this.expensive = true;
  }
  choseCity() {
    this.city = true;
  }
  choseMountain() {
    this.mountain = true;
  }
  choseSea() {
    this.sea = true;
  }
  choseCold() {
    this.cold = true;
  }
  choseMild() {
    this.mild = true;
  }
  choseHot() {
    this.hot = true;
  }
  choseLazy() {
    this.lazy = true;
  }
  choseActive() {
    this.active = true;
  }
  choseEurope() {
    this.europe = true;
  }
  choseNorthAmerica() {
    this.northAmerica = true;
  }
  choseAfrica() {
    this.africa = true;
  }
  choseArctic() {
    this.arctic = true;
  }
  choseAntartica() {
    this.antartica = true;
  }
  choseAsia() {
    this.asia = true;
  }
  choseAustralia() {
    this.australia = true;
  }

}

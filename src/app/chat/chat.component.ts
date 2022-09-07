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

  questionNumber = 0;
  firstQuestion: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  startQuestions() {

  }

  checkRecommendations() {
    if (this.holidayRecommendations.length = 1) {
      this.showFinalRecommendation()
    }
  }

  showFinalRecommendation() {

  }

  firstQuestionAsked(id: number) {
    this.holidayRecommendations = this.holidayRecommendations.filter(item => item.id !== id);
    console.log(this.holidayRecommendations);
  }

  secondQuestionAsked() {

  }

  thirdQuestionAsked() {

  }
}

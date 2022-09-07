import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  holidayRecommendations = 
  [
    "Uptown at Bali, Indonesia",
    "Relaxamax at New Orleans, USA",
    "WindyBeach at Ventry, Ireland",
    "Twighlight at Marrakech, Morocco",
    "TooHot at Sydney, Australia",
    "Castaway at The Maldives",
    "Eiffel Park at Paris, France",
    "The Cape at Cape Town, South Africa",
    "Desert Dreams at Dubai, United Arab Emirates",
    "Sea Views at Bora Bora, French Polynesia",
    "Apple City at New York, U.S.A",
    "Island Hopper at Dubrovnik, Croatia",
    "Castle Town at Edinburgh, Scotland",
    "Wine Valley at Rome, Italy",
    "Weary Traveller at Paro Valley, Bhutan",
    "Hot Times at Jaipur, India",
    "Forest Retreat at Waikato, New Zealand",
    "Casablance at Havana, Cuba",
    "Tech City at Tokyo, Japan",
    "Ice Hotel at Base Marambio, Antartica",
    "NorthStar at Greenland",
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
    this.holidayRecommendations = this.holidayRecommendations;
  }

  firstQuestionAsked(msg: string) {
    const index: number = this.holidayRecommendations.indexOf(msg);

    if(this.firstQuestion = true) {
      this.holidayRecommendations.splice(index, 1)
      console.log(this.holidayRecommendations)
    }
  }

  secondQuestionAsked() {

  }

  thirdQuestionAsked() {

  }
}

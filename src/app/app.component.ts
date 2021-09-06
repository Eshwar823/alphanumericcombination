import { OnInit, Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alpha-numeric-combinations';
  phonenumber: string;
  combinationList = [];
  dialList = ["", "", "ABC", "DEF", "GHI", "JKL",
    "MNO", "PQRS", "TUV", "WXYZ"];
  phoneNumberForm: FormGroup;
  subPhoneNumber: string;

  totalCount: number;
  constructor(private fb: FormBuilder) {
    this.myForm();
  }
  myForm() {
    this.phoneNumberForm = this.fb.group({
      number: ['', [Validators.required, Validators.pattern('[0-9]{3} [0-9]{3} [0-9]{4}')]]
    });
  }

  getCombinations(): void {
    if (this.phoneNumberForm.valid) {
      this.combinationList = [];
      let numberToConvert = [];
      let copyPhonenumber = this.phonenumber.replace(/ /g, "");
      let numbers = copyPhonenumber.split('');
      for (let i = numbers.length; i > 0; i--) {
        if (numbers[i] === '1' || numbers[i] === '0') {
          this.subPhoneNumber = copyPhonenumber.slice(0, i + 1);
          numberToConvert = numbers.slice(i + 1, numbers.length);
          break;
        }
      }
      if(numberToConvert.length > 0) {
        this.getListOfCombinations(numberToConvert, 0, [], numberToConvert.length)
      } else {
        this.subPhoneNumber = "";
        this.getListOfCombinations(numbers, 0, [], numbers.length)
      }
      
    }
  }

  getListOfCombinations(number, curr, output, n) {
    if (curr == n) {
      this.combinationList.push({ 'number': this.subPhoneNumber + output.join("") })
      return;
    }

    for (let i = 0;
      i < this.dialList[number[curr]].length;
      i++) {
      output.push(this.dialList[number[curr]][i]);
      this.getListOfCombinations(number, curr + 1, output, n);

      output.pop();

    }
    this.totalCount = this.combinationList.length;
  }
}

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
  temporaryarray: string;

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
      let before;
      let copyPhonenumber = this.phonenumber.replace(/ /g, "");
      let numbers = copyPhonenumber.split('');
      for (let i = numbers.length; i > 0; i--) {
        if (numbers[i] === '1' || numbers[i] === '0') {
          this.temporaryarray = copyPhonenumber.slice(0, i + 1);
          before = numbers.slice(i + 1, numbers.length);
          break;
        }
      }
      this.getListOfCombinations(before, 0, [], before.length)
    }
  }

  getListOfCombinations(number, curr, output, n) {
    if (curr == n) {
      this.combinationList.push({ 'number': this.temporaryarray + output.join("") })
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

class CalculatorAccordion {
  constructor (){
    this.chbIsSingle = document.getElementById('myonoffswitch');
    this.chbIsBottom = document.getElementById('myonoffswitch-two');
    this.isHidden = document.querySelectorAll('.second-will');
    this.totalResult = document.getElementById('calc-result');
    this.selectors = [...document.querySelectorAll('select')];
    this.inputs = document.querySelectorAll('input');
    
    this.body = {
      total: 0,
      whichSeptic: [],
      distanceToHome: 0
    };
  }

  calcSection1() {
    if (this.chbIsSingle.checked) {
      this.body.total = +10000;
      this.isHidden.forEach( item => item.classList.add('hidden'));
      this.body.whichSeptic.splice(0,1,'Однокамерный');
    } else if (!this.chbIsSingle.checked) {
      this.body.total = +15000;
      this.isHidden.forEach( item => item.classList.remove('hidden'));
      this.body.whichSeptic.splice(0,1,'Двухкамерный');
    } 
  }

  calcSection2() {
    let isTwo = !this.chbIsSingle.checked;
    let diametrProcent = 0;
    if (this.selectors[0].value == 1 ){
      diametrProcent += 0.2;
    }
    if(isTwo && this.selectors[2].value == 1) {
      diametrProcent += 0.2;
    }
    this.body.total += this.body.total * diametrProcent;
    let ringsProcent = 0;
    if (this.selectors[1].value == 1){
      ringsProcent += 0.3;
    } else if (this.selectors[1].value == 2){
      ringsProcent += 0.5;
    }
    if(isTwo) {
      if (this.selectors[3].value == 1){
        ringsProcent += 0.3;
      } else if (this.selectors[3].value == 2){
        ringsProcent += 0.5;
      }
    }
    this.body.total += this.body.total * ringsProcent;
  }

  calcSection3() {
    let isTwo = !this.chbIsSingle.checked;
    let isFilterSelected = this.chbIsBottom.checked;
    if(isFilterSelected) {
      this.body.total += 1000 * (isTwo + 1);
    }
  }

  saveSection4() {
    this.distanceToHome = this.inputs[5].value;
  }

  calculateAll() {
    this.body.total = 0;
    this.calcSection1();
    this.calcSection2();
    this.calcSection3();
    this.totalResult.value = this.body.total;
  }

  init() {
    this.chbIsSingle.checked = false; 
    this.chbIsBottom.checked = false;
    
    this.chbIsSingle.addEventListener('change', this.calculateAll.bind(this));
    for (let i = 0; i < this.selectors.length; i++) {
      this.selectors[i].addEventListener('change', this.calculateAll.bind(this));
    }
    this.chbIsBottom.addEventListener('change', this.calculateAll.bind(this));
    this.inputs[5].addEventListener('input', this.saveSection4.bind(this));
  }

}

export default CalculatorAccordion;
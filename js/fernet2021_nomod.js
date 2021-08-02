function habilitarInput(idInput, isChecked) {
    let input = document.querySelector('#'+idInput);
    input.disabled = !isChecked;
    input.value = "";
}

function updtRange(self, flag) {
    const thisRange = self.dataset.thisrange;
    const lblRange = document.querySelector('#lblRange'+thisRange);
    lblRange.innerHTML = self.value;

    if(flag){
        const opRange = self.dataset.oprange;
        const lblOpRange = document.querySelector('#lblRange'+opRange);
        const inputOpRange = document.querySelector('#range'+opRange);
        lblOpRange.innerHTML = 100-self.value;
        inputOpRange.value = 100-self.value;
    }
}
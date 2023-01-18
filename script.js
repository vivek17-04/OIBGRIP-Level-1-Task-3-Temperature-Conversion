const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;


    const CelToFah =(cel) =>{
        let farenheit =  Math.round((cel*9/5) +32);
        return farenheit;
    }
    const FahToCel =(fah) =>{
        let celcius =  Math.round((fah -32) *5/9);
        return celcius;
    }

    let result;

    if (valueTemp === 'cel') {
        result = CelToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}° Farenheit`
    }

    else {
        result = FahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}° Celcius`
    }

}
function changeUnitsToMetric() {
    console.log('Metric ')
    document.getElementById('metric').style.display = "flex"
    document.getElementById('imperial').style.display = "none"
    document.getElementsByClassName('result-box')[0].style.display = "none"
    document.getElementsByClassName('welcome-box')[0].style.display = "flex"
    document.getElementById('imperial-height-ft').value = "";
    document.getElementById('imperial-height-in').value = "";
    document.getElementById('imperial-weight-lb').value = "";
}

function changeUnitsToImperial() {
    console.log('Imperial')
    document.getElementById('metric').style.display = "none"
    document.getElementById('imperial').style.display = "flex"
    document.getElementsByClassName('result-box')[0].style.display = "none"
    document.getElementsByClassName('welcome-box')[0].style.display = "flex"
    document.getElementById('metric-height-cm').value = "";
    document.getElementById('metric-weight-kg').value = "";
}

function calculateBmiMetric() {
    let metricHeightInCm = document.getElementById('metric-height-cm').value;
    let metricWeightInKg = document.getElementById('metric-weight-kg').value;
    let metricHeightInM = metricHeightInCm / 100
    let metricHeightInMSquared = metricHeightInM * metricHeightInM
    let bmi = (metricWeightInKg / metricHeightInMSquared).toFixed(1)
    document.getElementById('bmi-value').textContent = bmi
    let actualHeight = metricHeightInM
    let actualWeight = metricWeightInKg

    let bmiCategory
    switch (true) {
        case (bmi < 18.5):
            bmiCategory = "Underweight";
            break;
        case (bmi >= 18.5 && bmi < 25):
            bmiCategory = "Normal weight";
            break;
        case (bmi >= 25 && bmi < 30):
            bmiCategory = "Overweight";
            break;
        case (bmi >= 30):
            bmiCategory = "Obese";
            break;
        default:
            bmiCategory = "Invalid BMI";
    }
    document.getElementById('bmi-category').textContent = bmiCategory
    let targetBMI1 = 18.5
    let targetBMI2 = 24.9
    let idealWeight1
    let idealWeight2
    let weightDifference1 = (Math.abs(targetBMI1 - bmi)) * (actualHeight * actualHeight);
    let weightDifference2 = (Math.abs(targetBMI2 - bmi)) * (actualHeight * actualHeight);
    if (bmiCategory == "Overweight" || bmiCategory == "Obese") {
        document.getElementById('hide-normal-weight').style.display = "block"
        idealWeight1 = (Math.abs(weightDifference1 - actualWeight)).toFixed(1)
        idealWeight2 = (Math.abs(weightDifference2 - actualWeight)).toFixed(1)
        if (bmiCategory == "Overweight") {
            document.getElementsByClassName('result')[0].style.backgroundColor = "#FD6652"
            document.getElementsByClassName('result-box')[0].style.display = "flex"
            document.getElementsByClassName('welcome-box')[0].style.display = "none"
        } else {
            document.getElementsByClassName('result')[0].style.backgroundColor = "#e93c5e"
            document.getElementsByClassName('result-box')[0].style.display = "flex"
            document.getElementsByClassName('welcome-box')[0].style.display = "none"
        }
    } else if (bmiCategory == "Underweight") {
        document.getElementById('hide-normal-weight').style.display = "block"
        idealWeight1 = (weightDifference1 + +actualWeight).toFixed(1)
        idealWeight2 = (weightDifference2 + +actualWeight).toFixed(1)
        document.getElementsByClassName('result')[0].style.backgroundColor = "#FD6652"
        document.getElementsByClassName('result-box')[0].style.display = "flex"
        document.getElementsByClassName('welcome-box')[0].style.display = "none"
    } else if (bmiCategory == "Normal weight") {
        document.getElementById('hide-normal-weight').style.display = "none"
        document.getElementsByClassName('result')[0].style.backgroundColor = "#05CEAA"
        document.getElementsByClassName('result-box')[0].style.display = "flex"
        document.getElementsByClassName('welcome-box')[0].style.display = "none"
    }
    document.getElementById('result-range').textContent = idealWeight1 + "kgs - " + idealWeight2 + "kgs"
}

function calculateBmiImperial() {
    let imperialHeightInFt = +document.getElementById('imperial-height-ft').value;
    console.log(imperialHeightInFt)
    let imperialHeightInInch = +document.getElementById('imperial-height-in').value;
    console.log(imperialHeightInInch)
    let totalImperialHeightInInch = imperialHeightInFt * 12 + imperialHeightInInch;
    console.log(totalImperialHeightInInch)
    let imperialWeightInLb = +document.getElementById('imperial-weight-lb').value;
    console.log(imperialWeightInLb)
    let totalImperialHeightInInchSquared = totalImperialHeightInInch * totalImperialHeightInInch;
    console.log(totalImperialHeightInInchSquared)
    let bmi = ((imperialWeightInLb * 703) / totalImperialHeightInInchSquared).toFixed(1)
    console.log(bmi)
    // let weightInPounds = (idealBMI * (heightInInches * heightInInches)) / 703;
    document.getElementById('bmi-value').textContent = bmi
    let actualHeight = totalImperialHeightInInch
    console.log(actualHeight)
    let actualWeight = imperialWeightInLb
    console.log(actualWeight)

    let bmiCategory
    switch (true) {
        case (bmi < 18.5):
            bmiCategory = "Underweight";
            break;
        case (bmi >= 18.5 && bmi < 25):
            bmiCategory = "Normal weight";
            break;
        case (bmi >= 25 && bmi < 30):
            bmiCategory = "Overweight";
            break;
        case (bmi >= 30):
            bmiCategory = "Obese";
            break;
        default:
            bmiCategory = "Invalid BMI";
    }
    console.log(bmiCategory)

    document.getElementById('bmi-category').textContent = bmiCategory
    let targetBMI1 = 18.5
    let targetBMI2 = 24.9
    let idealWeight1
    let idealWeight2
    let weightDifference1 = ((Math.abs(targetBMI1 - bmi)) * (actualHeight * actualHeight)) / 703;
    let weightDifference2 = ((Math.abs(targetBMI2 - bmi)) * (actualHeight * actualHeight)) / 703;
    console.log(weightDifference1)
    console.log(weightDifference2)
    if (bmiCategory == "Overweight" || bmiCategory == "Obese") {
        document.getElementById('hide-normal-weight').style.visibility = "visible"
        idealWeight1 = (Math.abs(weightDifference1 - actualWeight)).toFixed(1)
        idealWeight2 = (Math.abs(weightDifference2 - actualWeight)).toFixed(1)
        if (bmiCategory == "Overweight") {
            document.getElementsByClassName('result')[0].style.backgroundColor = "#FD6652"
            document.getElementsByClassName('result-box')[0].style.display = "flex"
            document.getElementsByClassName('welcome-box')[0].style.display = "none"
        } else {
            document.getElementsByClassName('result')[0].style.backgroundColor = "#e93c5e"
            document.getElementsByClassName('result-box')[0].style.display = "flex"
            document.getElementsByClassName('welcome-box')[0].style.display = "none"
        }
    } else if (bmiCategory == "Underweight") {
        document.getElementById('hide-normal-weight').style.visibility = "visible"
        idealWeight1 = (weightDifference1 + +actualWeight).toFixed(1)
        idealWeight2 = (weightDifference2 + +actualWeight).toFixed(1)
        document.getElementsByClassName('result')[0].style.backgroundColor = "#FD6652"
        document.getElementsByClassName('result-box')[0].style.display = "flex"
        document.getElementsByClassName('welcome-box')[0].style.display = "none"
    } else if (bmiCategory == "Normal weight") {
        document.getElementById('hide-normal-weight').style.visibility = "hidden"
        document.getElementsByClassName('result')[0].style.backgroundColor = "#05CEAA"
        document.getElementsByClassName('result-box')[0].style.display = "flex"
        document.getElementsByClassName('welcome-box')[0].style.display = "none"
    }
    document.getElementById('result-range').textContent = idealWeight1 + "lbs - " + idealWeight2 + "lbs"
}

document.addEventListener('DOMContentLoaded', function () {
    const form1 = document.querySelector('metric');
    metric.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            calculateBmiMetric();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form2 = document.querySelector('imperial');
    imperial.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            calculateBmiImperial();
        }
    });
});
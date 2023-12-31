document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate-button');
    calculateButton.addEventListener('click', calculateProbability);

    function calculateProbability() {
        const tries = parseInt(document.getElementById('tries').value);
        const probability = parseFloat(document.getElementById('probability').value) / 100;
        const currentItems = parseInt(document.getElementById('current-items').value);

        const expectedItems = tries * probability;
        const roundedExpectedItems = Math.round(expectedItems); // 반올림

        const result = roundedExpectedItems - currentItems;

        let resultMessage = '';
        if (result > 0) {
            resultMessage = `${result}개의 상품을 덜 뽑으셨습니다.`;
        } else if (result < 0) {
            resultMessage = `${Math.abs(result)}개의 상품을 더 뽑으셨습니다.`;
        } else {
            resultMessage = `평균회귀하셨습니다.`;
        }

        document.getElementById('result').textContent = resultMessage;
    }
});

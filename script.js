document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate-button');
    calculateButton.addEventListener('click', calculateProbability);

    function calculateProbability() {
        const tries = parseInt(document.getElementById('tries').value);
        const probability = parseFloat(document.getElementById('probability').value) / 100;
        const currentItems = parseInt(document.getElementById('current-items').value);

        const expectedItems = tries * probability;
        const result = expectedItems - currentItems;

        let resultMessage = '';
        if (result > 0) {
            resultMessage = `추가로 약 ${result.toFixed(2)}개의 상품을 더 얻을 확률이 있습니다.`;
        } else if (result < 0) {
            resultMessage = `추가로 약 ${Math.abs(result).toFixed(2)}개의 상품이 필요합니다.`;
        } else {
            resultMessage = `유효한 상품을 이미 보유하고 있습니다.`;
        }

        document.getElementById('result').textContent = resultMessage;
    }
});

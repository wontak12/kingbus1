// 모든 파일 입력 요소를 선택하여 이벤트 리스너를 추가합니다.
document.querySelectorAll('.popupArticleInput').forEach(inputElement => {
    // 파일 입력 요소의 이전 형제 요소 (레이블 요소)를 가져옵니다.
    const labelElement = inputElement.previousElementSibling;

    // 파일 입력 요소에 'change' 이벤트 리스너를 추가합니다.
    inputElement.addEventListener('change', event => {
        // 선택된 파일의 이름을 가져옵니다.
        const fileName = event.target.files[0].name;
        
        // 레이블 요소의 텍스트 내용을 파일 이름으로 설정합니다.
        labelElement.textContent = fileName;
    });
});
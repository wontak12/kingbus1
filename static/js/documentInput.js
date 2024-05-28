
  function updateFileName(input) {
    var fileName = input.files.length > 0 ? input.files[0].name : '파일 선택';
    document.getElementById('fileUploadLabel').textContent = fileName;
  }

  function closeDocumentPopup() {
    document.getElementById('documentPopup').style.display = 'none';
  }

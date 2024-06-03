// function openDetailvehicleCreateDocument() {
//     document.getElementById("detailvehicleCreateDocument").style.display = "block";
// }

// function clseDetailvehicleCreateDocument() {
//     document.getElementById("detailvehicleCreateDocument").style.display = "none";
// }

// function openDetailInsurance(){
//     document.getElementById("detailInsurance").style.display="block";
// }

// function closeDetailInsurance(){
//     document.getElementById("detailInsurance").style.display="none";
// }

// function openDetailCertificate(){
//     document.getElementById("detailCertificate").style.display="block";
// }
// function closeDetailCertificate(){
//     document.getElementById("detailCertificate").style.display="none";
// }

// function openDetailInstallment(){
//     document.getElementById("detailInstallment").style.display="block"
// }

// function closeDetailInstallment(){
//     document.getElementById("detailInstallment").style.display="none"
// }

// function openDetailDocument(){
//     document.getElementById("detailDocument").style.display="block";
// }

// function closeDetailDocument(){
//     document.getElementById("detailDocument").style.display="none";
// }
document.querySelectorAll('.detailButton').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      document.querySelectorAll('.documentDetailContentSection > div').forEach(div => {
        div.style.display = 'none';
      });
      document.getElementById(targetId).style.display = 'block';
    });
  });
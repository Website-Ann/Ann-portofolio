// function changeToCV() {
//   const about = document.getElementById("about");
//   const soon = document.getElementById("soon");

//   about.classList.remove("visible");
//   about.classList.add("hidden");

//   soon.classList.remove("hidden");
//   soon.classList.add("visible");
// }

// function backAbout() {
//   const about = document.getElementById("about");
//   const soon = document.getElementById("soon");

//   soon.classList.remove("visible");
//   soon.classList.add("hidden");

//   about.classList.remove("hidden");
//   about.classList.add("visible");
// }


function changeToProfil() {
  const dudika = document.getElementById("dudika");
  const profil = document.getElementById("profil");

  dudika.classList.remove("visible");
  dudika.classList.add("hidden");

  profil.classList.remove("hidden");
  profil.classList.add("visible");
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dudika").classList.add("visible");
  document.getElementById("profil").classList.add("hidden");
});

function changeToAlamat() {
  const dudika = document.getElementById("dudika");
  const alamat = document.getElementById("alamat");

  dudika.classList.remove("visible");
  dudika.classList.add("hidden");

  alamat.classList.remove("hidden");
  alamat.classList.add("visible");
}

function changeToGaleri() {
  const dudika = document.getElementById("dudika");
  const galeri = document.getElementById("galeri");

  dudika.classList.remove("visible");
  dudika.classList.add("hidden");

  galeri.classList.remove("hidden");
  galeri.classList.add("visible");
}

function backDudika() {
  const dudika = document.getElementById("dudika");
  const profil = document.getElementById("profil");
  const alamat = document.getElementById("alamat");
  const galeri = document.getElementById("galeri");

  profil.classList.remove("visible");
  profil.classList.add("hidden");

  alamat.classList.remove("visible");
  alamat.classList.add("hidden");

  galeri.classList.remove("visible");
  galeri.classList.add("hidden");

  dudika.classList.remove("hidden");
  dudika.classList.add("visible");
}
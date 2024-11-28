

import Swal from "sweetalert2";

class AlertComponent {
  Error(message) {
    Swal.fire({
      icon: "error",
      title: "Pemberitahuan!",
      text: message,
      confirmButtonColor: "red",
      confirmButtonText: "Tutup",
    });
  }

  LogoutConfirmation(title) {
    return Swal.fire({
      icon: "question",
      title: title,
      text: "Apakah yakin ingin Keluar dari sistem?",
      confirmButtonColor: "red",
      confirmButtonText: "Iya",
      showCancelButton: true,
      cancelButtonText: "Batal",
      cancelButtonColor: "grey",
    });
  }

  SuccessLogin(message) {
    Swal.fire({
      icon: "success",
      title: "Selamat Datang",
      text: message,
      confirmButtonText: "Tutup",
      confirmButtonColor: "#a3e635",
    });
  }

  AkunAcces(message) {
    Swal.fire({
      icon: "error",
      title: "Pemberitahuan!",
      text: message,
      confirmButtonColor: "red",
      confirmButtonText: "Tutup",
    });
  }

  ResetConfirmation(title) {
    return Swal.fire({
      icon: "question",
      title: title,
      text: "Apakah Anda yakin ingin mereset kata sandi?",
      confirmButtonColor: "grey",
      confirmButtonText: "Reset",
      showCancelButton: true,
      cancelButtonColor: "red",
      cancelButtonText: "Batal",
    });
  }

  SuccessAddCategory() {
    Swal.fire({
      icon: "success",
      title: "Kategori Berhasil Ditambahkan!",
      confirmButtonText: "Tutup",
      confirmButtonColor: "#a3e635",
    });
  }

  SuccessAddMenu() {
    Swal.fire({
      icon: "success",
      title: "Menu Berhasil Ditambahkan!",
      confirmButtonText: "Tutup",
      confirmButtonColor: "#a3e635",
    });
  }

  // New alerts for EditOrder
  SuccessEditOrder() {
    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Harga berhasil ditentukan.",
      confirmButtonText: "Tutup",
      confirmButtonColor: "#a3e635",
    });
  }

  FailedEditOrder() {
    Swal.fire({
      icon: "error",
      title: "Gagal!",
      text: "Harga tidak bisa ditentukan.",
      confirmButtonText: "Tutup",
      confirmButtonColor: "red",
    });
  }
}

export default new AlertComponent();

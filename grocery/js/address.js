function submitAddress() {
    const selectedAddress = document.querySelector('input[name="address"]:checked');
    if (selectedAddress) {
      alert("Selected Address: " + selectedAddress.value);
      // Here, you can perform actions based on the selected address, such as submitting it or further processing
    } else {
      alert("Please select an address.");
    }
  }
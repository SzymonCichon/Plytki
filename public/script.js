window.onload = () => {
    console.log("Załadowano")
    clickable_icon = document.getElementById('clickable_icon')
    clickable_icon.addEventListener(click, () => {
      console.log("Klik")
      
    });
  };
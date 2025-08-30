import './style.css'
import confetti from 'canvas-confetti'

document.querySelector('#app').innerHTML = `
  <div class="card" style="margin-top: 2rem; text-align: center;">
    <form id="userForm">
      <input type="text" id="name" placeholder="Enter your name" required />
      <br /><br />
      <input type="email" id="email" placeholder="Enter your email" required />
      <br /><br />
      <button type="submit" id="submitBtn">Submit</button>
    </form>
  </div>
`

// 👉 Form handling
document.querySelector('#userForm').addEventListener('submit', (e) => {
  e.preventDefault() // prevent page reload
  const name = document.querySelector('#name').value
  const email = document.querySelector('#email').value

  if (name && email) {
    alert(`✅ Submitted!\nName: ${name}\nEmail: ${email}`)

    // 🎉 Launch confetti
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }
    })
  }
})

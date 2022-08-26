// Add your code here
function submitData(name,email){
 

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({name,email}),
      };
      return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const cre = document.createElement('p')
        cre.textContent = data.id
        console.log(data.id)
        const bdy = document.querySelector('body')
        bdy.appendChild(cre)
       
      })
      .catch((error)=> {
      document.querySelector('body').textContent = `${error.message}`
      });
      
}
submitData('steve','steve@steve.com')
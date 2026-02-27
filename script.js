//get request
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => 
    {
        const usersContainer = document.getElementById("users");

        users.forEach(user => 
        {
            //box for user
            const userCard = document.createElement("div");
            userCard.classList.add("user-card");

            userCard.innerHTML = 
            `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
            `;

            usersContainer.appendChild(userCard);
        });
    })

    .catch(error => 
    {
        console.error("Error fetching users:", error);
    });

//delete 10

const id = 10;

fetch(`https://jsonplaceholder.typicode.com/users/${id}`, 
{
    method: "DELETE"
})

.then(response => 
{
    if (response.status === 200 || response.status === 204) 
    {
        console.log(`User ${id} successfully deleted.`);
    } 
    else 
    {
        console.error("Error deleting user. Status code:", response.status);
    }
})

.catch(error => 
{
    console.error("Network error:", error);
});
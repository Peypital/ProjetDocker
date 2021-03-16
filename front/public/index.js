function getNames() {
        fetch("http://localhost:8080/get")
            .then(response => response.json())
            .then(res => {
                const ul = document.createElement("ul");
		res.forEach(({id, name}) => {
			const li = document.createElement("li");
			li.innerHTML = name + " ";
			const button = document.createElement("button");
			button.onclick = () => {
				fetch("http://localhost:8080/del?id=" + id)
					.then(() => console.log("deleted"))
					.then(() => location.reload())
			};
			button.innerHTML = "X";
			li.appendChild(button);
			ul.appendChild(li);
		})
		const body = document.getElementById("body");
		body.appendChild(ul);
	    })
	const form = document.getElementById("form")
	form.onsubmit = (event) => {
		event.preventDefault();
		fetch("http://localhost:8080/add?name=" + form.name.value)
			.then(() => console.log("added"))
			.then(() => location.reload())
	}
    }

getNames()

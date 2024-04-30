const listaPessoas = [
    {
        nome: "John",
        genero: "men" ,
        idade: 18,
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deleniti rerum ullam! Reiciendis sunt exercitationem provident inventore! Iusto molestiae animi velit deserunt itaque accusamus quis rerum. Consequuntur incidunt doloremque ab."
    

    },
    {
        nome: "Jose",
        genero: "men" ,
        idade: 22,
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deleniti rerum ullam! Reiciendis sunt exercitationem provident inventore! Iusto molestiae animi velit deserunt itaque accusamus quis rerum. Consequuntur incidunt doloremque ab."
    
    },
    {
        nome: "carlos",
        genero: "men" ,
        idade: 21,
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deleniti rerum ullam! Reiciendis sunt exercitationem provident inventore! Iusto molestiae animi velit deserunt itaque accusamus quis rerum. Consequuntur incidunt doloremque ab."
    
    },
    {
        nome: "Maria",
        genero: "woman" ,
        idade: 24,
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deleniti rerum ullam! Reiciendis sunt exercitationem provident inventore! Iusto molestiae animi velit deserunt itaque accusamus quis rerum. Consequuntur incidunt doloremque ab."
    
    },
    {
        nome: "Wedna",
        genero: "woman" ,
        idade: 19,
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deleniti rerum ullam! Reiciendis sunt exercitationem provident inventore! Iusto molestiae animi velit deserunt itaque accusamus quis rerum. Consequuntur incidunt doloremque ab."
    
    },
    {
        nome: "Ana",
        genero: "woman" ,
        idade: 21,
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deleniti rerum ullam! Reiciendis sunt exercitationem provident inventore! Iusto molestiae animi velit deserunt itaque accusamus quis rerum. Consequuntur incidunt doloremque ab."
    
    }

]


// const {nome, idade, descricao} = listaPessoas[0]

// console.log(nome)
const container = document.querySelector('#container')

listaPessoas.forEach(({nome,genero, idade, descricao})=>{
    const divPessoa = document.createElement('div')

    divPessoa.innerHTML = `
        <h2>${nome}</2>
        <p>${genero} ${idade}</>
        </br>
        <p>${descricao}</p>
        `

    container.appendChild(divPessoa)
})
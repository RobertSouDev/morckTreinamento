const listaPessoas = [
    {   img:"https://images-ext-1.discordapp.net/external/761FsdR4DZsCm83h0I4tDV8NkApm6rj0CJlMTPFT9Bg/https/randomuser.me/api/portraits/med/men/49.jpg?format=webp",
        nome: "John",
        genero: "men" ,
        idade: 18,
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deleniti rerum ullam! Reiciendis sunt exercitationem provident inventore! Iusto molestiae animi velit deserunt itaque accusamus quis rerum. Consequuntur incidunt doloremque ab."
    

     },
    {
        img:"https://images-ext-1.discordapp.net/external/761FsdR4DZsCm83h0I4tDV8NkApm6rj0CJlMTPFT9Bg/https/randomuser.me/api/portraits/med/men/49.jpg?format=webp",
        nome: "Jose",
        genero: "men" ,
        idade: 22,
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deleniti rerum ullam! Reiciendis sunt exercitationem provident inventore! Iusto molestiae animi velit deserunt itaque accusamus quis rerum. Consequuntur incidunt doloremque ab."
    
    },
    {
        img:"https://images-ext-1.discordapp.net/external/761FsdR4DZsCm83h0I4tDV8NkApm6rj0CJlMTPFT9Bg/https/randomuser.me/api/portraits/med/men/49.jpg?format=webp",
        nome: "carlos",
        genero: "men" ,
        idade: 21,
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deleniti rerum ullam! Reiciendis sunt exercitationem provident inventore! Iusto molestiae animi velit deserunt itaque accusamus quis rerum. Consequuntur incidunt doloremque ab."
    
    },
    {
        img:"https://images-ext-1.discordapp.net/external/ug-kM1sTgHJ5Op3aQz7-oeTXsj-mj_bFFT6xoeOyxIM/https/randomuser.me/api/portraits/women/29.jpg",
        nome: "Maria",
        genero: "woman" ,
        idade: 24,
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deleniti rerum ullam! Reiciendis sunt exercitationem provident inventore! Iusto molestiae animi velit deserunt itaque accusamus quis rerum. Consequuntur incidunt doloremque ab."
    
    },
    {   
        img:"https://images-ext-1.discordapp.net/external/ug-kM1sTgHJ5Op3aQz7-oeTXsj-mj_bFFT6xoeOyxIM/https/randomuser.me/api/portraits/women/29.jpg",
        nome: "Wedna",
        genero: "woman" ,
        idade: 19,
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deleniti rerum ullam! Reiciendis sunt exercitationem provident inventore! Iusto molestiae animi velit deserunt itaque accusamus quis rerum. Consequuntur incidunt doloremque ab."
    
    },
    {
        img:"https://images-ext-1.discordapp.net/external/ug-kM1sTgHJ5Op3aQz7-oeTXsj-mj_bFFT6xoeOyxIM/https/randomuser.me/api/portraits/women/29.jpg",
        nome: "Ana",
        genero: "woman" ,
        idade: 21,
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deleniti rerum ullam! Reiciendis sunt exercitationem provident inventore! Iusto molestiae animi velit deserunt itaque accusamus quis rerum. Consequuntur incidunt doloremque ab."
    
    },
    {
        img:"https://images-ext-1.discordapp.net/external/ug-kM1sTgHJ5Op3aQz7-oeTXsj-mj_bFFT6xoeOyxIM/https/randomuser.me/api/portraits/women/29.jpg",
        nome: "Melissa",
        genero: "woman" ,
        idade: 5,
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deleniti rerum ullam! Reiciendis sunt exercitationem provident inventore! Iusto molestiae animi velit deserunt itaque accusamus quis rerum. Consequuntur incidunt doloremque ab."
    
    }

]

let aberto = false 
// const {nome, idade, descricao} = listaPessoas[0]

// console.log(nome)
const container = document.querySelector('#container')

listaPessoas.forEach(({img, nome,genero, idade, descricao}, i)=>{
    const divPessoa = document.createElement('div')

    divPessoa.classList.add('pessoa') 
    divPessoa.id = `elemento-${i} `

    divPessoa.innerHTML = `
        <h1>${nome}</h1>
        <div class="conteudo">
            <img src="${img}"   alt="" class="# " >
            <p>${genero} ${idade}</>
            </br>
            <p>${descricao}</p>
        </div>
        `


    container.appendChild(divPessoa)

    // if(i == 0){
    //     let conteudo = document.querySelector('.conteudo')
    //     conteudo.classList.add('ativo')
    // }
    divPessoa.addEventListener('click', (e)=>{
        aberto = !aberto 
        let albo = e.target
        console.log(albo)
        let divPessoa = albo
        let conteudo = albo.querySelector('.conteudo')
        console.log(conteudo)

        // aberto ? conteudo.classList.remove('conteudo') : conteudo.classList.add('conteudo')

        // aberto ? conteudo.classList.add('ativo') : conteudo.classList.remove('ativo')
        if(aberto){
            
            conteudo.style.display = "block"
            divPessoa.style.background = "rgb(99, 228, 120)"
            conteudo.style.color = "white"

        }else{
            conteudo.style.display = "none"

       }
        


    })
})




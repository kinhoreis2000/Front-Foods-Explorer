import {Container,Form} from './styles'
import {HeaderAdmin} from '../../components/HeaderAdmin'
import {Footer} from '../../components/Footer'
import {TxtArea} from '../../components/TxtArea'
import {RedButton} from '../../components/RedButton'
import {Input} from '../../components/Input'
import {InputCategory} from '../../components/InputCategory'
import {MealIngredient} from '../../components/MealIngredient'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUpload} from 'react-icons/fi'
import {api} from '../../services/api'


export function NewMeal() {
  const options = ["Prato Principal", "Sobremesas", "Bebidas"];
  
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [imageFile, setImageFile] = useState()
  const [category, setCategory] = useState(options[0]);
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [price, setPrice] = useState('')
  const [newIngredient, setNewIngredient] = useState('')


  const navigate = useNavigate()

  function handleRemoveIngredient(deleted){
    setIngredients(prevState=> prevState.filter(ingredient => ingredient !== deleted))
    setNewIngredient('')
    
  }

  function handleAddIngredient(){
    setIngredients(prevState=> [...prevState, newIngredient])
    setNewIngredient('')
    
    
  }

  function handleAddImage(e) {
    const file = e.target.files[0];
    setImageFile(file)

    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview)

  }
  async function handleSaveMealSubmit(e){
    e.preventDefault()
    const meal = {
      title,
      image,
      description,
      category,
      price,
      ingredients
    }
      await api.post('/meals', meal)

    alert('A tentativa de cadastrar a comida foi feita com sucesso!')
    navigate('/')

  }


  return(

    <Container>
     <HeaderAdmin/>
       <div className = 'Form'>   
        <Link to = '/'>
          <FiArrowLeft/> Voltar 
        </Link>
        <h1>Novo prato</h1>
        <div>
            <Form onSubmit = {handleSaveMealSubmit}>
              <div className = 'infoSide'>
              <div className = 'topInfoSide'>
                <div>
                <p >Imagem do prato</p>
              

                <label   htmlFor='avatar'>
                  <FiUpload />Selecione a imagem
                  <div>
                    <input 
                    id='avatar' 
                    type = 'file'
                    onChange = {handleAddImage}
                    ></input>
                  </div>
                </label>
                </div>
                <div>

                <p>Nome</p>
                <Input 
                difColor
                placeholder = 'Ex: Salada Cezar'
                onChange = {(e)=> setTitle(e.target.value)}
                />
                </div>
                <div>

                <p>Categoria</p>

                <InputCategory 
                placeholder = 'Refeição'
                category={category}
                difColor

                onSelectionChange={(e)=>setCategory(e.target.value)}
                options={options}
                />
                </div>
                
             </div>
             <div className = 'bottomInfoSide'>
              <div>
                  <p>Ingredientes</p>
                  <div className='ingredients bckgrndColor'>
                {
              
                ingredients.map((ingredient, index) => (
                <MealIngredient
                  key = {String(index)}
                  value={ingredient}
                  onClick = {() => handleRemoveIngredient(ingredient)}
                  ></MealIngredient>)
                  )
                
                
              
              }
              
        
      
              <MealIngredient 
              placeholder='Adicionar'
              isNew
              value ={newIngredient}
              onChange= {e=>setNewIngredient(e.target.value)}
              onClick = {handleAddIngredient}
              >
              </MealIngredient>
            
              </div>
              </div>
              <div className ='price'>

                  <p>Preço</p>

                  <Input 
                  type ='text'
                  placeholder = 'R$ 00,00'
                  mask="R$ 00,00"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  difColor
                  />
                  
              
              </div>

                </div>
                </div>
               <div>

                  <p>Descrição</p>
                  <TxtArea 
                  onChange = {(e) => setDescription(e.target.value)}
                  placeholder = 'Fale brevemente sobre o prato, seus ingredientes e composição'
                  />
                </div>

              <div className = 'saveBtn'>

                  <RedButton  title = 'Novo prato'></RedButton> 
              </div>

            </Form>
        </div>
 


       </div>


      <Footer/>
    </Container>



  )
 }


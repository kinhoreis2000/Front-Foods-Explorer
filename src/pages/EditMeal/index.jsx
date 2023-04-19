import {Container,Form} from './styles'
import {HeaderAdmin} from '../../components/HeaderAdmin'
import {Footer} from '../../components/Footer'
import {TxtArea} from '../../components/TxtArea'
import {RedButton} from '../../components/RedButton'
import {Input} from '../../components/Input'
import {InputCategory} from '../../components/InputCategory'
import {MealIngredient} from '../../components/MealIngredient'

import { useState, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { FiArrowLeft, FiUpload} from 'react-icons/fi'
import {useParams} from 'react-router-dom'
import {api} from '../../services/api'
import {useAuth} from '../../hooks/auth'


export function EditMeal() {
  const options = ["Refeições", "Sobremesas", "Bebidas"];
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const params = useParams()
  const [meal, setMeal] = useState({})
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [search, setSearch] = useState('')
  var [price, setPrice] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredientsData, setIngredientsData] = useState('')

  const [imageFile, setImageFile] = useState('')

  const navigate = useNavigate()
  const {user} = useAuth()

  function handleAddImage(e) {
    const file = e.target.files[0];
    setImageFile(file)
  }
  const handleSelectionChange = (event) => {
  setSelectedValue(event.target.value);

  };

  async function handleDeleteMeal(){
    const confirm = window.confirm('Deseja realmente deletar essa refeição?')

    if(confirm) {
      await api.delete(`/meals/${params.id}`)
      alert('Foi deletado com sucesso')
      navigate('/')
    }else {

    }
    
  }
  function handleRemoveIngredient(deleted){

    setIngredients(prevState=> prevState.filter(ingredient => ingredient !== deleted))
    setNewIngredient('')
    
  }

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient])
  }


  async function handleEditMeal (e){
    e.preventDefault()
    
    price = price.toString().replace("R$ ", "").replace(",", ".");  

    const meal = {
      title,
      description,
      ingredients,
      price,
      category: selectedValue
    }

    if(imageFile) {
      try{

        const fileUploadForm = new FormData()

        fileUploadForm.append('image',imageFile)

        await api.patch(`/meals/image/${params.id}`, fileUploadForm, {  
          headers: {
          'Content-Type': 'multipart/form-data'
        }})


        await api.put(`/meals/${params.id}`, meal)
        alert('Sua refeição foi atualizada com sucesso!')
        navigate('/')
      } catch(error){
        console.error(error)
      }

    } 
    else {
      try{
        await api.put(`/meals/${params.id}`, meal)
        alert('Sua refeição foi atualizada com sucesso!')
      } catch(error){
        console.error(error)
      }
    }
  }


  useEffect(()=>{
    async function fetchMeal(){
      const response = await api.get(`/meals/${params.id}`)
      setMeal(response.data)
    }
    fetchMeal()
  } , [params.id])

  useEffect(()=>{
    async function fetchMealDetails(){
      
      setTitle(meal.title)
      setPrice(meal.price)
      setDescription(meal.description)
      setIngredientsData(meal.ingredients)
      setIngredients(ingredientsData.map((ingredient)=> ingredient.name))

      
    }
    fetchMealDetails()
  } , [meal])

  useEffect(()=>{
    if (ingredientsData) {
      setIngredients(ingredientsData.map((ingredient)=> ingredient.name))
    }
  }, [ingredientsData])

  return(

    <Container>
     <HeaderAdmin setSearch = {setSearch} />
     {meal &&
       <div className = 'Form'>   
        <Link to ='/'>
        <FiArrowLeft/> Voltar 
        </Link>
        <h1>Editar prato</h1>
        <div>
            <Form  >
              <div className = 'infoSide'>
              <div className = 'topInfoSide'>
                <div>
                <p >Imagem do prato</p>
              

                <label   htmlFor='avatar'>
                  <FiUpload/>Selecione a imagem
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
                value = {title}
                onChange = {e => setTitle(e.target.value)}
                />
                </div>
                <div>

                <p>Categoria</p>
                <InputCategory 
                  placeholder='Refeição'
                  selectedValue={selectedValue}
                  onSelectionChange={handleSelectionChange}
                  options={options}
                  difColor
                />

                </div>
                
             </div>
             <div className = 'bottomInfoSide'>
              <div>
                  <p>Ingredientes</p>
                  <div className='ingredients bckgrndColor'>


              { ingredients &&

                ingredients.map((ingredient, index) => (
                <MealIngredient
                  key = {String(index)}
                  value={ingredient}
                  onClick = {() => handleRemoveIngredient(ingredient)}

                  ></MealIngredient>)
                  )
                
                
              }
              <MealIngredient
                onChange= {e=>setNewIngredient(e.target.value)}
                value ={newIngredient}
                placeholder='Adicionar'
                isNew
                onClick = {handleAddIngredient}
              
              />
           
              </div>
              </div>
              <div className ='price'>

                  <p>Preço</p>
                  <Input 
                    difColor
                    mask="R$ 00,00"
                    type ='text'
                    value = {String(price)}
                    onChange = {e => setPrice(e.target.value)}
                  />
              </div>

                </div>
                </div>
               <div>

                  <p>Descrição</p>
                
                  <TxtArea 
                  onChange = {e => setDescription(e.target.value)}
                  value = {description}

                  />
                </div>


            </Form>
              <div className = 'saveBtn'>

                 
              <RedButton  onClick={handleDeleteMeal} className='excludeBtn' title='Excluir prato' ></RedButton>

              <RedButton  onClick={handleEditMeal} title='Salvar alterações'></RedButton>


              </div>
        </div>
 


       </div>

    }
      <Footer/>
    </Container>



  )
 }


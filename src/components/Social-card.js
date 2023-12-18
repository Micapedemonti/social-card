import Card from 'react-bootstrap/Card';
import imgCard from '../oficce.png'
import avatar from '../avatar.jpg'
import '../App.css';
import useCounter from '../hooks/useCounter';

const SocialCard =() => {

  const { counter: commentCounter, increment: incrementComments } = useCounter(29);
  const { counter: likeCounter, increment: incrementLikes } = useCounter(3459);

  return (
    <>
  <div className='container' >
    <Card style={{ width: '22rem', height:'26rem' }}>
    <div className='user'>
      <div className='profile-user'>
        <img src={avatar} alt='img-avatar' className='avatar'/>
      </div>
     <div className='name-user'>
    <h1>Developers</h1>
    <p>@holajuniors</p>
    </div>
    <iconify-icon icon="mi:options-vertical" style={{color:"#7c8488", width:"20", height: "20",marginLeft:"60%",marginTop:"2%" }}></iconify-icon>

    </div>

      <Card.Img  src={imgCard} className='img-card' />
      <Card.Body className='body-card'>
        <Card.Text className='text-card'>
        Estos desafíos han sido creados especialmente para mejorar tus habilidades y prepararte para el mundo real.        </Card.Text>
        <div className='footer'>
   
        <button className='btn-footer'   onClick={() => incrementComments(1)}>
        <iconify-icon  icon="octicon:comment-16" style={{color: "#7c8488", width:"15", height:"15"}}></iconify-icon>
        <p>{commentCounter}</p>
        </button>
        <button className='btn-footer' onClick={() => incrementLikes(1)} >
        <iconify-icon className="icon-btn" icon="mdi:heart-outline" style={{color:"#7c8488",width:"20", height:"20"}}></iconify-icon>    
         <p> {likeCounter}</p>  
          </button>
        <button className='btn-footer'>
        <iconify-icon icon="radix-icons:file" style={{color: "#7c8488", width:"17", height:"17", rotate:"180deg"}}></iconify-icon>      
          </button>



        </div>
      </Card.Body>
    </Card>
    </div>  
    
   </>  
  );
}

export default SocialCard
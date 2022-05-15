import out from '../../assets/out.png'
import home from '../../assets/home.png'
import takequiz from '../../assets/takequiz.png'
import createquiz from '../../assets/createquiz.png'
export const items = [
    {itemText: "HOME", itemLink: "/", itemIcon:  <img className='icons-side' src={home}
     alt="" />},
    {itemText: "TAKE QUIZ", itemLink: "/take-quiz", itemIcon:  <img className='icons-side' src={takequiz}
    alt="" /> },
    {itemText: "CREATE QUIZ", itemLink: "/add-quiz-admin", itemIcon:  <img className='icons-side' src={createquiz}
    alt="" />},
    {itemText: "SIGN IN", itemLink: "/sign", itemIcon:  <img className='icons-side' src={out}
    alt="" />},
    
]
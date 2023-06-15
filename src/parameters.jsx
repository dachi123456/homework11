import Box from "./components";
import tokill from './image1.jpg'
import book2 from './th.jpg'
import book3 from './the-great-gatsby-9781471173936_hr.jpg'


export default function Parameters(){
  function action(bookName, chars){
    console.log(` Book name is ${bookName}, and characters are: ${chars}`);
}
    return (
        <div className='main-div'>
        <Box image={tokill} name={'to kill a mockingbird'} description={'Set in the 1930s in a small Southern town, "To Kill a Mockingbird" explores racial injustice through the eyes of Scout Finch, a young girl. When her father, Atticus Finch, defends a black man accused of rape, Scout learns about courage, empathy, and the power of standing up for what is right.'}
        chars={'Scout Finch, Atticus Finch, Jem Finch, Boo Radley.'}
        action={action}
        
        />
        
        <Box image={book2} name={'1984'} description={'"1984" presents a dystopian society ruled by a totalitarian government, where individualism and independent thought are suppressed. Winston Smith, a low-ranking member of the ruling Party, rebels against the oppressive regime, leading to a dangerous journey of resistance and self-discovery.'}
        chars={'Winston Smith, Julia, OBrien, Big Brother'}
        action={action}/>
    
        <Box image={book3} name={'The great Gatsby'} description={'Set in the Jazz Age of the 1920s, "The Great Gatsby" is a tragic love story that examines the decadence, illusions, and dark underbelly of the American Dream. Jay Gatsby, a mysterious millionaire, obsessively pursues his lost love, Daisy Buchanan, amidst the opulence and moral decline of the wealthy elite.'}
        chars={'Jay Gatsby, Nick Carraway, Daisy Buchanan, Tom Buchanan'}
        action={action} 
        />
        </div>
      );
}
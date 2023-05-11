import React,{useState} from 'react';
import Multiselect from 'multiselect-react-dropdown';

// import user from '../assets/user.jpg'


const people = [
  {
    name: 'John Doe',
    image: 'https://picsum.photos/200/300',
  },
  {
    name: 'Jane Smith',
    image: 'https://picsum.photos/200/300',
  },
  {
    name: 'Bob Johnson',
    image: 'https://picsum.photos/200/300',
  },
  {
    name: 'John Doe',
    image: 'https://picsum.photos/200/300',
  },
  {
    name: 'Jane Smith',
    image: 'https://picsum.photos/200/300',
  },
  {
    name: 'Bob Johnson',
    image: 'https://picsum.photos/200/300',
  }
];

const options = people.map(person => ({
  value: person.name,
  label: (
    <div className='flex items-center space-x-2  '>
      <img className='w-8 h-8 rounded-full shadow-md' src={person.image} alt={person.name} />
      <span className='text-gray-700'>{person.name}</span>
    </div>
  )
}));

export default function Multiselectcheck() {
  const [selectedValues, setSelectedValues] = useState([]);

  function handleSelect(selectedList, selectedItem) {
    setSelectedValues(selectedList);
  }

  return (
    <div> 
      <Multiselect
      options={options}
      selectedValues={selectedValues}
      onSelect={handleSelect}
      displayValue="label"
      style={{
        multiselectContainer: {
          color: '#333',
          // backgroundColor: '#f7f7f7',
          borderRadius: '4px',
          padding: '10px',
          backgroundColor: '#fffff',
          
        },
        optionContainer: {
          maxHeight: '200px',
          overflow: 'auto',
          backgroundColor: '#ffffff',
         
        },
        option: {
          backgroundColor: '#fffff',
          padding: '10px',
        },
        optionLabel: {
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          backgroundColor:'cyan',
          boxShadow: '10px',
        },
        optionImage: {
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          // backgroundColor:'cyan',
        }
      }}
    />
    </div>
    
  );
}

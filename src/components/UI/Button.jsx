import './Button.css';

export default function Button({ children, ...props }){
      return (
          <button className='flower-button' {...props}>
              {children}
          </button>
      );

}
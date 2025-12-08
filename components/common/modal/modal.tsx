import { useEffect, useRef, useCallback, MouseEvent} from 'react';
import { MdClose } from "react-icons/md";

type ModalProps = {
  name : string,
  children : React.ReactNode,
  handleClose : ()=>void,
};

const Modal = ({name, children, handleClose} : ModalProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {   
    const body = document.body;
    body.classList.add('no-scroll');  // remove scrolling on backgraund
    window.history.pushState({ modalOpen: true }, '', `${window.location.pathname}#${name}`);

      const handlePopState = (event:PopStateEvent) => {
        if (!event.state || !event.state.modalOpen) {
            handleClose(); // Close the modal
        }
      };
      window.addEventListener('popstate', handlePopState);
    return () => {
      body.classList.remove('no-scroll');
        window.removeEventListener('popstate', handlePopState);
    };
  }, [handleClose]);

  const handleOutsideClose = useCallback(() => {
    if (window.location.hash === `#${name}`) {
       window.history.back(); 
    }
    handleClose(); // Call the parent state handler
  }, [handleClose]);
  
  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
      if(e.target === container.current) {
        handleOutsideClose();
      }
  }
  
  return (
    <div ref={container} className='modal-container' onClick={closeModal} >
      <div className='close-button'>
        <button onClick={handleOutsideClose}><MdClose/></button>
      </div>
      {children}
    </div> 
  )
}

export default Modal

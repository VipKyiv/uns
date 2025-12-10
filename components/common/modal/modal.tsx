import { useEffect, useRef, useCallback, MouseEvent} from 'react';
import { MdClose } from "react-icons/md";

type ModalProps = {
  children : React.ReactNode,
  handleClose : ()=>void,
  zIndex? : number,
  historyKey?: string;
};

const baseStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
} as const;

const Modal = ({children, handleClose, zIndex = 1000, historyKey} : ModalProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {   
    const body = document.body;
    body.classList.add('no-scroll');  // remove scrolling on backgraund
    return () => {
      body.classList.remove('no-scroll');
    };
  }, [handleClose]);

  useEffect(() => {
    if (!historyKey) return; // Не працюємо з історією, якщо ключ не надано
    const stateId = `modal-${historyKey}`;
    window.history.pushState({ modalId: stateId }, '', window.location.href);
    const handlePopState = (event: PopStateEvent) => {
        if (event.state === null || event.state.modalId !== stateId) {
          handleClose(); 
        }
      }

      window.addEventListener('popstate', handlePopState);
      
      return () => {
        window.removeEventListener('popstate', handlePopState);
        // Якщо модалка була закрита користувачем (не кнопкою "Назад"), 
        // потрібно видалити штучний запис з історії.
        if (window.history.state && window.history.state.modalId === stateId) {
            window.history.back(); // Повертаємося назад, видаляючи наш штучний запис
        }
      };
  }, [handleClose, historyKey]);

  // const handleOutsideClose = useCallback(() => {
  //   if (window.location.hash === `#${name}`) {
  //      window.history.back(); 
  //   }
  //   handleClose(); // Call the parent state handler
  // }, [handleClose]);

  const handleOutsideClose = () => {
    console.log('handleOutsideClose name = ', name)
    if (window.location.hash === `#modal${zIndex}`) {
       window.history.back(); 
    }
    handleClose(); // Call the parent state handler
  };
  
  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
      if(e.target === container.current) {
        handleOutsideClose();
      }
  }

  const overlayStyle = {
      ...baseStyles.overlay,
      zIndex: zIndex,
  };
  
  return (
    // <div ref={container} className='modal-container' onClick={closeModal} >
    <div ref={container} style={overlayStyle} onClick={closeModal} >
      <div className='close-button'>
        <button onClick={handleOutsideClose}><MdClose/></button>
      </div>
      {children}
    </div> 
  )
}

export default Modal

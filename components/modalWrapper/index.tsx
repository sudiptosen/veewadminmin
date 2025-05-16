import { PropsWithChildren } from 'react';
import { animated, useSpring } from 'react-spring';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { show, onClose, children } = props;

  const backdropStyle = useSpring({
    opacity: show ? 1 : 0,
    config: { duration: 200 },
  });

  const contentStyle = useSpring({
    transform: show ? 'scale(1)' : 'scale(0.9)',
    opacity: show ? 1 : 0,
  });

  if (!show) {
    return null;
  }

  return (
    <animated.div style={backdropStyle} className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" onClick={onClose}></div>
      <animated.div style={contentStyle} className="bg-white p-4 rounded shadow-lg z-50 relative overflow-y-auto max-h-[80vh] max-w-md">
        {children}
      </animated.div>
    </animated.div>
  );
};

export default Modal;

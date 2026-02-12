import './neonBtn.css';

interface DiagonalSwipeButtonProps {
  text: string;
  onClick?: () => void;
}

export function DiagonalSwipeButton({ text, onClick }: DiagonalSwipeButtonProps) {
  return (
    <button
      className="diagonal-swipe-btn relative overflow-hidden shadow-none transition-all duration-200 ease-in hover:bg-primary hover:shadow-[0_0_30px_5px_var(--color-primary-shadow)] hover:duration-200 hover:ease-out active:shadow-none ctive:transition-shadow active:duration-200 active:ease-in px-5 py-2.5 rounded-[7px] border border-primary text-sm uppercase font-semibold tracking-[2px] bg-transparent text-white cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

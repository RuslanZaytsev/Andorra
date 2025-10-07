interface IArrowDown {
  openDropDown?: () => void;
}

const ArrowDown = ({ openDropDown }: IArrowDown) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={openDropDown}
    >
      <path
        d='M12.5 5V19'
        stroke='#A7B3C0'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.5 12L12.5 19L5.5 12'
        stroke='#A7B3C0'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ArrowDown;
